import React, { Component } from 'react';
const checkTypeEle = ['checkbox', 'radio']

const SimpleForm = (C, fieldsObj={}) => {
    const form = React.createClass({
        getInitialState() {
            let state = {}
            Object.keys(fieldsObj).map(item => {
                state[item] = fieldsObj[item]
            })
            return state
        },
        render() {
            let newProps = {}
            let that = this
            Object.keys(this.state).map(item => {
                newProps[item] = {
                    value: this.state[item],
                    checked: !!this.state[item],
                    onChange(e){
                        let {target} = e
                        let {value} = target
                        if (checkTypeEle.indexOf(target.type) !== -1) {
                            value = target.checked
                        }
                        that.setState({
                            [item]: value
                        })
                    }
                }
            })
            return (
                <C {...newProps} />
            )
        }    
    })
    return form
}

export default SimpleForm