import React , {Component} from 'react'

class DollarToChineseYuan extends Component{

    constructor(props){
        super()
        }

    render(){
        const rate = this.props.currency3
        const obj = Object.values(rate)
        return (
            <div>
    {/* <p>{this.props.currency3.base_currency_code}</p>/ */}
    {obj.map((item, idx)=>{
        if (typeof item === 'object') {
            return (
                <div key={idx}>
            <p> USD / {item.CNY.currency_name} </p>
            <p> {item.CNY.rate}  </p>
            <label>Enter the dollar amount you want to convert to Chinese Yuan</label>< br />
            <input onChange={this.props.handleConvert} value={this.props.searchTerm} type="text" placeholder="Search.."/>
            <br />
            <label>{this.props.searchTerm * item.CNY.rate} </label>
            </div>
            )
            }
    })} 
    </div> 
        )
    }
}

export default DollarToChineseYuan