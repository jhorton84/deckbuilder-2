import React, {Component} from 'react';
import './Build.css';
import axios from 'axios';
import CardsDisplayer from '../CardsDisplayer/CardsDisplayer';
import SelectedCardsList from '../SelectedCardsList/SelectedCardsList';
import CardModal from '../CardModal/CardModal';


class Build extends Component {
	constructor() {
		super();
		this.state = {
			cardsApi: [],
			selectedCard: '',
			selectedName: '',
			selectedCards: [],
			iHaveCard: false
		}
	}
	componentDidMount=()=>{
		this.getCardsFromApi();
		// axios.get('/api/getStuff').then(res => {
			
		// }).catch(error => {
		// 	console.log('no stuff to get', error);
		// })
	}  

	getCardsFromApi = () => {
		axios.get('https://api.scryfall.com/cards').then(response => {
			// console.log('api', response.data.data);
			this.setState({
				cardsApi: response.data.data
			})
		})
	}
	
	//when a card is selected the card name and card object are set to their respective values in state.
	//then the setSelected cards function is fired which adds the card to the selectedCards array in state.
	// setCard = (card) => {
	// 	console.log('card', card)
	// 	this.setState({
	// 		selectedCard: card,
	// 		selectedName: card.name
	// 	});
	// 	this.toggler(this.state.iHaveCard);
		
	// }

	setCard = (card) => {
		console.log('card in setCard', card);
		axios.post('/api/createCardList', card).then(res => {
			// console.log('response from setCard', res.data);
			this.setState({
				selectedCards: res.data
			})
			console.log('selectedCards', this.state.selectedCards);
		}).catch(error => {
			console.log("error in setCard", error);
		})
	}

	toggler=()=> {
		// console.log('iHaveCard', this.state.iHaveCard);
		this.setState({
			iHaveCard: !this.state.iHaveCard
		})
	}

	setSelectedCards = newCard => {
		// console.log('selected length', this.state.selectedCards.length)
		console.log('newCard', newCard);
		this.setState({
			selectedCards: [...this.state.selectedCards, newCard]
		})
	}

	render() {
		const {cardsApi, selectedCards, selectedCard} = this.state;
		console.log('selectedCards state', selectedCards)
		// console.log('selectedCareds.length', selectedCards.length);
		return (
			<div>
				{
					this.state.iHaveCard && this.state.iHaveCard 
					? <CardModal 
					selectedCard={selectedCard}
					toggler={this.toggler}
					/>
					:
				
				<div className='build-component component-container'>
					searchTools
					<div className='cards-wrapper'>
						<div className='searched-cards'>
							<CardsDisplayer 
								cards={cardsApi}
								setCard={this.setCard}
							/>
						</div>
						<div className='selected-cards'>
							<SelectedCardsList selectedCards={selectedCards} />
						</div>
					</div>
				</div>
				}
			</div>
				
		)
	}
}

export default Build;