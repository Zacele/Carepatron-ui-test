import { TableCell, TableRow, useTheme } from '@mui/material';

export interface IProps {
	client: IClient;
}

export default function ClientRow({ client }: IProps) {
	const { id, firstName, lastName, email, phoneNumber } = client;
	const theme = useTheme();
	return (
		<TableRow
			key={id}
			sx={{
				'&:last-child td, &:last-child th': { border: 0 },
				cursor: 'pointer',
				'&:hover': {
					backgroundColor: '#f5f5f5',
				},
			}}
		>
			<TableCell component='th' scope='row' style={{ color: theme.palette.primary.main }}>
				{firstName} {lastName}
			</TableCell>
			<TableCell>{phoneNumber}</TableCell>
			<TableCell>{email}</TableCell>
		</TableRow>
	);
}
