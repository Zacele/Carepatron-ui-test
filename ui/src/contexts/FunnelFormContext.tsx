import React, { createContext, useContext, useState } from 'react';

interface FormData {
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
}

interface FormContextProps {
	formData: FormData;
	updateFormData: (newData: Partial<FormData>) => void;
}

const FormContext = createContext<FormContextProps | null>(null);

export const useFunnelContext = () => {
	const context = useContext(FormContext);
	if (!context) {
		throw new Error('useFormContext must be used within a FormProvider');
	}
	return context;
};

export const FormFunnelProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [formData, setFormData] = useState<FormData>({
		firstName: '',
		lastName: '',
		email: '',
		phoneNumber: '',
	});

	const updateFormData = (newData: Partial<FormData>) => {
		setFormData((prevData) => ({ ...prevData, ...newData }));
	};

	return <FormContext.Provider value={{ formData, updateFormData }}>{children}</FormContext.Provider>;
};
