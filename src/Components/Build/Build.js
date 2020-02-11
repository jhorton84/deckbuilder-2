import React, {Component} from 'react';
import './Build.css';
import axios from 'axios';
import CardsDisplayer from '../CardsDisplayer/CardsDisplayer';
import SelectedCardsList from '../SelectedCardsList/SelectedCardsList';
import CardModal from '../CardModal/CardModal';
import Search from '../Search/Search';

class Build extends Component {
	constructor() {
		super();
		this.state = {
			cardsApi: [],
			selectedCard: '',
			selectedName: '',
			selectedCards: [],
			iHaveCard: false,
			searchNameValue: ''
		}
	}
	componentDidMount=()=>{
		this.getCardsFromApi();
	}  

	getCardsFromApi = () => {
		axios.get('https://api.scryfall.com/cards').then(response => {
			// console.log('api', response.data.data);
			this.setState({
				cardsApi: response.data.data
			})
		})
	}

	searchApi = () => {
		axios.get(`https://api.scryfall.com/cards/search/?q=${this.state.searchNameValue}`).then(res => {
			this.setState({
				cardsApi:res.data.data
			})
		})
		this.setState({
			searchNameValue: ''
		})
	}

	setName = (name) => {
		this.setState({
			searchNameValue: name
		})
	}
	
	//when a card is selected the card name and card object are set to their respective values in state.
	//then the setSelected cards function is fired which adds the card to the selectedCards array in state.
	selectCard = (card) => {
		console.log('card passed into selectCard function', card)
		this.setState({
			selectedCard: card,
			selectedName: card.name
		});
		this.toggler(this.state.iHaveCard);
	}

	setCard = (card) => {
		console.log('card in setCard', card);
		axios.post('/api/selectedCards', card).then(res => {
			// console.log('response from setCard', res.data);
			this.setState({
				selectedCards: res.data
			})
			console.log('selectedCards', this.state.selectedCards);
		}).catch(error => {
			console.log("error in setCard", error);
		})
		this.toggler(this.state.iHaveCard);
	}

	toggler=()=> {
		// console.log('iHaveCard', this.state.iHaveCard);
		this.setState({
			iHaveCard: !this.state.iHaveCard,
		})
	}

	deleteCardFromSelectedCards = (id) => {
		axios.delete(`/api/selectedCards/${id}`).then(res => {
			console.log('cards after delete server', res.data)
			this.setState({
				selectedCards: res.data
			})
		})
	}

	render() {
		const {cardsApi, selectedCards, selectedCard} = this.state;
		// console.log('selectedCards state', selectedCards)
		// console.log('selectedCards.length', selectedCards.length);
		return (
			<div className='cards-container'>
				{
					this.state.iHaveCard && this.state.iHaveCard 
					? <CardModal 
						selectedCard={selectedCard}
						toggler={this.toggler}
						setCard={this.setCard}
						selectedCards={selectedCards}
						deleteCardFromSelectedCards={this.deleteCardFromSelectedCards} 
					/>
					:
				
				<div className='build-component component-container'>
					<Search 
						setName={this.setName}
						searchApi={this.searchApi}
					/>
					<div className='cards-wrapper'>
						<div className='searched-cards'>
							<CardsDisplayer 
								cards={cardsApi}
								setCard={this.setCard}
								toggler={this.toggler}
								selectCard={this.selectCard}
							/>
						</div>
						<div className='selected-cards'>
							<SelectedCardsList 
								selectedCards={selectedCards}
								deleteCardFromSelectedCards={this.deleteCardFromSelectedCards} 
							/>
						</div>
					</div>
				</div>
				}
			</div>
				
		)
	}
}

export default Build;