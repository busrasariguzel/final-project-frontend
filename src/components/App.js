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
// import Button from '@material-ui/core/Button';
import {Menu , Button , MenuItem,
    ClickAwayListener,
    MenuList,
    Popover,
    Popper

} from '@material-ui/core';

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
        news:[],
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
        // console.log('currency...', response);
        this.setState({ currency: response.data})
        console.log(this.state.currency)
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
        // console.log('currency...', response);
        this.setState({ currency4: response.data})
        console.log('currency 4...', this.state.currency4)
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
        // console.log('currency...', response);
        this.setState({ currency2: response.data})
        console.log(this.state.currency2)
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
        // console.log('currency...', response);
        this.setState({ currency3: response.data})
        console.log(this.state.currency3)
    })
    .catch(err => {
        console.log(err);
    });

}
getNews = () => {
    axios.get("https://myallies-breaking-news-v1.p.rapidapi.com/GetTopNews", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "myallies-breaking-news-v1.p.rapidapi.com",
            "x-rapidapi-key": "166a12c160msh0bf532aec0b7a0ep10056ajsncff2841e5dfb"
        }
    })
    .then(response => {
        console.log('news......', response);
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


// getJournalItem = (id) => {
//     axios.get(`/journal/${id}`).then((journal) => {
//         this.setState({
//             journal: journal.data,
//         })
//     })
// }





componentDidMount(){

    this.getJournals();
    this.getCoronaResults();
    this.getCurrency();
    this.getCurrency2();
    this.getCurrency3();
    this.getCurrency4();
    this.getCoronaByState();
    // this.getNews();
    
}

render(){
    console.log('coronabystate..' ,this.state.casesByState )
    return(
        
<div>
<Animation style={{size:'50px'}}/>


    <div className='Currency'>
        <h3>Currency section</h3>
        <Currency getCurrency4={this.getCurrency4} handleConvert={this.handleConvert} searchTerm={this.state.searchTerm} currency={this.state.currency} currency2={this.state.currency2} currency3={this.state.currency3} currency4={this.state.currency4}/>
        {/* <Dropdown  currency2={this.state.currency2}/>  */}
    </div>
<div className='Corona Cases'>

<TotalCases cases={this.state.cases}/>
<CoronaCases cases={this.state.cases}/>
<CoronaByState casesByState={this.state.casesByState} />


</div>
<div className="journal section" style={{border:'0.5px hotPink solid'}}>
<h1 style={{color:'hotPink'}}>Gratitude Journal</h1>
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