import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { apiGet, apiPost, apiPut } from '../../services/api/apiClient';
import { useSnackbar } from '@/contexts/SnackBarContext';

function useGetClients() {
	const { data: clientsData } = useQuery<IClient[], Error>({
		queryKey: ['clients'],
		queryFn: () => apiGet<IClient[]>('clients'),
	});

	return { clientsData };
}

function usePostCreateClient() {
	const queryClient = useQueryClient();
	const { showSnackbar } = useSnackbar();
	const {
		mutate: createClient,
		isSuccess: isCreateClientSuccess,
		isError: isCreateClientError,
	} = useMutation<IPayloadClient, Error, IPayloadClient>({
		mutationFn: (client) => apiPost<IPayloadClient>('clients', client),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['clients'] });
		},
		onError: (error) => {
			showSnackbar(`Client created error: ${error.message}`, 'error');
		},
	});

	return { createClient, isCreateClientSuccess, isCreateClientError };
}

function usePutUpdateClient() {
	const queryClient = useQueryClient();
	const { showSnackbar } = useSnackbar();
	const {
		mutate: updateClient,
		isSuccess: isUpdateClientSuccess,
		isError: isUpdateClientError,
	} = useMutation<IPayloadClient, Error, IPayloadClient>({
		mutationFn: (client) => apiPut<IPayloadClient>('clients', client),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['clients'] });
		},
		onError: (error) => {
			showSnackbar(`Update client error: ${error.message}`, 'error');
		},
	});

	return { updateClient, isUpdateClientSuccess, isUpdateClientError };
}

export { useGetClients, usePostCreateClient, usePutUpdateClient };
