import { faker } from '@faker-js/faker';

function getRandomIndex(len: number) {
	return Math.floor(Math.random() * len);
}

const generateHouseRule = () => {
	const index = getRandomIndex(houseRules.length);
	const ruleTitle = houseRules[index].ruleTitle;
	const ruleDescription = houseRules[index].ruleDescription;

	return { ruleTitle, ruleDescription };
};

export const houseRules = [
	{
		ruleTitle: 'No Smoking',
		ruleDescription:
			'Smoking is strictly prohibited inside the property. Guests are requested to use designated outdoor areas for smoking purposes.',
	},
	{
		ruleTitle: 'No Parties or Events',
		ruleDescription:
			'Parties, gatherings, and events are not allowed on the premises without prior permission from the host. The property is intended for quiet and peaceful stays.',
	},
	{
		ruleTitle: 'No Pets Allowed',
		ruleDescription:
			'Unfortunately, pets are not permitted on the property. Please make alternate arrangements for your furry friends.',
	},
	{
		ruleTitle: 'Quiet Hours',
		ruleDescription:
			'To ensure a peaceful environment for all guests, quiet hours are in effect from 10:00 PM to 8:00 AM. Please be mindful of noise levels during this time.',
	},
	{
		ruleTitle: 'Maximum Occupancy',
		ruleDescription:
			'The maximum number of guests allowed to stay overnight is specified in the listing. Additional visitors are not permitted without prior approval from the host.',
	},
	{
		ruleTitle: 'No Shoes Inside',
		ruleDescription:
			'Please remove your shoes upon entering the property to maintain cleanliness and preserve the flooring.',
	},
	{
		ruleTitle: 'Respect the Neighbors',
		ruleDescription:
			'Kindly be considerate of the neighbors by avoiding loud music, excessive noise, and disruptive behavior during your stay.',
	},
	{
		ruleTitle: 'Use Appliances and Amenities Safely',
		ruleDescription:
			'Guests are responsible for using all appliances, amenities, and facilities provided in the property safely and as instructed. Any damages caused due to misuse may incur additional charges.',
	},
	{
		ruleTitle: 'Keep the Property Clean',
		ruleDescription:
			'Guests are expected to keep the property clean and tidy during their stay. Please dispose of trash properly and leave the property in a reasonably clean condition.',
	},
	{
		ruleTitle: 'No Unregistered Guests',
		ruleDescription:
			'Only guests who are included in the booking are allowed to stay overnight. Visitors or additional guests must be approved by the host in advance.',
	},
	{
		ruleTitle: 'Check-in and Check-out Times',
		ruleDescription:
			'Please adhere to the specified check-in and check-out times unless alternate arrangements have been made with the host.',
	},
	{
		ruleTitle: 'Security and Safety',
		ruleDescription:
			'Guests are responsible for securing the property during their stay. Please ensure all doors and windows are locked when leaving the premises.',
	},
	{
		ruleTitle: 'Report Damages or Issues',
		ruleDescription:
			'Any damages, malfunctions, or issues in the property should be reported to the host promptly to address them efficiently.',
	},
	{
		ruleTitle: 'Respect the House Rules',
		ruleDescription:
			'Guests are expected to read and comply with all the house rules listed here and any additional rules communicated by the host.',
	},
	{
		ruleTitle: 'Parking Guidelines',
		ruleDescription:
			"Follow the designated parking instructions provided by the host. Unauthorized parking or blocking others' vehicles is not allowed.",
	},
	{
		ruleTitle: 'Swimming Pool Rules',
		ruleDescription:
			'If the property has a swimming pool, guests must abide by the specified pool rules, including hours of operation, safety guidelines, and supervision of children.',
	},
	{
		ruleTitle: 'Use of Fireplaces or BBQ',
		ruleDescription:
			'If the property has fireplaces or BBQ facilities, guests should exercise caution and follow safety instructions provided. Never leave them unattended.',
	},
	{
		ruleTitle: 'Respect the Privacy of Others',
		ruleDescription:
			'Please respect the privacy of other guests or tenants if the property is part of a larger building or complex.',
	},
	{
		ruleTitle: 'Environmental Responsibility',
		ruleDescription:
			'Help us conserve resources by turning off lights, AC units, and other appliances when not in use and practicing responsible water usage.',
	},
	{
		ruleTitle: 'Internet and Wi-Fi Usage',
		ruleDescription:
			'Guests may use the provided internet and Wi-Fi services responsibly and within legal boundaries. Illegal downloads or any other unlawful activities are strictly prohibited.',
	},
	{
		ruleTitle: 'No Illegal Activities',
		ruleDescription:
			'Engaging in any illegal activities, including but not limited to drug use, is strictly prohibited on the property.',
	},
	{
		ruleTitle: 'No Fireworks or Fire Hazards',
		ruleDescription:
			'For safety reasons, the use of fireworks, candles, or any open flames inside the property is not permitted.',
	},
	{
		ruleTitle: 'Respect the Decor and Furnishings',
		ruleDescription:
			'Please treat the decor, furnishings, and personal items in the property with care and respect. Do not rearrange furniture without prior approval from the host.',
	},
	{
		ruleTitle: 'No Unregistered Overnight Guests',
		ruleDescription:
			'Overnight guests who are not included in the original booking are not allowed to stay without prior approval from the host.',
	},
	{
		ruleTitle: 'No Subletting',
		ruleDescription:
			'Subletting or renting out the property to third parties is strictly prohibited.',
	},
	{
		ruleTitle: 'No Tampering with Safety Equipment',
		ruleDescription:
			'Tampering with or disabling smoke detectors, fire extinguishers, or other safety equipment is strictly prohibited.',
	},
	{
		ruleTitle: 'Use of Common Areas',
		ruleDescription:
			'If the property has shared common areas, please be considerate and respectful of other guests or tenants using those areas.',
	},
	{
		ruleTitle: 'No Inappropriate Behavior',
		ruleDescription:
			'Any form of inappropriate behavior, including harassment, discrimination, or violence, will not be tolerated and may result in immediate eviction.',
	},
	{
		ruleTitle: 'No Commercial Activities',
		ruleDescription:
			'The property is for personal use only, and commercial activities such as photo shoots, filming, or hosting events require prior approval from the host.',
	},
	{
		ruleTitle: 'Adhere to Local Laws and Regulations',
		ruleDescription:
			'Guests must comply with all local laws, regulations, and ordinances during their stay.',
	},
	{
		ruleTitle: 'Emergency Contact Information',
		ruleDescription:
			'Guests are provided with emergency contact information for immediate assistance during their stay. Please use it responsibly and only for genuine emergencies.',
	},
	{
		ruleTitle: 'Lock the Property',
		ruleDescription:
			'Guests are responsible for locking the property securely when leaving, even for short periods.',
	},
	{
		ruleTitle: 'Recycling and Waste Disposal',
		ruleDescription:
			'Guests are encouraged to participate in recycling efforts and dispose of waste according to the provided instructions.',
	},
	{
		ruleTitle: "Children's Safety",
		ruleDescription:
			'If traveling with children, parents or guardians are responsible for supervising their safety, especially around swimming pools, balconies, or any potential hazards on the property.',
	},
	{
		ruleTitle: 'Insurance and Liability',
		ruleDescription:
			"The host is not responsible for any loss, damage, or injury to guests' personal belongings or themselves during their stay. It is recommended that guests have appropriate insurance coverage.",
	},
];

export default generateHouseRule;
