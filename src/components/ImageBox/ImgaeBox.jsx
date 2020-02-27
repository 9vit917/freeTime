import React, { Component } from 'react';

import './ImageBox.scss';

export class ImageBox extends Component {
    render() {
        console.log(this.props);
        const { image } = this.props;
        return(
            <div>
                <img src={image} alt=""/>
            </div>
        )
    }
}