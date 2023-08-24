import { TNavigationProps } from '../../components/form/Navigation';

export type TStepProps = TNavigationProps & {
	goToNextPage: () => void;
};
