import React, {Component} from 'react';
import axios from 'axios';
import Journal from './Journal Components/Journal'
import NewJournal from './Journal Components/NewJournal';
import CoronaCases from './Corona Component/CoronaCases'
import TotalCases from './Corona Component/TotalCases';
import Animation from './Animation'
import Currency from './Currency Component/Currency';
import Dropdown from './Currency Component/Dropdown';
import CoronaByState from './Corona By State Component/CoronaByState';
import Search from './Corona Component/Search'
import Title from './Title'
// import Button from '@material-ui/core/Button';


class App extends Component {
constructor(){
    super()
    this.state = {
        journals: [],
        journal: {},
        toggle: true,
        cases: [],
        currency: [],
        currency2:[],
        currency3:[],
        currency4:[],
        casesByState:[],
        casesByState2:[],
        
    
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
        this.setState({ currency: response.data})
    })
    .catch(err => {
        console.log(err);
    });

}
getCurrency4 = (currency, amount) => {
    axios.get(`https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=USD&to=${currency}&amount=${amount}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "currency-converter5.p.rapidapi.com",
            "x-rapidapi-key": "166a12c160msh0bf532aec0b7a0ep10056ajsncff2841e5dfb"
        }
    }) 
    .then(response => {
        this.setState({ currency4: response.data})
        
    })
    .catch(err => {
        console.log(err);
    });

}
getCurrency2 = () => {
    axios.get(`https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=USD&to=EUR&amount=1`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "currency-converter5.p.rapidapi.com",
            "x-rapidapi-key": "166a12c160msh0bf532aec0b7a0ep10056ajsncff2841e5dfb"
        }
    }) 
    .then(response => {
        
        this.setState({ currency2: response.data})
        
    })
    .catch(err => {
        console.log(err);
    });

}

getCurrency3 = () => {
    axios.get("https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=USD&to=CNY&amount=1", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "currency-converter5.p.rapidapi.com",
            "x-rapidapi-key": "166a12c160msh0bf532aec0b7a0ep10056ajsncff2841e5dfb"
        }
    })
    .then(response => {
        
        this.setState({ currency3: response.data})
        
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
getCoronaByState = () => {
    axios.get("https://covid19-data.p.rapidapi.com/us", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid19-data.p.rapidapi.com",
		"x-rapidapi-key": "166a12c160msh0bf532aec0b7a0ep10056ajsncff2841e5dfb"
	}
})
.then(response => {
    console.log('get corona by state...' , response.data.list)
    return this.setState({ casesByState: response.data.list})
})
.catch(err => {
	console.log(err);
});
}

getCoronaByState2 = (state) => {
    axios.get("https://covid19-data.p.rapidapi.com/us", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid19-data.p.rapidapi.com",
		"x-rapidapi-key": "166a12c160msh0bf532aec0b7a0ep10056ajsncff2841e5dfb"
	}
})
.then(response => {
    console.log('get corona by state...' , response.data.list)
    return this.setState({ casesByState2: response.data.list})
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





componentDidMount(){

    this.getJournals();
    this.getCoronaResults();
    this.getCurrency();
    this.getCurrency2();
    this.getCurrency3();
    this.getCurrency4();
    this.getCoronaByState();
    
    
}

render(){
    return(

<div >

<Animation style={{fontSize:'100px'}}/><br></br>
<TotalCases cases={this.state.cases}/>

<Search cases={this.state.cases} />


<CoronaByState casesByState={this.state.casesByState} />

<CoronaCases cases={this.state.cases}/><br></br>


<br></br>
<div className='Currency'>
    <h1 class="ui orange header" style={{textDecoration:'underline', textAlign:'center', fontSize:'33px'}}>Currencies</h1><br />
<Currency getCurrency4={this.getCurrency4} handleConvert={this.handleConvert} searchTerm={this.state.searchTerm} currency={this.state.currency} currency2={this.state.currency2} currency3={this.state.currency3} currency4={this.state.currency4}/>
        
        {/* <Dropdown  currency2={this.state.currency2}/>  */}
    </div><br></br>
<div 
style={{
            
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'right',
            alignItems: 'stretch',
            
            
        }}
        >

<NewJournal handleNewJournalSubmit={this.handleNewJournalSubmit} />
<Journal onDelete={this.onDelete}  onUpdate= {this.onUpdate} journals={this.state.journals}/> 
</div>
{/* <div className="generate meme section">


<MemeGenerator />  
</div>   */}


        
        
</div>
    )
}
}

export default App