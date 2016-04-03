import React from 'react';
import ReactDOM from 'react-dom';
import CropperDemo from './cropper';
import ReactCMPDemo from './react-cmp';

const App = React.createClass({
    render(){
        return (
            <ReactCMPDemo></ReactCMPDemo>
        );
    },
});


ReactDOM.render(<App/>, document.getElementById('root'));