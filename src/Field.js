import React, {Children} from 'react';

const Field = React.createClass({
    checkField(field, formState){
        const {props} = field
        let attrs = {...props}
        let {store} = formState
        let {name} = props
        let changeHandler = null
        if (name) {
            changeHandler = formState[`onField${name}Change`]
        }
        if (name && changeHandler) {
            if (field.type === 'input') {
                if (field.props.type === 'checkbox') {
                    return <input {...attrs} checked={store[name].indexOf(props.value) !== -1} 
                        onChange={e => changeHandler(e.target.value, {type:'checkbox', checked: e.target.checked})}/>
                }
                if (field.props.type === 'radio') {
                    return <input {...attrs} checked={String(props.value) === String(store[name])} 
                        onChange={e => changeHandler(e.target.value)}/>
                }
                return <input {...attrs} value={store[name]} onChange={e => changeHandler(e.target.value)}/>
            }
            if (field.type === 'select') {
                return (
                    <select {...attrs} value={store[props.name]} onChange={e => changeHandler(e.target.value)}>
                        {props.children}
                    </select>
                )
            }
        }
        if (field.props.children instanceof Array) {
            return (
                <div>
                    {Children.map(field.props.children, item => {
                        return this.checkField(item, formState)
                    })}
                </div>
            )
        }
        return field
    },
    render() {
        const {props} = this
        const {formState} = props
        return (
            <div>
                {Children.map(props.children, item => {
                    return this.checkField(item, formState)
                })}
            </div>
        );
    }
});

export default Field
