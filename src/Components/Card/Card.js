import React from 'react';
import flip from '../../images/flip.png';
import './Card.css';

function Card(props) {
	const {card} = props;
	return (
		<div className='Card' >
			{card.card_faces ? 
            card.card_faces.find(e => e.hasOwnProperty('image_uris')) ? 
                    <>
                        <div className='flip-card'>
                            <div className='flip-card-inner'>
                                <div className='magic-card-front'>
                                    <img className='magic-card' src={card.card_faces[0].image_uris.png} alt='' key={card.id} onClick={() => {props.selectCard(card)}} />
                                    <button className='flip-button'><img src={flip} />Flip</button>
                                </div>
                                <div className='magic-card-back'>
                                    <img className='magic-card' src={card.card_faces[1].image_uris.png} alt='' key={card.id} onClick={() => {props.selectCard(card)}} />
                                </div>
                            </div>
                        </div>
                    </>
                    : <img className='magic-card' src={card.image_uris.png} alt='' key={card.id} onClick={() => {props.selectCard(card)}} />
                :
			<img className='magic-card' src={card.image_uris.png} alt='' key={card.id} onClick={() => {props.selectCard(card)}} />}
		</div>
	)
}

export default Card;