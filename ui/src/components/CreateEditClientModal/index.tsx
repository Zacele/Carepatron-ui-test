import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useModal } from '@/contexts/ModalContext';
import { useMediaQuery } from '@mui/material';
import { FormStepOne, FormStepTwo } from '../FormFunnel';
import { FormFunnelProvider } from '@/contexts/FunnelFormContext';

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
			margin: 'unset',
		},
		width: '100%',
		borderRadius: 0,
		[theme.breakpoints.up('sm')]: {
			height: 'auto',
			maxHeight: 'none',
			borderRadius: theme.shape.borderRadius,
			width: 'auto',
			minWidth: '600px',
			margin: theme.spacing(4),
		},
	},
}));

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: theme.spacing(2),
	paddingLeft: theme.spacing(3),
}));

const StyledStep = styled(Step)(({ theme }) => ({
	'&.MuiStep-root:first-of-type': {
		paddingLeft: '24px',
	},
	'&.MuiStep-root:last-of-type': {
		paddingRight: '24px',
	},
}));

const steps = ['Personal details', 'Contact details'];

const CreateEditClientModal: React.FC = () => {
	const [currentStep, setCurrentStep] = React.useState(0);
	const { isModalOpen, closeModal } = useModal();

	const fullHeight = useMediaQuery('(max-width:300px)');

	const handleClose = () => {
		closeModal();
		setCurrentStep(0);
	};

	const goToStepTwo = () => setCurrentStep(1);
	const onStepTwoFinish = () => {
		closeModal();
		setCurrentStep(0);
	};
	const onBackClick = () => setCurrentStep(0);

	return (
		<React.Fragment>
			<StyledDialog open={isModalOpen} onClose={handleClose} fullScreen={fullHeight}>
				<StyledDialogTitle>
					Create new client
					<IconButton onClick={handleClose}>
						<CloseIcon />
					</IconButton>
				</StyledDialogTitle>
				<Stepper activeStep={currentStep}>
					{steps.map((label) => (
						<StyledStep key={label}>
							<StepLabel> {label}</StepLabel>
						</StyledStep>
					))}
				</Stepper>
				<FormFunnelProvider>
					<DialogContent>
						{currentStep === 0 && <FormStepOne onNext={goToStepTwo} />}
						{currentStep === 1 && <FormStepTwo onFinish={onStepTwoFinish} onBackClick={onBackClick} />}
					</DialogContent>
				</FormFunnelProvider>
			</StyledDialog>
		</React.Fragment>
	);
};

export default CreateEditClientModal;
