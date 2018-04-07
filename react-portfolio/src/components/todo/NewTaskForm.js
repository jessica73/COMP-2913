import React from 'react';

class NewTaskForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            task: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            task: event.target.value
        });        
    }
    
    handleSubmit(event) {
        event.preventDefault();

        let { task } = this.state;
        task = task.trim();

        // do not add empty/blank tasks
        if (!task) {
            alert("Task may not be blank!");
            return;
        }
        
        // bubble task up to parent to add to list
        this.props.onClick(task);
        // reset textbox
        this.setState({
            task: ''
        });
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Task:&nbsp;
                    <input type="text" value={this.state.task} onChange={this.handleChange} />
                </label>
                &nbsp;
                <input type="submit" value="Add Task" />
            </form>
        );
    }
}

export default NewTaskForm