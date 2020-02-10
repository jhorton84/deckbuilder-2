
module.exports = {

	setCardToList: (req, res) => {
		// console.log('req.session', req.session);
		// console.log('card from build', req.body);
		if(!req.session.deckCards ){
			req.session.deckCards = [];
		}
		const {name, image_uris, id} = req.body;
		const newCard = {
			name: name.toLowerCase(),
			image: image_uris.png,
			id
		}
		// console.log('newCard', newCard);
		req.session.deckCards.push(newCard)
		// console.log('sending deckCards to front-end', req.session.deckCards);
		res.status(200).send(req.session.deckCards)


	},

	deleteCardFromSelectedCardList: (req, res) => {
		// console.log('id for selectedCard delete', req.params);
		// console.log('req.session.deckCards', req.session.deckCards);
		// const {deckCards} = req.session;
		const {id} = req.params;
		const cards = req.session.deckCards.filter(card => {
			// console.log(card.name,'card.id:', card.id, 'id:',id)
			if(card.id !== id){
				return card
			}
		})
		// console.log('cards', cards)
		req.session.deckCards = cards;
		// console.log('deckCards after delete', req.session.deckCards);
		res.status(200).send(req.session.deckCards);
	}

}