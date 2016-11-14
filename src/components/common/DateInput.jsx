import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { setField } from '../../actions/Actions';

//import CSS
require('react-datepicker/dist/react-datepicker.css');


class DateInput extends Component {
    constructor(props) {
        super(props);
    }
    handleChange(date) {
        let form = this.props.form,
            input = this.props.input;
        let stringDate = date.toISOString();
        this.props.setField(form, input, stringDate);
    }
    
    render() {
        let defaultClasses = 'Form-dateInput ';
        let className = this.props.className;
        let classes = defaultClasses.concat(className);
        let id = this.props.id;
        let label = this.props.label;
        let stringDate = this.props.stringDate;
        let date;
        if (!stringDate) {
            date = moment();
        } else {
            date = moment(stringDate);
        }
        return (
            <div id={id} className={classes}>
                <span className='Form-dateLabel'>{label}</span>
                <DatePicker
                    todayButton={"Hoy"}
                    selected={date}
                    onChange={this.handleChange.bind(this)} />
            </div>
        );
    }
}

export default connect(null, { setField })(DateInput);