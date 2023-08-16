type TFormWrapper = {
	children: React.ReactNode;
};
const FormWrapper = ({ children }: TFormWrapper) => {
	return (
		<>
			<div className='col-span-3 p-10'>{children}</div>
		</>
	);
};

export default FormWrapper;
