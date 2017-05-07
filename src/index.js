import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { HashRouter, Route, Switch} from 'react-router-dom';


import Movie from './components/movie';

ReactDOM.render(
	<HashRouter>
		<Switch>
			<Route exact path="/movie/:id" component={Movie}/>
			<Route path="/" component={App}/>
		</Switch>
	</HashRouter>,
  document.getElementById('root')
);
