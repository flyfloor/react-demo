import React, {Children} from 'react';

const Field = React.createClass({
    checkField(field, formState){
        const {props} = field
        let {store} = formState
        let {name} = props
        let onChangeHandler = null
        let storeVal = null
        if (name) {
            storeVal = store[name]
            onChangeHandler = formState[`onField${name}Change`]
        }
        if (onChangeHandler) {
            let newVal = null
            if (field.type === 'input') {
                if (field.props.type === 'checkbox') {
                    return <input {...props} checked={storeVal.indexOf(props.value) !== -1} 
                        onChange={e => onChangeHandler(e.target.checked ? storeVal.concat(e.target.value) : storeVal.filter(l => l !== e.target.value))}/>
                }
                if (field.props.type === 'radio') {
                    return <input {...props} checked={String(props.value) === String(storeVal)} 
                        onChange={e => onChangeHandler(e.target.value)}/>
                }
                return <input {...props} value={storeVal} onChange={e => onChangeHandler(e.target.value)}/>
            }
            if (field.type === 'select') {
                return (
                    <select {...props} value={storeVal} onChange={e => onChangeHandler(e.target.value)}>
                        {props.children}
                    </select>
                )
            }
        }
        if (typeof field.type !== 'function') {
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
        }

        let CMP = field.type
        switch(field.type.displayName){
            case 'Radio':
                return <CMP {...props} value={String(props.value)} checked={String(storeVal) === String(props.value)} onChange={(e, value) => onChangeHandler(value)}/>
            case 'CheckBox':
                return <CMP {...props} value={String(props.value)} checked={storeVal.indexOf(props.value) !== -1} onChange={(e, value) => onChangeHandler(e.target.checked ? storeVal.concat(value) : storeVal.filter(l => l !== value))} />
            default:
                break
        }
        return <CMP {...props} value={storeVal} onChange={e => onChangeHandler(storeVal)}/>
    },
    render() {
        const {props} = this
        const {formState} = props
        return (
            <div>
                {Children.map(props.children, (item, index) => {
                    return (
                        <div key={`field-${index}`}>
                            {this.checkField(item, formState)}
                        </div>
                    )
                })}
            </div>
        );
    }
});

export default Field
