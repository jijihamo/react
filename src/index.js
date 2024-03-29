import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyB91nlhbLGapWJOrKu5Ut57_aDWT2rlw7Y';


// Create a new component. this component should
// produce some HTML
class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		YTSearch({key:API_KEY, term:'paulkim'}, (videos) => {
			this.setState({
				videos : videos,
				selectedVideo : videos[2]
			});
			// this.setState({videos: videos});
		});
	}

	render(){
		return (
		<div>
			<SearchBar />
			<VideoDetail video={this.state.selectedVideo}/>
			<VideoList
				onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
				videos={this.state.videos}/>
		</div>
		);
	}
}

// Take this component's generated HTML
// and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

