import React , {Component} from 'react'

class DollarToTurkishLira extends Component{

    constructor(props){
        super()
        }

    render(){
        const rate = this.props.currency
        const obj = Object.values(rate)
        return (
            <div>
    {/* <p>{this.props.currency.base_currency_code}</p>/ */}
    {obj.map((item, idx)=>{
        if (typeof item === 'object') {
            return (
            <div key={idx}>
            <p> USD / {item.TRY.currency_name} </p>
            <p> {item.TRY.rate}  </p>
            <label>Enter the dollar amount you want to convert to Turkish Lira</label>< br />
            <input onChange={this.props.handleConvert} value={this.props.searchTerm} type="text" placeholder="Search.."/>
            <br />
            <label>{this.props.searchTerm * item.TRY.rate} </label>
            </div>
            )
            }
            

    })}
{/* <div>
<label>Enter the dollar amount you want to convert to Turkish Lira</label>
<input onChange={this.props.handleConvert} value={this.props.searchTerm} type="text" placeholder="Search.."/>

</div> */}

    
    </div> 
        )
    }
}


export default DollarToTurkishLira