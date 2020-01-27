import React from 'react';

function SelectedCardModal(props) {
	return (
		<div className='selectedCardModal'>
			{props.card.image_uris.small}
			<button >Add</button>
			<button >X</button>
		</div>
	)
}

export default SelectedCardModal;