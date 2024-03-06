import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { apiGet, apiPost, apiPut } from '../../services/api/apiClient';

function useGetClients() {
	const { data: clientsData } = useQuery<IClient[], Error>({
		queryKey: ['clients'],
		queryFn: () => apiGet<IClient[]>('clients'),
	});

	return { clientsData };
}

function usePostCreateClient() {
	const queryClient = useQueryClient();
	const {
		mutate: createClient,
		isSuccess: isCreateClientSuccess,
		isError: isCreateClientError,
	} = useMutation<IPayloadClient, Error, IPayloadClient>({
		mutationFn: (client) => apiPost<IPayloadClient>('clients', client),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['clients'] });
		},
	});

	return { createClient, isCreateClientSuccess, isCreateClientError };
}

function usePutUpdateClient() {
	const queryClient = useQueryClient();

	const {
		mutate: updateClient,
		isSuccess: isUpdateClientSuccess,
		isError: isUpdateClientError,
	} = useMutation<IPayloadClient, Error, IPayloadClient>({
		mutationFn: (client) => apiPut<IPayloadClient>('clients', client),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['clients'] });
		},
	});

	return { updateClient, isUpdateClientSuccess, isUpdateClientError };
}

export { useGetClients, usePostCreateClient, usePutUpdateClient };
