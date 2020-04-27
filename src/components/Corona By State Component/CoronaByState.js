import React, {Component} from 'react'
import DropdownStates from './DropdownStates'


class CoronaByState extends Component {
    constructor(props){
        super()
        this.state ={
            value:'',
            usaState:'',
        }

    }
    handleChange = (event)=> {
        this.setState({usaState: event.target.value});
        console.log(this.state.usaState)
    }

    handleSubmit= (event) => {
        this.props.getCoronaByState2(this.state.usaState);
        // alert('Your currency is: ' + this.state.value);
        event.preventDefault();
    }


render(){
    const rate = this.props.casesByState
    const obj = Object.values(rate)
    console.log('OBJ....', obj)
    return(
        <div>
            <DropdownStates />
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

<form 
// onSubmit={this.handleSubmit}
>

    
            <label>
            Select your state:
            <select 
            value={this.state.usaState} 
            onChange={this.handleChange}
            >
            <option value="">Select</option>
            <option value="New York">New York</option>
            <option value="Washington">Washington</option>
            <option value="New Jersey">New Jersey</option>
            </select>
            </label><br />
            </form>




        </div>
    )
}


}

export default CoronaByState