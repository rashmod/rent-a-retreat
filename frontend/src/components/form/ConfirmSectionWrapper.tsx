function ConfirmSectionWrapper({ children }: { children: React.ReactNode }) {
	return (
		<div className='grid gap-1 pt-2 pb-1 first:pt-0 last:pb-0'>
			{children}
		</div>
	);
}

export default ConfirmSectionWrapper;
