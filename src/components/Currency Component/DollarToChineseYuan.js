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
                    &nbsp; <i style={{paddingLeft:'40px'}} class="big yen icon"></i><br></br><br></br>
            <p class="ui orange label"> USD / {item.CNY.currency_name} </p><br></br>
            <div class="ui tag labels"><br></br>
            <p class="ui label"> {item.CNY.rate} &#165; </p>
            </div>
            </div>
            )
            }
    })} 
    {obj2.map((item, idx)=>{
        if (typeof item === 'object') {
            if(item.CNY ){
                
                return (
                    <div key={idx}>
                        {console.log(item)}
        
  <p style= {{paddingLeft:'40px'}} class="ui orange basic label"> {item.CNY.rate_for_amount.toLocaleString(navigator.language, { minimumFractionDigits: 0 })} &#165;</p>
  
                    
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