import React, {Component} from 'react'

class SearchCorona extends Component {
    constructor(props){
        super()
        this.state={
            country:''
        }
        

    }
    
    handleChange = (event)=> {
        this.setState({country: event.target.value});
      }
    
    //   handleSubmit= (event) => {
    //     this.setState({country: event.target.value});
    //       event.preventDefault();
    //     // alert('Your currency is: ' + this.state.value);
    //   }
    
    render(){
        console.log(this.props.cases)
        return(
            <div>
                <form 
                // onSubmit={this.handleSubmit}
                >
    <div >
    <input onChange={this.handleChange} value={this.state.country} type="text" placeholder="search by country.."/>
            <br />
        {/* <input type="submit" value="Submit" /> */}
    </div>


    </form>

    {this.props.cases
    .map((item,idx)=>{
        
// console.log(this.state.country)
// console.log(item.country)
        if(this.state.country === item.country){
            console.log(item.country)
            console.log(item.cases.total)
            
                    return (
                        <div key={idx}>
                        <h4>{item.country}</h4>
                    
                    <p>Total Cases: {item.cases.total}</p>
                    <p>New Cases: {item.cases.new}</p>
                    <p>Total Deaths: {item.deaths.total}</p>
                    <p>New Deaths : {item.deaths.new}</p>
                    <p>Recovered: {item.cases.recovered}</p>
                    <p>Critical: {item.cases.critical}</p>

                        </div>
                    )
                }
            }
                )} 
    
    
    
    
            </div>
        )
    }
    
// render(){
//     return(

//         <div>

//                 <div key={this.props.idx}>
//                 <form>
//     <div >
//     <input onChange={this.handleChange} value={this.state.country} type="text" placeholder="search by country.."/>
//             <br />
//         <input type="submit" value="Submit" />
//     </div>


// </form>


//                     <p style={{color:'blue', textDecoration:'underline'}}></p>
//                     <p>Total Cases: {this.state.country}</p>
//                     <p>New Cases: {this.props.item.cases.new}</p>
//                     <p>Total Deaths: {this.props.item.deaths.total}</p>
//                     <p>New Deaths : {this.props.item.deaths.new}</p>
//                     <p>Recovered: {this.props.item.cases.recovered}</p>
//                     <p>Critical: {this.props.item.cases.critical}</p>

//                 </div>
//         </div>
//                 )
//             }
            } 

export default SearchCorona
