import React, {Component} from 'react'
import EachCoronaCase from './EachCoronaCase'

class CoronaCases extends Component {
    constructor(props){
        super()
        

    }
render(){
    return(
        <div>
{this.props.cases.filter(item => item.cases.total > 90000 && item.country !== 'All' && item.country !== 'North-America' && item.country !== 'Europe' && item.country !== 'Asia' &&item.country !== 'South-America').map((item,idx)=>{
    
                return (
                    <div key={idx}>
                    <EachCoronaCase  item={item} idx={idx}/>
                    </div>
                )
            }
            )} 




        </div>
    )
}


}

export default CoronaCases
