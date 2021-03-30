import React from 'react'
import CustomButton from '../custom-button/custom-button.component'

import './task-list.styles.css'

const TaskList = ({list_of_tasks, removeItem}) => (
    <div className="task-list">
        <ol>
            {
                list_of_tasks.map((task, id) => 
                    <li key={id}><span className="task-entry">{task}<CustomButton onClick={() => removeItem(id)}>&#10060;</CustomButton></span></li>
                )
            }
        </ol>
    </div>
);

export default TaskList;