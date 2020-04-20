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
            <form onSubmit={this.handleSubmit}>
                <div>
            <label> Journal Entry #1 :
                </label>
                <input type="text" placeholder="Entry #1..."
                name="entry1"
                value={this.state.journal.entry1}
                onChange={this.handleChange}
                />
                <br></br>
                <label> Journal Entry #2 :
                </label>
                <input type="text" placeholder="Entry #2..."
                name="entry2"
                value={this.state.journal.entry2}
                onChange={this.handleChange}
                />
                <br></br>
                <label> Journal Entry #3 :
                </label>
                <input type="text" placeholder="Entry #3..."
                name="entry3"
                value={this.state.journal.entry3}
                onChange={this.handleChange}
                />
                <br></br>
                <label> Journal Entry #4 :
                </label>
                <input type="text" placeholder="Entry #4..."
                name="entry4"
                value={this.state.journal.entry4}
                onChange={this.handleChange}
                />
                <br></br>
                <label> Journal Entry #5 :
                </label>
                <input type="text" placeholder="Entry #5..."
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