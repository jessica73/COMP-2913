import React from 'react';

class TaskListItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // bubble index up to parent to remove from list
        this.props.onClick(this.props.index);
    }

    render() {
        return(
            <li>
                <input type="checkbox" onChange={this.handleClick}/>{this.props.task}
            </li>
        );
    }
}

export default TaskListItem;