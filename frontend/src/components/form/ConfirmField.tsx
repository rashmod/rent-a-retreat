const ConfirmField = ({
	label,
	value,
}: {
	label: string;
	value: string | number | boolean | undefined;
}) => {
	const valueType = typeof value;
	const displayValue =
		valueType === 'string' || valueType === 'number'
			? value
			: valueType === 'boolean'
			? value
				? 'Yes'
				: 'No'
			: 'Not Applicable';
	return (
		<div>
			<div className='text-xs text-gray-500'>{label}</div>
			<div className='text-sm'>{displayValue}</div>
		</div>
	);
};

export default ConfirmField;
