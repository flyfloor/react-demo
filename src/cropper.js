import React from 'react';
import css from './cropper.less';
import {Cropper} from 'react-image-cropper';

const CropperDemo = React.createClass({
    getInitialState() {
        return {
            url: '',
        };
    },

    handleCrop(){
        const cropper = this.refs.cropper;
        this.setState({
            url: cropper.crop()
        });
    },
    render() {
        const {url} = this.state;
        return (
            <div style={{'width': '800', 'margin': '0 auto'}}>
                <h2>Image cropper</h2>
                <Cropper src='/image/test.jpg' ref="cropper"/>
                <br/>
                <p>
                    <span>click crop => </span>
                    <button onClick={this.handleCrop}>crop me!</button>
                </p>
                <div>
                    {url ? 
                        <img src={url} alt=""/>
                        : null}
                </div>
            </div>
        );
    }
});

export default CropperDemo;
