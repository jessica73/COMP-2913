import React from 'react';

import NewTaskForm from './NewTaskForm';
import TaskListItem from './TaskListItem';

class TaskList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: []
        }

        this.handleNewTask = this.handleNewTask.bind(this);
        this.handleTaskDone = this.handleTaskDone.bind(this);
    }

    // add the new task to the list
    handleNewTask(task) {
        let newList = this.state.tasks;
        newList.push(task);        
        this.setState({
            tasks: newList
        });
    }

    // remove the checked item from the array
    handleTaskDone(index) {
        let newList = this.state.tasks;
        newList.splice(index,1);
        this.setState({
            tasks: newList
        })
    }

    render() {
        return(
            <div>
                <NewTaskForm
                    onClick={this.handleNewTask}
                />
                <ul style={{ listStyle: 'none' }}>
                    {this.state.tasks.map((task,index) => (
                        <TaskListItem
                            key={index}
                            index={index}
                            task={task}
                            onClick={this.handleTaskDone}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

export default TaskList;