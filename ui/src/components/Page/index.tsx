import React from 'react';
import Box from '@mui/material/Box';

export default function Page({ children }: { children?: React.ReactNode }) {
	return (
		<Box
			sx={{
				margin: 'auto',
				marginTop: '24px',
				maxWidth: '700px',
				'@media (max-width: 600px)': {
					marginX: 2,
				},
			}}
		>
			{children}
		</Box>
	);
}
