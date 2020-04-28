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
                border: '0.5px solid black', display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                // backgroundColor: 'lightGrey'
            }}>

{/* <i class="icons"> */}
<div style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    justifyContent: 'space-between'
    // alignItems:'baseline'
}}>
    <i class="big dollar icon"></i> <br></br>&nbsp; 
    <div class="ui tag labels">
            <p class="ui label"> $1.000 </p><br></br>&nbsp; &nbsp; &nbsp; &nbsp; 
            </div> </div>
    <i style={{paddingTop:'35px'}}class="big right arrow icon"> &nbsp; 
    </i>
    {/* </i> */}
  

                <DollarToTurkishLira handleConvert={this.props.handleConvert} currency4={this.props.currency4} searchTerm={this.props.searchTerm} currency={this.props.currency} />
                <DollarToEuro handleConvert={this.props.handleConvert} currency4={this.props.currency4} searchTerm={this.props.searchTerm} currency2={this.props.currency2} />
                <DollarToChineseYuan handleConvert={this.props.handleConvert} currency4={this.props.currency4} searchTerm={this.props.searchTerm} currency3={this.props.currency3} />

                {/* <Convert /> */}
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