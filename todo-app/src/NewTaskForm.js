import React from 'react';

class NewTaskForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });        
    }
    
    handleSubmit(event) {
        let task = this.state.value.trim();

        // do not add empty/blank tasks
        if (task !== "") {
            // bubble task up to parent to add to list
            this.props.onClick(task);
            // clear textbox
            this.setState({
                value: ''
            })
        }

        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Task:&nbsp;
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                &nbsp;
                <input type="submit" value="Add Task" />
            </form>
        );
    }
}

export default NewTaskForm