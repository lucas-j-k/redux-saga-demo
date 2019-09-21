import React, {Component} from 'react';
import {connect} from 'react-redux';

import Image from '../../components/Image';
import Button from '../../components/Button';
import {addImageAction, deleteImageAction} from './actionCreators';

class ImageList extends Component {

    addImage = ()=>{
        const random = Math.floor(Math.random() * 10000);
        const newImg = {
            id: random,
            title: `Random Image Added by Redux #${random}`,
            src: `www.reduximagerandom.co.uk/#${random}`
        }
        this.props.dispatch(addImageAction(newImg));
    }

    deleteImage = (id)=>{
        this.props.dispatch(deleteImageAction(id));
    }

    render(){
        const images = this.props.images.map(image => {
            return <Image title={image.title} source={image.src} id={image.id} key={image.id} deleteImage={this.deleteImage} />
        })
        return (
            <div>
                <h2>This is the image list...</h2>
                <Button onClick={this.addImage} text="Add Image" />
                {images}
            </div>
        )
    }
}

//Mapstatetoprops defines which props we are listening for from the global RX store
const mapStateToProps = state => ({
    images: state.images
  })


export default connect(mapStateToProps)(ImageList);