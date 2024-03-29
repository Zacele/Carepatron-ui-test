import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ClientRow from './ClientRow';
import { useGetClients } from '@/hooks/api';
import { useSearch } from '@/contexts/SearchContext';

export default function BasicTable() {
	const { clientsData } = useGetClients();
	const { filterContacts } = useSearch();

	const filteredClient = filterContacts(clientsData ?? []);

	return (
		<TableContainer component={Paper} sx={{ maxWidth: '100%' }}>
			<Table sx={{ minWidth: 400 }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>
						<TableCell>Phone number</TableCell>
						<TableCell>Email</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{filteredClient?.map((client) => (
						<ClientRow key={client.id} client={client} />
					))}
					{!filteredClient ||
						(!filteredClient.length && (
							<TableRow sx={{ padding: 3 }}>
								<TableCell component='th' scope='row'>
									No clients
								</TableCell>
							</TableRow>
						))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
