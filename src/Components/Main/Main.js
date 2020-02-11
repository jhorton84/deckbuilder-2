import React from 'react';
import './Main.css';
import {Switch, Route} from 'react-router-dom';
import Home from '../Home/Home';
import Build from '../Build/Build';
import SavedDecks from '../SavedDecks/SavedDecks';

function Main() {
	return (
		<div className='main-component'>
			{/* Main Component */}
			<Switch>
              <Route exact path='/' component = {Home} />
              <Route path='/build' component = {Build} />
              <Route path='/saved' component = {SavedDecks} />
            </Switch>
		</div>
	);
}

export default Main;