import React from 'react';

function CardModal(props){
	console.log('props in CardModal', props);
	return (
		<div className='card-modal-container'>
			<img src={props.selectedCard.image_uris.small} />
			<button onClick={props.toggler} >X</button>
		</div>
	)
}

export default CardModal;