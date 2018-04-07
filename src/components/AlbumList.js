import React, { Component } from 'react';
import { ScrollView } from 'react-native';
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

  /*
   * @description Return the album details list JSX.
   */
  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
