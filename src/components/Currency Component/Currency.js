import React, { Component } from 'react';
import DollarToTurkishLira from './DollarToTurkishLira';
import DollarToEuro from './DollarToEuro';
import DollarToChineseYuan from './DollarToChineseYuan';
import Dropdown from './Dropdown';
import PropTypes from 'prop-types';

class Currency extends Component {
    constructor(props) {
        super()
    }
    render() {

        return (
            <div style={{
                // border: '0.5px solid lightGrey',
                borderBottom: '0.5px solid lightGrey',
                height:'200px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop:'15px'
                
            }}>


<div style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    justifyContent: 'space-between'
    
}}>
    <i class="huge dollar icon"></i> 
    <div class="ui large tag labels">
            </div> </div>
            &nbsp;<i class="huge right arrow icon"> &nbsp; 
    </i>
   
  
<br></br>
                <DollarToTurkishLira handleConvert={this.props.handleConvert} currency4={this.props.currency4} searchTerm={this.props.searchTerm} currency={this.props.currency} />
                <DollarToEuro handleConvert={this.props.handleConvert} currency4={this.props.currency4} searchTerm={this.props.searchTerm} currency2={this.props.currency2} />
                <DollarToChineseYuan handleConvert={this.props.handleConvert} currency4={this.props.currency4} searchTerm={this.props.searchTerm} currency3={this.props.currency3} />

                
                <br /> <br></br>
                <Dropdown
                
                    getCurrency4={this.props.getCurrency4}
                    currency3={this.props.currency3}
                    currency2={this.props.currency2}
                    currency={this.props.currency} />
                    </div>
          


        )


    }
}
Currency.propTypes = {
    value: PropTypes.string,
    searchTerm: PropTypes.string,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
    handleConvert: PropTypes.func,
    
    
}
export default Currency