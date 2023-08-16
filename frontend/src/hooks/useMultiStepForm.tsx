import React, { useState } from 'react';

function useMultiStepForm(formLength: number) {
	const [currentStepIndex, setCurrentStepIndex] = useState(0);

	function goToNextPage() {
		setCurrentStepIndex((prev) => {
			if (prev >= formLength - 1) return prev;
			return prev + 1;
		});
	}

	function goToPreviousPage() {
		setCurrentStepIndex((prev) => {
			if (prev <= 0) return prev;
			return prev - 1;
		});
	}

	function gotoIndex(index: number) {
		if (index < 0 || index > formLength - 1) return;
		setCurrentStepIndex(index);
	}

	return {
		currentStepIndex,
		goToNextPage,
		goToPreviousPage,
		gotoIndex,
		formLength,
		isFirstPage: currentStepIndex === 0,
		isLastPage: currentStepIndex === formLength - 1,
	};
}

export default useMultiStepForm;
