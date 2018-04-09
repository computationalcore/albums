import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

/**
 * @description	The Album list Component.
 * @constructor
 * @param {Object} props - The props that were defined by the caller of this component.
 */
class AlbumList extends Component {
  constructor(props) {
		super(props);

    /**
		 * @typedef {Object} ComponentState
		 * @property {Object[]} albums - All albums from the logged account.
		 * @property {number} request - App request state used to represent the API request/response.
		 * @property {boolean} menuOpen - Main Screen menu state.
		 * @property {Object[]} searchResults - All books returned from the search.
		 * @property {string} query - Search term input.
		 */

		/** @type {ComponentState} */
    this.state = {
      albums: [],
      loading: true
    };
  }

  /**
	 * Lifecycle event handler called just after the App loads into the DOM.
	 * Call the API to get all books if the user is logged.
	 */
	componentWillMount() {
    Alert.alert('Error', 'Error message');
    this.getAlbumList();
  }

   /**
	 * @description: Get all albums available from the server.
	 */
	getAlbumList = () => {
    const app = this;

    this.setState({ loading: true });

    axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(
      response => this.setState({ albums: response.data, loading: false })
    )
    .catch(function (error) {
      // handle error
      this.setState({ loading: false });
      console.log(error);
    });
	};

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
      <View>
      <Spinner
        visible={this.state.loading}
        textContent={'Loading...'}
        textStyle={{ color: '#33F' }}
      />
        {(this.state.loading) ? (
          <Spinner
            visible={this.state.loading}
            textContent={'Loading...'}
            textStyle={{ color: '#33F' }}
          />
        ) : (
          <ScrollView>
          { this.renderAlbums() }
        </ScrollView>
      )}
      </View>
    );
  }
}

export default AlbumList;
