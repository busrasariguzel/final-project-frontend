import React, {Component} from 'react'


class TotalCases extends Component {
    constructor(props){
        super()
        

    }
    
render(){
    return(
<div>
        {this.props.cases.filter(item => item.country === 'All').map((item, idx) => {
            console.log(item)
return(
<div key={idx}>


            <p style={{color:'red'}}> Total Cases Worldwide : {item.cases.total}</p>
        
        
</div>
)
        })}
        
        
        </div>
        
        )
        }





}

export default TotalCases