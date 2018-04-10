import React, { Component } from 'react';
import { Alert, ScrollView, View } from 'react-native';
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
		 * @property {Object[]} albums - Array of albums objects.
		 * @property {boolean} loading - Indicates whether the app is getting data.
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
      Alert.alert(
        'Error',
        error,
        [
          { text: 'Try Again', onPress: () => app.getAlbumList() },
        ],
        { cancelable: false }
      );
      // handle error
      this.setState({ loading: false });
      console.log(error);
    });
	};

  /**
   * @description Return the album details list JSX.
   */
  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
      <Spinner
        visible={this.state.loading}
        textContent={'Getting albums list from the server...'}
        textStyle={{ color: '#112' }}
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
