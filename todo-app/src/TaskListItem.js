import React from 'react';

class TaskListItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // bubble index up to parent to remove from list
        this.props.onTaskDone(this.props.index);
    }

    render() {
        return(
            <li>
                {/* <img src={checkbox} alt="" style={{ marginRight: '10px' }} onClick={this.handleClick} />{this.props.task} */}
                {/* 
                    if checkbox input used, when an item is clicked, it drops off the list but then the next item in the list "inherits" the check mark
                    for example, checking 1 results in it dropping off but then 2 ends up with the checkmark
                        [ ] 1    [x] 1    [x] 2    
                        [ ] 2    [ ] 2    [ ] 3
                        [ ] 3    [ ] 3
                    as a workaround, use a click-able image instead
                 */}
                <input type="checkbox" onChange={this.handleClick}/>{this.props.task}
            </li>
        );
    }
}

export default TaskListItem;