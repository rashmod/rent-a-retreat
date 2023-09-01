const debounce = <T extends (...args: any[]) => void>(
	func: T,
	delay: number
) => {
	let timeout: number;
	return (...args: Parameters<T>) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			func(...args);
		}, delay);
	};
};

export default debounce;
