import React from 'react';
import './Main.css';
import {Switch, Route} from 'react-router-dom';
import Home from '../Home/Home';
import Build from '../Build/Build';

function Main() {
	return (
		<div className='main-component'>
			{/* Main Component */}
			<Switch>
              <Route exact path='/' component = {Home} />
              <Route path='/build' component = {Build} />
            </Switch>
		</div>
	);
}

export default Main;