import React from 'react';

function SelectedCardsList(props){
	console.log('props', props)
	const cardsList = props.selectedCards.map(card => {
		return <div className='selectedCards' key={card.id}>
			<img src={card.image} />
			<button>x</button>
		</div>
	})
	return (
		<div>
			{cardsList}
		</div>
	)
}

export default SelectedCardsList;