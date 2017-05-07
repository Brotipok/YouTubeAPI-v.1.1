import _ from 'lodash';
import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import {connect} from 'react-redux';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      videos: [],
    };
  }

  videoShow(videos){
    this.setState({videos: this.props.state[0]});
  }

  render() {
    const videoShow = _.debounce((videos) => {this.videoShow(videos)}, 300);
    return (
      <div className="App">
        <SearchBar onSubmit={videoShow}/>
        <div>
        <VideoList videos={this.state.videos} />
        </div>
      </div>
    );
  }
}
export default connect(
  state => ({
    state: state
  }),
  dispatch => ({})
)(App);
