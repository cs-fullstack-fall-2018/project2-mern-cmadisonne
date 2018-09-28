import React, {Component} from 'react';

class AddEntry extends Component{

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
        this.setState ({username: event.target.value})
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
    
    render() {

        return(
            <div>
                <form onSubmit={this.submitChange}>
                    <input type="text" placeholder="Enter Username" value={this.state.username} onChange={this.addUsername}/>
                    <input type="text" placeholder="Enter Title" value={this.state.title} onChange={this.addTitle}/>
                    <input type="text" placeholder="Add New Entry Here" value={this.state.entry} onChange={this.addEntry}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddEntry;