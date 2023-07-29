import { XCircle } from 'lucide-react';
import { IModalValues } from '../types/type';

const CLOSE_BTN_SIZE = 40;

const KnowMoreModal = ({
	closeModal,
	content,
}: {
	closeModal: () => void;
	content: IModalValues;
}) => {
	return (
		<div className='w-1/2 px-8 py-5 bg-white rounded-3xl'>
			<div className='flex items-end justify-between mb-5'>
				<h2 className='text-3xl text-black'>{content.title}</h2>
				<button onClick={closeModal}>
					<XCircle
						className='transition duration-200 fill-black stroke-white hover:scale-125 hover:animate-icons'
						strokeWidth={1}
						width={CLOSE_BTN_SIZE}
						height={CLOSE_BTN_SIZE}
					/>
				</button>
			</div>
			<div className='overflow-auto max-h-96'>
				<div className='grid w-3/4 text-black divide-y-2 divide'>
					{content.content.map((item, i) => (
						<div
							key={item.id}
							className={`${i === 0 ? 'pb-3' : 'py-3'}`}>
							<p className='text-lg'>{item.title}</p>
							<p className='text-sm opacity-60'>
								{item.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default KnowMoreModal;
