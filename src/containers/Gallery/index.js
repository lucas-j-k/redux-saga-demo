import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import Image from '../../components/Image';
import UserCard from '../../components/UserCard';


const GalleryFeed = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

const GalleryHeader = styled.h3`
    font-size: ${props => props.theme.font_lg};
    padding: ${props => props.theme.spacing_sm} 0;
    margin: ${props => props.theme.spacing_md} auto;
    color: ${props => props.theme.default_text_color};
    font-weight: normal;
    letter-spacing: ${props => props.theme.letter_spacing};
`;

const GalleryWrapper = styled.div`
    width: 90%;
    max-width: 1024px;
    margin: auto;
`;


const Gallery = props => {

    const images = props.images.map((imageSource, index) => {
        return <Image source={imageSource} key={index} />
    })

    return (
        <GalleryWrapper>
            <UserCard user={props.user} />
            <GalleryHeader>Gallery</GalleryHeader>
            <GalleryFeed>
                {images}
            </GalleryFeed>
        </GalleryWrapper>
    )
}

//Mapstatetoprops defines which props we are listening for from the global RX store
const mapStateToProps = state => ({
    images: state.images,
    user: state.user
  })


export default connect(mapStateToProps)(Gallery);