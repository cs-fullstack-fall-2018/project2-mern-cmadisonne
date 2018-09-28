import React, {Component} from 'react';
import AddEntry from "./AddEntry";

class EntryDisplay extends Component{
    constructor(props) {
        super(props);
        this.state = {
            journals: [
                {
                    username: "",
                    title: "",
                    entry: "",
                    date: Date,
                    isJournalShowing: Boolean
                }
            ]
        };
    }

    // pageSwitch (props) {
    //     let isJournalShowing = props.isJournalShowing;
    //     if(isJournalShowing = true){
    //         return <EntryDisplay/>
    //     }
    //     if (isJournalShowing = false){
    //         return <AddEntry/>
    //     }
    // }

    mapFunction(eachJournal) {
        return (
            <div>
                <h3>{eachJournal.title}</h3>
                <h5>By: {eachJournal.username}</h5>
                <p>{eachJournal.entry}</p>
                <br/>
                <i>Posted On: {eachJournal.date}</i>
                <br/>
                {/*<button onClick={this.deleteByID}>Delete</button>*/}
                <hr color='black'/>
            </div>
        )
    }

    deleteByID(id) {
        fetch('/journals/delete',
            {
                method: "DELETE",
                body: JSON.stringify(
                    {
                        "id": id
                    }
                    ),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(data => data.json());
    };

    submitChange =(event) =>{
        fetch('/journals/new',
            {
                method: "POST",
                body: JSON.stringify(
                    {
                        username: this.state.username,
                        title: this.state.title,
                        entry: this.state.entry,
                    }
                ),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(data => data.json());
        event.preventDefault();
    };

    addUsername = (event) => {
        this.setState ({username: event.target.value});
    };

    addTitle = (event) => {
        this.setState ({title: event.target.value})
    };

    addEntry = (event) => {
        this.setState ({entry: event.target.value})
    };

    addDate = (event) => {
        this.setState ({date: new Date()})
    };

    render(){

        fetch('/journals')
            .then(data => data.json())
            .then(response => this.setState({journals: response}));

        var forEachJournal = this.state.journals.map(
            (eachJournal) => this.mapFunction(eachJournal)
        );

        return (
            <div>
                <p>{forEachJournal}</p>
                {/*<a href='#' onClick={this.state.pageSwitch}>Add An Entry</a>*/}
                <form onSubmit={this.submitChange}>
                    <input className='usernameField' type="text" placeholder="Enter Username" value={this.state.username} onChange={this.addUsername}/>
                    <br/>
                    <br/>
                    <input className='titleField' type="text" placeholder="Enter Title" value={this.state.title} onChange={this.addTitle}/>
                    <br/>
                    <br/>
                    <input className='entryField' type="text" placeholder="Add New Entry Here" value={this.state.entry} onChange={this.addEntry}/>
                    <br/>
                    <br/>
                    <button className='submitButton' type="submit">Submit</button>
                </form>

            </div>
        )
    }
}

export default EntryDisplay;
