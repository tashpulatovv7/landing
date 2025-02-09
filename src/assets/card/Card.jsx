import './card.css';

const cardData = [
	{
		title: 'Initial Contact',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		img: '/icon/Icon-1.png',
	},
	{
		title: 'Discovery Session',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		img: '/icon/Icon-2.png',
	},
	{
		title: 'Contracting',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		img: '/icon/Icon-3.png',
	},
	{
		title: 'Fast Prototyping',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		img: '/icon/Icon-4.png',
	},
	{
		title: 'Design Phase',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		img: '/icon/Icon-5.png',
	},
	{
		title: 'Develop & Launch',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		img: '/icon/Icon-6.png',
	},
];

const Cards = () => {
	return (
		<div className='cards-container'>
			{cardData.map((card, index) => (
				<div key={index} className='card'>
					<img src={card.img} alt={card.title} className='card-img' />
					<h3>{card.title}</h3>
					<p>{card.description}</p>
				</div>
			))}

			<div className='bg-dd'></div>
		</div>
	);
};

export default Cards;
