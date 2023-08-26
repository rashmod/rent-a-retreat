import React from 'react';

const ModalContainer = ({
	children,
	closeModal,
}: {
	closeModal?: () => void;
	children: React.ReactNode;
}) => {
	return (
		<div
			onClick={closeModal}
			className='fixed inset-0 bottom-0 z-50 flex items-center justify-center text-white bg-black bg-opacity-50 backdrop-blur py-14'>
			{children}
		</div>
	);
};

export default ModalContainer;
