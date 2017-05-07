import _ from 'lodash';
import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/search_bar';
import YTSearch from './components/youtubeSearchAPI';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyBAC08O4GSIQ88uQQO1qSA10tqF1dCwllo';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      videos: [],
    };

  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return (
      <div className="App">
        <SearchBar onSubmit={videoSearch} />
        <div>
        <VideoList
          videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

export default App;
