import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  constructor(props) {
		super(props);
    this.state = { albums: [] };
  }

  /**
	 * Lifecycle event handler called just after the App loads into the DOM.
	 * Call the API to get all books if the user is logged.
	 */
	componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(
      response => this.setState({ albums: response.data })
    );
  }

  render() {
    console.log(this.state.albums);
    const { albums } = this.state;

    return (
      <View>
        {albums.map(album =>
          <AlbumDetail key={album.title} album={album} />
        )}
      </View>
    );
  }
}

export default AlbumList;
