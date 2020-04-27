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
            <option value="South Carolina">South Carolina</option>
            <option value="Louisiana">Louisiana</option>


<option value="New Jersey"></option>Virginia

I<option value="New Jersey"></option>daho

<option value="New Jersey"></option>Iowa

<option value="New Jersey"></option>Kentucky

<option value="New Jersey"></option>Missouri

<option value="New Jersey"></option>Oklahoma

<option value="New Jersey"></option>Colorado

<option value="New Jersey"></option>Illinois

<option value="New Jersey"></option>Indiana

<option value="New Jersey"></option>Mississippi

<option value="New Jersey"></option>Nebraska
<option value="New Jersey"></option>
<option value="New Jersey"></option>Ohio

<option value="New Jersey"></option>Pennsylvania

<option value="New Jersey"></option>Washington

<option value="New Jersey"></option>Wisconsin

<option value="New Jersey"></option>Vermont

<option value="New Jersey"></option>Minnesota

<option value="New Jersey"></option>Florida

<option value="New Jersey"></option>North Carolina

<option value="New Jersey"></option>California

<option value="New Jersey"></option>New York

<option value="New Jersey"></option>Wyoming

<option value="New Jersey"></option>Michigan

<option value="New Jersey"></option>M<option value="New Jersey"></option>aryland

<option value="New Jersey"></option>Alaska

<option value="New Jersey"></option>Kansas

<option value="New Jersey"></option>Tennessee

<option value="New Jersey"></option>Texas

<option value="New Jersey"></option>Maine

<option value="New Jersey"></option>Arizona

G<option value="New Jersey"></option>eorgia

<option value="New Jersey"></option>Arkansas

N<option value="New Jersey"></option>ew Jersey

<option value="New Jersey"></option>South Dakota

<option value="New Jersey"></option>Alabama

<option value="New Jersey"></option>West Virginia

North Dakota

Massachusetts

Utah

Montana

New Hampshire

Oregon

New Mexico

Rhode Island

Nevada

District of Columbia

Connecticut

Hawaii

Delaware

Diamond Princess

Grand Princess

Guam

Northern Mariana Islands

Puerto Rico

Virgin Islands
            </select>
            </label><br />
            </form>

{obj.map((item, idx)=>{
        if (typeof item === 'object') {
            if(item.state === this.state.usaState ){
                return (
                    <div key={idx}>
                    <p> {item.state}</p>
                    <p>{item.confirmed}</p> 
                    
                    </div>
                    )
                    } 
            }
         
            

    })}


        </div>
    )
}


}

export default CoronaByState