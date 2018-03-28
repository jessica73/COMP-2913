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
                                // if only index used, the checkbox state was being carried over to the next item in the list
                                // (i.e., if item 5 checked, item 6 is remapped to index 5 and inherits the checkbox of the old item 5)
                                // to workaround this, use a compound key so react does not match the old checkbox to the updated list
                                // note: this is not foolproof - if the same task is entered one after another, the inherited checkbox state will occur
                                // either a unique ID or a better compound key is needed to solve
                                key={index+'|'+task}
                                index={index}
                                task={task}
                                onTaskDone={this.handlePopTask}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default TaskList;