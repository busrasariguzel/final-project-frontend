import React , {Component} from 'react'

class NewJournal extends Component {
constructor(){
    super()
    this.state={
        journal:{
            entry1:'', entry2:'', entry3:'', entry4:'' , entry5:'', 
    },
    }

}

handleChange=(event)=>{
let newJournal = { ...this.state.journal}
newJournal[event.target.name]=event.target.value;
this.setState({journal:newJournal}, () => {
    console.log('new journal' , newJournal)
})
}
handleSubmit = (event) =>{
    event.preventDefault();
    this.props.handleNewJournalSubmit(event, this.state.journal)
    let emptyJournal= {entry1:'', entry2:'', entry3:'', entry4:'', entry5:''};

    this.setState({journal :emptyJournal});
    event.target.reset();
}
render(){
    return(
        <div>
            <form style={{color: 'hotPink'}}onSubmit={this.handleSubmit}>
                <div>
            <label> #1 : 
                </label>
                <input type="text" 
                name="entry1"
                value={this.state.journal.entry1}
                onChange={this.handleChange}
                />
                <br></br>
                <label> #2 :
                </label>
                <input type="text" 
                name="entry2"
                value={this.state.journal.entry2}
                onChange={this.handleChange}
                />
                <br></br>
                <label> #3 :
                </label>
                <input type="text" 
                name="entry3"
                value={this.state.journal.entry3}
                onChange={this.handleChange}
                />
                <br></br>
                <label> #4 :
                </label>
                <input type="text" 
                name="entry4"
                value={this.state.journal.entry4}
                onChange={this.handleChange}
                />
                <br></br>
                <label> #5 :
                </label>
                <input type="text" 
                name="entry5"
                value={this.state.journal.entry5}
                onChange={this.handleChange}
                />

                </div>
                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}


}

export default NewJournal