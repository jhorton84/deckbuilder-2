import React from 'react';
import flip from '../../images/flip.png';
import './CardsDisplayer.css';


//this Component us used and rendered in Build.js to display the cards that are received from the axios call to the external api.

function CardsDisplayer(props) {
	const displayedCards = props.cards.map(card => {
		return card.card_faces ? 
            card.card_faces.find(e => e.hasOwnProperty('image_uris')) ? 
                    <>
                        <div className='flip-card'>
                            <div className='flip-card-inner'>
                                <div className='magic-card-front'>
                                    <img className='magic-card' src={card.card_faces[0].image_uris.png} alt='' key={card.id} onClick={() => {props.setCard({card})}} />
                                    <button className='flip-button'><img src={flip} /></button>
                                </div>
                                <div className='magic-card-back'>
                                    <img className='magic-card' src={card.card_faces[1].image_uris.png} alt='' key={card.id} onClick={() => {props.setCard({card})}} />
                                </div>
                            </div>
                        </div>
                    </>
                    : <img className='magic-card' src={card.image_uris.png} alt='' key={card.id} onClick={() => {props.setCard({card})}} />
                :
			<img className='magic-card' src={card.image_uris.png} alt='' key={card.id} onClick={() => {props.setCard({card})}} />
	})
	return (
		<div className='displayed-cards'>
			{displayedCards}
		</div>
	)
}

export default CardsDisplayer;