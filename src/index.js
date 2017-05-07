import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import YTSearch from './components/youtubeSearchAPI';

import Movie from './components/movie';


const API_KEY = 'AIzaSyBAC08O4GSIQ88uQQO1qSA10tqF1dCwllo';

const store = createStore(movieSearch);

const initialState =[];

function videoSearch(term) {
	YTSearch({key: API_KEY, term: term}, (videos) => {
		store.dispatch({type: 'SHOW_VIDEO_LIST', payload: videos});
	});
}

function movieSearch(state = initialState, action) {
	if (action.type === 'SEARCH_MOVIE') {
		return (videoSearch(action.payload));
	}
	else if (action.type ==='SHOW_VIDEO_LIST') {
		return [
		...state,
		action.payload
		];
	}
	return state;
}
ReactDOM.render(
	<Provider store={store}>
		<HashRouter>
			<Switch>
				<Route exact path="/movie/:id" component={Movie}/>
				<Route path="/" component={App}/>
			</Switch>
		</HashRouter>
	</Provider>,
  document.getElementById('root')
);



