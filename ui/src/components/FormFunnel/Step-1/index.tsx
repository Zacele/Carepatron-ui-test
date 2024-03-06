import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useFunnelContext } from '@/contexts/FunnelFormContext';
import CustomInput from '@/components/CustomInput';
import { Box, Button, Grid } from '@mui/material';

interface StepOneFormData {
	firstName: string;
	lastName: string;
}

interface StepOneProps {
	onNext: () => void;
}

const FormStepOne: React.FC<StepOneProps> = ({ onNext }) => {
	const { updateFormData, formData } = useFunnelContext();
	const { handleSubmit, control } = useForm<StepOneFormData>({
		defaultValues: {
			firstName: formData.firstName,
			lastName: formData.lastName,
		},
	});

	const onSubmit = (data: StepOneFormData) => {
		updateFormData(data);
		onNext();
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Box>
				<Controller
					name='firstName'
					control={control}
					rules={{
						required: 'First Name is required',
					}}
					render={({ field, fieldState: { error } }) => (
						<CustomInput
							error={!!error}
							helperText={error ? error.message : ''}
							labelId={'firstName'}
							labelText='First Name'
							{...field}
						/>
					)}
				/>
				<Controller
					name='lastName'
					rules={{
						required: 'Last Name is required',
					}}
					control={control}
					render={({ field, fieldState: { error } }) => (
						<CustomInput
							error={!!error}
							helperText={error ? error.message : ''}
							labelId={'lastName'}
							labelText='Last Name'
							{...field}
						/>
					)}
				/>
			</Box>
			<Grid container style={{ marginTop: 60 }} justifyContent='flex-end'>
				<Grid item>
					<Button variant='contained' color='primary' type='submit'>
						Continue
					</Button>
				</Grid>
			</Grid>
		</form>
	);
};

export default FormStepOne;
