import { faker } from '@faker-js/faker';

const generateHouseRule = () => {
	const ruleTitle = faker.company.catchPhraseAdjective();
	const ruleDescription = faker.company.catchPhraseDescriptor();

	return { ruleTitle, ruleDescription };
};

export default generateHouseRule;
