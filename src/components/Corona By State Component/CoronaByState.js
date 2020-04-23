import React, {Component} from 'react'


class CoronaByState extends Component {
    constructor(props){
        super()
        

    }
render(){
    return(
        <div>
{this.props.casesByState
.map((item,idx)=>{
    
                return (
                    <div key={idx}>
                    
                <p> {item.state}</p>
                <p>{item.confirmed}</p>
                    </div>
                )
            }
            )} 




        </div>
    )
}


}

export default CoronaByState