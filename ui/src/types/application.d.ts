interface IClient {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
}

interface IApplicationState {
	clients: IClient[];
}

interface SearchInputProps {
	placeholder: string;
}

type IPayloadClient = Omit<IClient, 'id'>;
