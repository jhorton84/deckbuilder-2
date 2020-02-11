import React from 'react';
import './Search.css';

function Search(props) {
	return (
		<div className='Search'>
			<input placeholder="Search card's name" onChange={e => props.setName(e.target.value)} />
			<input placeholder="Search Flavor Text" onChange={e => props.setName(e.target.value)} />
			<button onClick={() => props.searchApi()}>search</button>
		</div>
	)
}

export default Search;