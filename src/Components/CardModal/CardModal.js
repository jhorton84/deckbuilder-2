import React from 'react';

function CardModal(props){
	console.log('props in CardModal', props);
	return (
		<div className='card-modal-container'>
			<img src={props.selectedCard.image_uris.small} />
			<button onClick={props.toggler} >X</button>
			{/* consider adding flavor text in large text for user and card "details"` */}
		</div>
	)
}

export default CardModal;