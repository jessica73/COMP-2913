import React from 'react';

import NewTaskForm from './NewTaskForm';
import TaskListItem from './TaskListItem';

class TaskList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: []
        }

        this.handlePushTask = this.handlePushTask.bind(this);
        this.handlePopTask = this.handlePopTask.bind(this);
    }

    // add the new task to the list
    handlePushTask(task) {
        const { tasks } = this.state;
        tasks.push(task);
        this.setState({
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
                                key={index}
                                index={index}
                                task={task}
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