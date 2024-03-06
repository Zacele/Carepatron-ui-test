import { memo } from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import Page from '@/components/Page';
import ClientTable from './ClientTable';
import SearchInput from '@/components/SearchInput';
import { styled } from '@mui/material';
import { useModal } from '@/contexts/ModalContext';
import CreateEditClientModal from '@/components/CreateEditClientModal';

const CreateButton = styled(Button)(({ theme }) => {
	return {
		marginLeft: '16px',
		backgroundColor: theme.palette.primary.main,
		color: '#fff',
		'&:hover': {
			backgroundColor: theme.palette.primary.main,
		},
	};
});

const Container = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	paddingTop: '16px',
	backgroundColor: '#f5f5f5',
});

function Clients() {
	const { openModal } = useModal();
	return (
		<Page>
			<Typography variant='h4' sx={{ textAlign: 'start' }}>
				Clients
			</Typography>
			<CreateEditClientModal />
			<Container>
				<Box display={'flex'} alignItems={'flex-start'} flex={1} marginRight={2}>
					<SearchInput placeholder='Search clients...' />
				</Box>
				<CreateButton variant='contained' onClick={openModal}>
					Create new client
				</CreateButton>
			</Container>
			<Paper sx={{ margin: 'auto', marginTop: 3 }}>
				<ClientTable />
			</Paper>
		</Page>
	);
}

export default memo(Clients);
