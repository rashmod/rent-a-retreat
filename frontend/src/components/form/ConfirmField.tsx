function ConfirmField({ label, value }: { label: string; value: string }) {
	return (
		<div>
			<div className='text-xs text-gray-500'>{label}</div>
			<div className='text-sm'>{value}</div>
		</div>
	);
}

export default ConfirmField;
