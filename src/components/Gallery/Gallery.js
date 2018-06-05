import React, { Component } from 'react';
import { Image, CloudinaryContext } from 'cloudinary-react';
import styled, { css } from 'react-emotion';

const GalleryContainer = styled('div')`
  ${css({ flexDirection: 'row', justifyContent: 'space-between' })};
  height: 100vh;
  border-radius: 2px;
  overflow: auto;
`;

const imageIds = [
  'horse_ashland',
  'beetle_oregon',
  'udaipur',
  'contrast_portland',
  'vista_house_gorge'
];
class Gallery extends Component {
  state = {};

  render() {
    return (
      <GalleryContainer>
        <CloudinaryContext cloudName="daj5mgoka" width="1200" height="800">
          {imageIds.map(id => <Image publicId={id} responsive />)}
        </CloudinaryContext>
      </GalleryContainer>
    );
  }
}

export default Gallery;
