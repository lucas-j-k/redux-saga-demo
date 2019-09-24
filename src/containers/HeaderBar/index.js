import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import Button from '../../components/Button';
import {fetchGalleryAction, toggleThemeAction} from './actionCreators';
import {IoMdRefresh, IoMdSwap} from 'react-icons/io';

const HeaderWrapper = styled.div`
    padding: ${props => props.theme.spacing_sm};
    background-color: ${props => props.theme.black_overlay};
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

class HeaderBar extends Component {

    fetchGallery = () => {
        this.props.dispatch(fetchGalleryAction());
    }

    toggleTheme = () => {
        this.props.dispatch(toggleThemeAction());
    }

    render(){
        return (
            <HeaderWrapper>
                <Button onClick={this.fetchGallery}>Load Random Gallery <IoMdRefresh /></Button>
                <Button onClick={this.toggleTheme}>Switch Themes <IoMdSwap /></Button>
            </HeaderWrapper>     
        )
    }    
}


export default connect()(HeaderBar);

