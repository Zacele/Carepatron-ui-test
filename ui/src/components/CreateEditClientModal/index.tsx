import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useModal } from '@/contexts/ModalContext';
import { useMediaQuery } from '@mui/material';

const StyledDialog = styled(Dialog)(({ theme }) => ({
	'& .MuiDialog-container': {
		[theme.breakpoints.down('sm')]: {
			height: '100vh',
			maxHeight: '100vh',
		},
	},
	'& .MuiPaper-root': {
		[theme.breakpoints.down('sm')]: {
			height: '100vh',
			maxHeight: '100vh',
		},
		width: '100%',
		borderRadius: 0,
		[theme.breakpoints.up('sm')]: {
			height: 'auto',
			maxHeight: 'none',
			borderRadius: theme.shape.borderRadius,
			width: 'auto',
			maxWidth: '600px',
			margin: theme.spacing(4),
		},
	},
}));

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: theme.spacing(2),
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
	marginBottom: theme.spacing(2),
}));

const steps = ['Personal details', 'Contact details'];

const CreateEditClientModal: React.FC = () => {
	const { isModalOpen, closeModal } = useModal();
	const fullHeight = useMediaQuery('(max-width:300px)');

	const handleClose = () => {
		closeModal();
	};

	return (
		<React.Fragment>
			<StyledDialog open={isModalOpen} onClose={handleClose} fullScreen={fullHeight}>
				<StyledDialogTitle>
					Create new client
					<IconButton onClick={handleClose}>
						<CloseIcon />
					</IconButton>
				</StyledDialogTitle>
				<Stepper activeStep={0} alternativeLabel>
					{steps.map((label) => (
						<Step key={label}>
							<StepLabel>{label}</StepLabel>
						</Step>
					))}
				</Stepper>
				<DialogContent>
					<StyledTextField
						autoFocus
						margin='dense'
						id='firstName'
						label='First name'
						type='text'
						fullWidth
						variant='outlined'
					/>
					<StyledTextField
						margin='dense'
						id='lastName'
						label='Last name'
						type='text'
						fullWidth
						variant='outlined'
					/>
					<Button color='primary' variant='contained'>
						Continue
					</Button>
				</DialogContent>
			</StyledDialog>
		</React.Fragment>
	);
};

export default CreateEditClientModal;
