function ConfirmSectionHeader({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		<h3 className='flex justify-between mb-0.5'>
			<span className='text-lg font-semibold'>{title}</span>
			{children}
		</h3>
	);
}

export default ConfirmSectionHeader;
