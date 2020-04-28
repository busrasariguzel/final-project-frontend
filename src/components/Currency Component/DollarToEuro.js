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
            <i style={{paddingLeft:'28px'}} class="euro icon big"></i><br></br><br></br>
            <p class="ui orange label"> USD /  {item.EUR.currency_name} </p><br></br>
            <div class="ui tag labels"><br></br>
            <p class="ui label"> {item.EUR.rate} &#8364;</p>
            </div>
            </div>
            )
            }
    })} 
    
    {obj2.map((item, idx)=>{
        if (typeof item === 'object') {
            if(item.EUR){
                return (
                    <div key={idx}>
                    <p style={{paddingLeft:'30px'}} class="ui orange basic label"> {item.EUR.rate_for_amount}  &#8364; </p>
                    
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
    // currency4 : PropTypes.objectOf,
    // currency2 : PropTypes.objectOf,
    

    
}

export default DollarToEuro