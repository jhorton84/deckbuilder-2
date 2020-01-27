import React from 'react';

function SelectedCardsList(props){
	console.log('props', props)
	const cardsList = props.selectedCards.map(card => {
		return <div className='selectedCards'>
			<img src={card.image_uris.small} />
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