import React, {Component} from 'react';
import axios from 'axios';
import Journal from './Journal'
import NewJournal from './NewJournal';

class App extends Component {
constructor(){
    super()
    this.state = {
        journals: [],
        journal: {},
        toggle: true,
        
    }
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
}

// componentDidMount() {
//     axios.get('/journals')
//       .then(response => this.setState({journals: response.data}))
//       .catch(err => console.log(err))
//   }




render(){
    console.log(this.state.journals)
    return(
        
        <div>

<h1>App component</h1>
<NewJournal handleNewJournalSubmit={this.handleNewJournalSubmit} />
<Journal onDelete={this.onDelete}  onUpdate= {this.onUpdate} journals={this.state.journals}/> 

        </div>
    )
}
}

export default App