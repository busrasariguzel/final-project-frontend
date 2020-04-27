import React , {Component} from 'react';
import PropTypes from 'prop-types';

class DollarToEuro extends Component{

    constructor(props, currency){
        super()
        }

    render(){
        const rate = this.props.currency2
        const obj = Object.values(rate)
        const conversion = this.props.currency4
        const obj2 = Object.values(conversion)
        return (
            <div>
    {/* <p>{this.props.currency2.base_currency_code}</p>/ */}
    {obj.map((item, idx)=>{
        if (typeof item === 'object') {
            return (
            <div key={idx}>
            <p> USD / {item.EUR.currency_name} </p>
            <p id="euroRate"> {item.EUR.rate}  </p>
            </div>
            )
            }
    })} 
    
    {obj2.map((item, idx)=>{
        if (typeof item === 'object') {
            if(item.EUR){
                return (
                    <div key={idx}>
                    <p > {item.EUR.rate_for_amount}  </p>
                    
                    </div>
                    )
                    } 
            }
         
            

    })}
    
    
    
    </div> 
        )
    }
}
DollarToEuro.propTypes = {
    currency4 : PropTypes.objectOf,
    currency2 : PropTypes.objectOf,
    

    
}

export default DollarToEuro