import React, {Component} from 'react';
import './Build.css';
import axios from 'axios';
import CardsDisplayer from '../CardsDisplayer/CardsDisplayer';
import SelectedCardsList from '../SelectedCardsList/SelectedCardsList';


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
		this.getCardsFromApi()
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
	setCard = (card) => {
		console.log('card', card)
		this.setState({
			selectedCard: card,
			selectedName: card.name
		});
		this.toggler(this.state.iHaveCard);
		
		// this.setSelectedCards(card);
	}

	// toggler=()=> {
	// 	this.setState({
	// 		[property]: !this[property]
	// 	})
	// }

	toggler = (property) => {
		console.log('iHaveCard:', this.state.iHaveCard)
		this.setState((prevState) => {
			return {
				property: !prevState[property]
			};
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
		const {cardsApi, selectedCards} = this.state;
		console.log('selectedCards state', selectedCards)
		// console.log('selectedCareds.length', selectedCards.length);
		return (
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
		)
	}
}

export default Build;