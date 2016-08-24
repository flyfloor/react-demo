import React from 'react';
import ReactDOM from 'react-dom';
import SimpleForm from './SimpleForm';
// import style from 'react-ui-component/css/pagination.less';
// import {Pagination} from 'react-ui-component';
const BasicForm = React.createClass({
    handleSubmit(e){
        e.preventDefault();
        console.log(this.props)
        return false;
    },
    render(){
        const {name, age, sex, passwd, isTeacher, single} = this.props
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" {...passwd}/>
                <input type="text" {...name}/>
                <input type="number" {...age}/>
                <label htmlFor="is_teacher">
                    <input id="is_teacher" type="checkbox" {...isTeacher}/>
                    <span>老师？</span>
                </label>
                <select {...sex}>
                    <option value="f">女</option>
                    <option value="m">男</option>
                </select>
                <label htmlFor="single">
                    <input id="single" type="radio" {...single}/>
                    <span>单身狗？</span>
                </label>
                <input type="submit" value="提交"/>
            </form>
        );
    },
});

const Form = SimpleForm(BasicForm, {
    age: 20,
    sex: 'f',
    name: 'jerry',
    passwd: '',
    isTeacher: true,
    single: true,
})

ReactDOM.render(<Form/>, document.getElementById('root'));