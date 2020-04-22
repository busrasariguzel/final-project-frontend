import React , {Component} from 'react'

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
                    <p> Conversion Result : {item.CNY.rate_for_amount}  </p>
                    
                    </div>
                    )
                    } 
            }
         
            

    })}
    </div> 
        )
    }
}

export default DollarToChineseYuan