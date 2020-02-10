import React from 'react';
import './CardModal.css';
// import SelectedCardsList from '../SelectedCardsList/SelectedCardsList';

function CardModal(props){
	console.log('props in CardModal', props);
	return (
		<div className='card-modal-container component-container'>
			<div className='modal-container-inner container' >
				<img src={props.selectedCard.image_uris.small} />
				<button className='delete-button' onClick={()=>props.toggler()} >X</button>
				<button className='modal-button' onClick={() => props.setCard(props.selectedCard)} >Add</button>
			</div>
			{/* <SelectedCardsList 
				selectedCards={props.selectedCards}
			/> */}
		</div>
	)
}

export default CardModal;