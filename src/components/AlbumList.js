import React from "react";
import { Text, View } from "react-native";

class AlbumList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    };
  }

  componentWillMount() {
    fetch("https://rallycoding.herokuapp.com/api/music_albums")
      .then(response => response.json())
      .then(data => this.setState({ albums: data }));
  }

  renderAlbums() {
    return this.state.albums.map(album => (
      <Text key={album.title}>{album.title}</Text>
    ));
  }

  render() {
    return <View>{this.renderAlbums()}</View>;
  }
}

export default AlbumList;
