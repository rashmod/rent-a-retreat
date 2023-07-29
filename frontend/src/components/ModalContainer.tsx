import React from 'react';

const ModalContainer = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='fixed inset-0 bottom-0 z-50 flex items-center justify-center text-white bg-black bg-opacity-50 backdrop-blur'>
			{children}
		</div>
	);
};

export default ModalContainer;
