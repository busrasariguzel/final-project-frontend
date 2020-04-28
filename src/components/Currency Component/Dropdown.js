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
          <label >
            <p class="ui orange header ui block header">Pick your currency:</p>
            <select class="ui fluid selection dropdown" value={this.state.value} onChange={this.handleChange}>
            
              <option value="TRY">Turkish Lira</option>
              <option value="EUR">Euro</option>
              <option value="CNY">Chinese Yuan</option>
            </select>
          </label><br />
          {/* <label>Enter the dollar amount  :</label>< br /> */}
          <div className="ui right labeled input">
  <div class="required field" className="ui basic label">$</div>
  <input onChange={this.handleConvert} value={this.state.searchTerm} type="text" placeholder="Amount" />
  <div className="ui label">.00</div>
</div>
          <input style={{
            paddingLeft:'20px'
          }}className="ui orange inverted button" type="submit" value="Convert" />
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