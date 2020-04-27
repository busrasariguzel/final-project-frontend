import React, {Component} from 'react';
import PropTypes from 'prop-types'


class Dropdown extends Component {
    constructor(props) {
      super(props);
      this.state = {
          value: 'TRY',
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
        event.preventDefault();
      // alert('Your currency is: ' + this.state.value);
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
              <option value="TRY">Turkish Lira</option>
              <option value="EUR">Euro</option>
              <option value="CNY">Chinese Yuan</option>
            </select>
          </label><br />
          <label>Enter the dollar amount  :</label>< br />
          <div className="ui right labeled input">
  <div className="ui basic label">$</div>
  <input onChange={this.handleConvert} value={this.state.searchTerm} type="text" placeholder="Amount" />
  <div className="ui label">.00</div>
</div>
            <br />
          <input className="ui violet inverted button"type="submit" value="Submit" />
        </form>
      );
    }
  }
  Dropdown.propTypes = {
    value: PropTypes.string,
    searchTerm: PropTypes.string,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
    handleConvert: PropTypes.func,
    
}



  export default Dropdown