// write an api get hook with react-query

import { useQuery } from '@tanstack/react-query';
import { apiGet } from '../../services/api/apiClient';

function useGetClients() {
	const { data: clientsData } = useQuery<IClient[], Error>({
		queryKey: ['clients'],
		queryFn: () => apiGet<IClient[]>('clients'),
	});

	return { clientsData };
}

export { useGetClients };
