import { Routes, Route } from 'react-router-dom';
import './App.css';
import Clients from './pages/Clients';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App() {
	return (
		<div className='App'>
			<QueryClientProvider client={queryClient}>
				<Routes>
					<Route path='/' element={<Clients />} />
				</Routes>
			</QueryClientProvider>
		</div>
	);
}
