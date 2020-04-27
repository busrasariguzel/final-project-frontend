import React, {Component} from 'react';


class DropdownStates extends Component {
    constructor(props) {
      super(props);
      this.state = {
          value: '',
          searchTerm: ''

        };
  
    //   this.handleChange = this.handleChange.bind(this);
    //   this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange = (event)=> {
      this.setState({value: event.target.value});
    }
  
    handleSubmit= (event) => {
      this.props.getCurrency4(this.state.value, this.state.searchTerm);
      // alert('Your currency is: ' + this.state.value);
      event.preventDefault();
    }
    handleConvert = (event) => {
      this.setState({searchTerm:event.target.value}, ()=> {
          console.log(this.state.searchTerm)
      })
      
  };
    render() {
     
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Select Your State:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="empty">Select</option>
              <option value="New York">New York</option>
              <option value="New Jersey">New Jersey</option>
              <option value="California">California</option>
            </select>
          </label><br />
          {/* <label>Enter the dollar amount  :</label>< br />
            <input onChange={this.handleConvert} value={this.state.searchTerm} type="text" placeholder="amount.."/>
            <br />
          <input type="submit" value="Submit" /> */}
        </form>
      );
    }
  }



  export default DropdownStates