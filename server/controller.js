
module.exports = {

	setCardToList: (req, res) => {
		// console.log('req.session', req.session);
		// console.log('card from build', req.body.card);
		if(!req.session.deckCards ){
			req.session.deckCards = [];
		}
		const {name, image_uris, id} = req.body.card;
		const newCard = {
			name: name.toLowerCase(),
			image: image_uris.png,
			id
		}
		console.log('newCard', newCard);
		req.session.deckCards.push(newCard)
		// console.log('sending deckCards to front-end', req.session.deckCards);
		res.status(200).send(req.session.deckCards)


	}

}