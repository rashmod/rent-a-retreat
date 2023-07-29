const KnowMoreModal = ({ closeModal }: { closeModal: () => void }) => {
	return (
		<div>
			<div>KnowMoreModal</div>
			<button onClick={closeModal}>close</button>
		</div>
	);
};

export default KnowMoreModal;
