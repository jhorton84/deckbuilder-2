import React from 'react';
import './SelectedCardsList.css';

function SelectedCardsList(props){
	// console.log('props', props)
	const cardsList = props.selectedCards.map(card => {
		return <div className='selectedCards container' key={card.id}>
			{/* <img src={card.image} /> */}
			<p>{card.name}</p>
			<button onClick={()=>{props.deleteCardFromSelectedCards(card.id)}} >Remove</button>
			<button >View</button>
		</div>
	})
	return (
		<div className='card-list-container'>
			<h3>Deck Total:{props.selectedCards.length} </h3>
			{cardsList}
		</div>
	)
}

export default SelectedCardsList;