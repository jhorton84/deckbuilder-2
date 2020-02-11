import React from 'react';
import './CardsDisplayer.css';
import Card from '../Card/Card';


//this Component us used and rendered in Build.js to display the cards that are received from the axios call to the external api.

function CardsDisplayer(props) {
	const displayedCards = props.cards.map(card => {
		return <Card card={card} selectCard={props.selectCard} />
	})
	return (
		<div className='displayed-cards'>
			{displayedCards}
		</div>
	)
}

export default CardsDisplayer;