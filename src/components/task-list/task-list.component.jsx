import React from 'react'
import CustomButton from '../custom-button/custom-button.component'

import {connect} from 'react-redux'
import {removeFromList} from '../../redux/list_of_tasks/list_of_tasks.actions'

import './task-list.styles.css'

const TaskList = ({list_of_tasks, removeFromList}) => (
    <div className="task-list">
        <ol>
            {
                list_of_tasks.map((task, id) => 
                    <li key={id}>
                        <span className="task-entry">
                            {task}
                            <CustomButton onClick={() => removeFromList(id)}>
                                &#10060;
                            </CustomButton>
                        </span>
                    </li>
                )
            }
        </ol>
    </div>
);

const mapStateToProps = state => ({
    list_of_tasks: state.task_list.list_of_tasks,
});

const mapDispatchToProps = dispatch => ({
    removeFromList : id => dispatch(removeFromList(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);