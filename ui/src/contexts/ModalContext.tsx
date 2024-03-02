import React, { createContext, useContext, useState } from 'react';

interface IModalContext {
	isModalOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
}

const ModalContext = createContext<IModalContext>({
	isModalOpen: false,
	openModal: () => {},
	closeModal: () => {},
});

const useModal = () => useContext(ModalContext);

const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [isModalOpen, setModalOpen] = useState(false);

	const openModal = () => setModalOpen(true);
	const closeModal = () => setModalOpen(false);

	return <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>{children}</ModalContext.Provider>;
};

export { ModalProvider, useModal };
