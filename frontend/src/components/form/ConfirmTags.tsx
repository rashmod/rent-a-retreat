import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '../ui/accordion';

type TConfirmTagsProps<T> = {
	content: T[];
	title: { single: string; many: string };
	getId: (item: T) => string;
	getTitle: (item: T) => string;
	getDesc: (item: T) => string;
};

const ConfirmTags = <T,>({
	content,
	title,
	getId,
	getTitle,
	getDesc,
}: TConfirmTagsProps<T>) => {
	return (
		<div className='pb-2 last:pb-0'>
			<div className='text-base text-gray-500'>
				{content.length > 1 ? title.many : title.single}
			</div>
			<Accordion type='multiple' className='grid w-4/5'>
				{content.map((item, i) => (
					<AccordionItem
						className={`${i === 0 ? 'pb-1' : 'py-1'}`}
						key={getId(item)}
						value={getId(item)}>
						<AccordionTrigger className='py-1 text-xs font-normal'>
							{getTitle(item)}
						</AccordionTrigger>
						<AccordionContent className='text-xs opacity-60'>
							{getDesc(item)}
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
};

export default ConfirmTags;
