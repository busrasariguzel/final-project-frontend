import React , {Component} from 'react';
import PropTypes from 'prop-types'

class DollarToChineseYuan extends Component{

    constructor(props){
        super()
        }

    render(){
        const rate = this.props.currency3
        const obj = Object.values(rate)
        const conversion = this.props.currency4
        const obj2 = Object.values(conversion)
        return (
            <div>
    {/* <p>{this.props.currency3.base_currency_code}</p>/ */}
    {obj.map((item, idx)=>{
        if (typeof item === 'object') {
            return (
                <div key={idx}>
                    <i class="big yen icon"></i>
            <p> USD / {item.CNY.currency_name} </p>
            <p id="chineseRate"> {item.CNY.rate}  </p>
            
            </div>
            )
            }
    })} 
    {obj2.map((item, idx)=>{
        if (typeof item === 'object') {
            if(item.CNY){
                return (
                    <div key={idx}>
                        {console.log(item)}
                    <p>  {item.CNY.rate_for_amount}  </p>
                    
                    </div>
                    )
                    } 
            }
    
            

    })}
    </div> 
        )
    }
}
DollarToChineseYuan.propTypes = {
    // currency4 : PropTypes.objectOf,
    // currency3 : PropTypes.objectOf,
    

    
}

export default DollarToChineseYuan