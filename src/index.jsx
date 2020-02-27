import React, { Component } from 'react';
import ReactDom from 'react-dom';

import { ImageBox } from './components/ImageBox/ImgaeBox';

import { pictures } from './pucturesConfig';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(pictures)
        return (
            <div>
                {
                    pictures.map((el, idx)=>{
                        return(
                            <ImageBox key={idx} {...el}/>
                        )
                    })
                }
            </div>
        )
    } 
}

ReactDom.render(<App />, document.getElementById('root'));