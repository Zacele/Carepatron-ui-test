import React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import { Grid, Typography } from '@mui/material';

type CustomInputProps = TextFieldProps & {
	labelId: string;
	labelText: string;
	error?: boolean;
	helperText?: string;
};

const CustomInput: React.FC<CustomInputProps> = ({ labelId, labelText, error, helperText, ...props }) => {
	return (
		<Grid container>
			<Grid item xs={12}>
				<InputLabel shrink={false} htmlFor={labelId}>
					<Typography>{labelText}</Typography>
				</InputLabel>

				<TextField
					id={labelId}
					fullWidth
					margin='dense'
					InputLabelProps={{
						shrink: true,
					}}
					error={error}
					helperText={helperText}
					{...props}
				/>
			</Grid>
		</Grid>
	);
};

export default CustomInput;
