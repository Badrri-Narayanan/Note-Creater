import React from 'react'
import CustomButton from '../custom-button/custom-button.component'

import { connect } from 'react-redux'

import './task-list.styles.css'
import { removeTaskFromList } from '../../redux/list_of_tasks/list_of_tasks.actions'

const TaskList = ({list_of_tasks, removeItem}) => (
    <div className="task-list">
        <ol>
            {
                list_of_tasks.map((task, id) => 
                    <li key={id}>
                        <span className="task-entry">
                        {task}
                            <CustomButton onClick={() => removeItem(id)}>
                                &#10060;
                            </CustomButton>
                        </span>
                    </li>
                )
            }
        </ol>
    </div>
);

const mapStateToProps = (state) => ({
    list_of_tasks: state.taskslist.list_of_tasks
})

const mapDispatchToProps = dispatch => ({
    removeItem: id => dispatch(removeTaskFromList(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(TaskList);