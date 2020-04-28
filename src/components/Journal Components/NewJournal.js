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
            <h1 style={{ textAlign:'center' }} class="ui header">
  
  <div class="content" >
  <i aria-hidden="true" class="heart outline pink icon"></i>
      Gratitude Journal 
      <i aria-hidden="true" class="heart outline pink icon"></i></div>
</h1>
<p class="ui header" style={{color:'grey', textAlign:'center', fontStyle:'italic', fontVariantCaps: 'petite-caps'}}>

"According to a study by researchers from the University of Minnesota <br />
and the University of Florida, having participants write down a list of <br></br>
positive events and why the events made them happy lowered their self-reported <br></br>
stress levels and gave them a greater sense of calm at night."<br></br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - From  Arianna Huffington's book Thrive -

</p>

<p class ="ui pink" style={{color:'hotPink', fontStyle:'italic', textAlign:'center'}}>Please write down 5 things that made you happy today.</p>
            <form  class="ui form"style={{color: 'hotPink'}}onSubmit={this.handleSubmit}>
                <div >
            <label> <div class="ui pink circular label">1</div> 
                </label>
                <input class="ui input" type="text" 
                name="entry1"
                value={this.state.journal.entry1}
                onChange={this.handleChange}
                />
                <br></br>
                <label> <div class="ui pink circular label">2</div>
                </label>
                <input type="text" 
                name="entry2"
                value={this.state.journal.entry2}
                onChange={this.handleChange}
                />
                <br></br>
                <label> <div class="ui pink circular label">3</div>
                </label>
                <input type="text" 
                name="entry3"
                value={this.state.journal.entry3}
                onChange={this.handleChange}
                />
                <br></br>
                <label> <div class="ui pink circular label">4</div>
                </label>
                <input type="text" 
                name="entry4"
                value={this.state.journal.entry4}
                onChange={this.handleChange}
                />
                <br></br>
                <label><div class="ui pink circular label">5</div>
                </label>
                <input type="text" 
                name="entry5"
                value={this.state.journal.entry5}
                onChange={this.handleChange}
                />

                </div><br />
                <div style={{ textAlign:'center' }} >
                <button class="ui pink large button" type="submit" >Submit</button>
                </div>
            </form>
        </div>
    )
}


}

export default NewJournal