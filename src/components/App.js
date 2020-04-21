import React, {Component} from 'react';
import axios from 'axios';
import Journal from './Journal Components/Journal'
import NewJournal from './Journal Components/NewJournal';
import MemeGenerator from './Meme Generator Components/MemeGenerator'
import CoronaCases from './Corona Component/CoronaCases'
import TotalCases from './Corona Component/TotalCases';
import Animation from './Animation'
import currency from './Currency Component/Currency'
import Currency from './Currency Component/Currency';

class App extends Component {
constructor(){
    super()
    this.state = {
        journals: [],
        journal: {},
        toggle: true,
        cases: [],
        currency: [],
        
    }
}

getCurrency = () => {
    axios.get("https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=USD&to=TRY&amount=1", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "currency-converter5.p.rapidapi.com",
            "x-rapidapi-key": "166a12c160msh0bf532aec0b7a0ep10056ajsncff2841e5dfb"
        }
    })
    .then(response => {
        // console.log('currency...', response);
        this.setState({ currency: response.data})
        console.log(this.state.currency)
    })
    .catch(err => {
        console.log(err);
    });

}
getJournals = () => {
    const url = '/journals';
    axios.get(url).then((journal)=>{
        console.log('journal...', journal)
        console.log('journals data...', journal.data)

        return this.setState({ journals: journal.data})
    })
    console.log(this.state.journals)
}
getCoronaResults =() => {
    axios.get("https://covid-193.p.rapidapi.com/statistics", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-193.p.rapidapi.com",
		"x-rapidapi-key": "166a12c160msh0bf532aec0b7a0ep10056ajsncff2841e5dfb"
    }
    
})
.then(response => {

    return this.setState({ cases: response.data.response})
    
    
})
.catch(err => {
	console.log(err);
});

}


handleNewJournalSubmit=(event,journal,id)=> {
    event.preventDefault();
    let axiosConfig = {
        headers:{
            'Content-Type' : 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin' : '*',
        },
    };
    axios.post('/journal',journal,axiosConfig).then(()=> {
        this.getJournals();
    })
}
onDelete = (id) => {
    axios.delete(`/journal/${id}`).then(()=>{
        this.getJournals();
    })
}
onUpdate = (id) => {
    console.log('This blog will be updated', id)
}


// getJournalItem = (id) => {
//     axios.get(`/journal/${id}`).then((journal) => {
//         this.setState({
//             journal: journal.data,
//         })
//     })
// }





componentDidMount(){
    // const url = '/journals';
    // axios.get(url).then((journals)=>{
    //     console.log(journals.data)
    //     return this.setState({ journals: journals.data})
        
    // })
    
    this.getJournals();
    this.getCoronaResults();
    this.getCurrency();
}




// componentDidMount() {
//     axios.get('/journals')
//       .then(response => this.setState({journals: response.data}))
//       .catch(err => console.log(err))
//   }




render(){
    return(
<div>
<Animation />
    <div className='Currency'>
        <h3>Currency section</h3>
         <Currency  currency={this.state.currency} /> 
    </div>
<div className='Corona Cases'>

    <TotalCases cases={this.state.cases}/>
<CoronaCases cases={this.state.cases}/>


</div>
<div className="journal section" style={{border:'0.5px hotPink solid'}}>
<h1 style={{color:'hotPink'}}>Gratitude Journal</h1>
<NewJournal handleNewJournalSubmit={this.handleNewJournalSubmit} />
<Journal onDelete={this.onDelete}  onUpdate= {this.onUpdate} journals={this.state.journals}/> 
</div>
<div className="generate meme section">


<MemeGenerator />  
</div>  


        
        
</div>
    )
}
}

export default App