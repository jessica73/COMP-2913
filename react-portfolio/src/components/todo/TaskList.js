import React from 'react';

import NewTaskForm from './NewTaskForm';
import TaskListItem from './TaskListItem';

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        
        // if only index used, the checkbox state was being carried over to the next item in the list
        // (i.e., if item 5 checked, item 6 is remapped to index 5 and inherits the checkbox of the old item 5)
        // to workaround this, need to generate unique keys for each task instead of relying on map index
        this.state = {
            counter: 0, // will be used to "generate" unique keys for each task
            tasks: []
        }

        this.handlePushTask = this.handlePushTask.bind(this);
        this.handlePopTask = this.handlePopTask.bind(this);
    }

    // add the new task to the list
    handlePushTask(task) {
        const { tasks } = this.state;
        tasks.push({ 
            id: this.state.counter,
            task: task 
        });
        this.setState({
            counter: this.state.counter + 1,
            tasks: tasks
        });
    }

    // remove the checked item from the array
    handlePopTask(index) {
        const { tasks } = this.state;
        tasks.splice(index,1);
        this.setState({
            tasks: tasks
        });
    }

    render() {
        return(
            <div>
                <NewTaskForm
                    onClick={this.handlePushTask}
                />
                <div style={{ margin: 'auto', width: '600px' }}>
                    <ul style={{ listStyle: 'none', textAlign: 'left' }}>
                        {this.state.tasks.map((task,index) => (
                            <TaskListItem
                                key={task.id}
                                index={index}
                                task={task.task}
                                onClick={this.handlePopTask}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default TaskList;