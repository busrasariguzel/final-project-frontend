import React , {Component} from 'react';
import PropTypes from 'prop-types';

class DollarToTurkishLira extends Component{

    constructor(props){
        super()
        }

    render(){
        const rate = this.props.currency
        const obj = Object.values(rate)
        const conversion = this.props.currency4
        const obj2 = Object.values(conversion)
        return (
            <div>
    {/* <p>{this.props.currency.base_currency_code}</p>/ */}
    {obj.map((item, idx)=>{
        if (typeof item === 'object') {
            return (
            <div key={idx}>
            <p> USD / {item.TRY.currency_name} </p>
            <p id="turkishRate"> {item.TRY.rate}  </p>
            
            </div>
            )
            }
            

    })}
{/* <div>
<label>Enter the dollar amount you want to convert to Turkish Lira</label>
<input onChange={this.props.handleConvert} value={this.props.searchTerm} type="text" placeholder="Search.."/>

</div> */}
{obj2.map((item, idx)=>{
        if (typeof item === 'object') {
            if(item.TRY){
                return (
                    <div key={idx}>
                    <p id="turkishRate"> {item.TRY.rate_for_amount}  </p>
                    
                    </div>
                    )
                    } 
            }
         
            

    })}

    
    </div> 
        )
    }
}

DollarToTurkishLira.propTypes = {
    currency4 : PropTypes.objectOf,
    currency : PropTypes.objectOf,
    

    
}
export default DollarToTurkishLira