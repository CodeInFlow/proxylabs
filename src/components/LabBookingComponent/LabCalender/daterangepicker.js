import React from "react";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import moment from "moment";
import "./datePicker.css";
import "react-dates/lib/css/_datepicker.css";



export default class DatePicker extends React.Component {
  state = {
    focused: false,
    date: moment(),
  };

  render() {
    return (
      <div className="">
        <DateRangePicker
        
        numberOfMonths={1}
          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          endDate={this.state.endDate} // momentPropTypes.momentObj or null,
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          onDatesChange={({ startDate, endDate }) =>
            this.setState({ startDate, endDate })
          } // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={(focusedInput) => this.setState({ focusedInput })} // PropTypes.func.isRequired,
        />
      </div>
    );
  }
}
