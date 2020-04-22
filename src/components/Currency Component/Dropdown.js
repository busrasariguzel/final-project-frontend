import React, {Component} from 'react';


class Dropdown extends Component {
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
            Pick your currency:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="">Select</option>
              <option value="TRY">Turkish Lira</option>
              <option value="EUR">Euro</option>
              <option value="CNY">Chinese Yuan</option>
            </select>
          </label><br />
          <label>Enter the dollar amount  :</label>< br />
            <input onChange={this.handleConvert} value={this.state.searchTerm} type="text" placeholder="amount.."/>
            <br />
            {/* {if (this.state.value === 'TRY'){
              return(
                
              )
            }} */}
            {/* <label>{this.props.searchTerm * item.TRY.rate} </label>  */}
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }



  export default Dropdown