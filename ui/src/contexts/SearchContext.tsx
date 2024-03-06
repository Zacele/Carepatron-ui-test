import React, { createContext, useContext, ReactNode, useState } from 'react';

interface SearchContextType {
	searchQuery: string;
	setSearchQuery: (query: string) => void;
	filterContacts: (contacts: IClient[]) => IClient[];
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

interface SearchProviderProps {
	children: ReactNode;
}

export const useSearch = () => {
	const context = useContext(SearchContext);
	if (context === undefined) {
		throw new Error('useSearch must be used within a SearchProvider');
	}
	return context;
};

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
	const [searchQuery, setSearchQuery] = useState('');

	const filterContacts = (clients: IClient[]): IClient[] => {
		return clients.filter((client) =>
			`${client.firstName} ${client.lastName}`.toLowerCase().includes(searchQuery.toLowerCase())
		);
	};

	return (
		<SearchContext.Provider value={{ searchQuery, setSearchQuery, filterContacts }}>
			{children}
		</SearchContext.Provider>
	);
};
