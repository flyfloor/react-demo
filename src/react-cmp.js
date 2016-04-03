import React from 'react';
import {Tooltip} from 'react-ui-component';

const ReactCMPDemo = React.createClass({
    render() {
        return (
            <Tooltip content={<h2>huge text</h2>} position='left'>
                <a href='javascript:;'>left</a>
            </Tooltip>
        );
    }
});


export default ReactCMPDemo;