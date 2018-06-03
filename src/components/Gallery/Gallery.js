import React, { Component } from 'react';
import styled, { css } from 'react-emotion';
import firebase from 'firebase';

const GalleryContainer = styled('div')`
  ${css({ flexDirection: 'row', justifyContent: 'space-between' })};
  height: 100vh;
  border-radius: 2px;
`;
const config = {
  apiKey: 'AIzaSyBimgILX9hRA5BbfTMrxY_lKhLCsAHLCVc',
  authDomain: 'portfolio-53c4e.firebaseapp.com',
  databaseURL: 'https://portfolio-53c4e.firebaseio.com',
  projectId: 'portfolio-53c4e',
  storageBucket: 'portfolio-53c4e.appspot.com',
  messagingSenderId: '770378930298'
};

firebase.initializeApp(config);
const storage = firebase.storage();
const storageRef = storage.refFromURL('gs://portfolio-53c4e.appspot.com');

const getUrl = () =>
  storageRef
    .child('images')
    .getDownloadURL()
    .then(url => url);

class Gallery extends Component {
  constructor(props) {
    super(props);
    const url = getUrl();
    this.state = {
      url
    };
  }

  render() {
    const { url } = this.state;
    return (
      <GalleryContainer>
        <img src={url.i} alt="Mountain View" width="100%" height="100vh" />
      </GalleryContainer>
    );
  }
}

export default Gallery;
