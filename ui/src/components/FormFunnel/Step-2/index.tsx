import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useFunnelContext } from '@/contexts/FunnelFormContext';
import CustomInput from '@/components/CustomInput';
import { Box, Button, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { usePostCreateClient } from '@/hooks/api';

interface StepTwoFormData {
	email: string;
	phoneNumber: string;
}

interface StepOneProps {
	onFinish: () => void;
	onBackClick: () => void;
}

const FormStepTwo: React.FC<StepOneProps> = ({ onFinish, onBackClick }) => {
	const { formData } = useFunnelContext();

	const { handleSubmit, control } = useForm<StepTwoFormData>();
	const { createClient, isCreateClientSuccess } = usePostCreateClient();

	const onSubmit = (data: StepTwoFormData) => {
		const completedData = { ...formData, ...data };
		createClient(completedData);
	};

	useEffect(() => {
		if (isCreateClientSuccess) {
			onFinish();
		}
	}, [isCreateClientSuccess, onFinish]);

	const phonePattern = /^\+\d{10,12}$/;
	const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Box>
				<Controller
					name='email'
					control={control}
					rules={{
						required: 'Email is required',
						pattern: {
							value: emailPattern,
							message: 'Invalid email',
						},
					}}
					render={({ field, fieldState: { error } }) => (
						<CustomInput
							error={!!error}
							helperText={error ? error.message : ''}
							labelId={'email'}
							labelText='Email'
							type='email'
							{...field}
						/>
					)}
				/>
				<Controller
					name='phoneNumber'
					control={control}
					rules={{
						required: 'Phone number is required',
						pattern: {
							value: phonePattern,
							message:
								'Invalid phone number. Must start with country code and be between 10 and 12 digits long',
						},
					}}
					render={({ field, fieldState: { error } }) => (
						<CustomInput
							error={!!error}
							helperText={error ? error.message : ''}
							labelId={'phoneNumber'}
							labelText='Phone Number'
							type='tel'
							{...field}
						/>
					)}
				/>
			</Box>

			<Grid container style={{ marginTop: 60 }} spacing={2}>
				<Grid item xs={6}>
					<Button
						variant='text'
						onClick={onBackClick}
						sx={{ height: '40px', textTransform: 'none' }}
						startIcon={<ArrowBackIcon />}
					>
						Back
					</Button>
				</Grid>
				<Grid item xs={6} display={'flex'} justifyContent='flex-end'>
					<Button
						type='submit'
						variant='contained'
						color='primary'
						sx={{ height: '40px', textTransform: 'none', padding: '0 24px' }}
					>
						Create client
					</Button>
				</Grid>
			</Grid>
		</form>
	);
};

export default FormStepTwo;
