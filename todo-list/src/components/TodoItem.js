import React, { useEffect } from 'react';
import moment from 'moment';

function TodoItem({ tasks, deleteTask, completeTask, title, handleEdit }) {
    let taskList = [];
    let dueDate = '';


<<<<<<< HEAD
    function handleButton(event, btnType, task) {
        event.stopPropagation();
=======
    function handleButton(btnType, task) {
>>>>>>> dc61789ed40ea5a46c0c9016f0d04199cccb170c
        if (btnType === 'delete') {
            deleteTask(task);
        }   
        if (btnType === 'complete') {
            completeTask(task);
        }
    }
    
    // Change color of each item based on when it's due 
    useEffect(() => {
        let indicators = document.getElementsByClassName('color-indicator');

        let colorMap = {
            'OVERDUE': '#BD0404',
            'TODAY': '#BDBA04', 
            'TOMORROW': '#0475BD',
            'THIS WEEK': '#C440BA',
            'FUTURE': '#C66872',
            'COMPLETED': '#4FAF47'
        }

        for (const indicator of indicators) {
            indicator.style.backgroundColor = colorMap[indicator.title];
        }
    });

    // Each task item to have a delete and complete button
    for (const task of tasks) {
        dueDate = moment(task.dueDate).format('MMM D h:mm A')
        taskList.push(
            <li key={task.id} id='list-item'>
                <span title={title} className='color-indicator'></span>
                <div onClick={(event) => handleEdit(task, event)} role="edit" className='todo-item-container'>
                    <div onKeyDown={(event) => (event.key === "Enter") ? handleEdit(task, event) : ''} onClick={(event) => handleEdit(task, event)} className='todo-item' tabIndex="0">
                        <span className='todo-item-text'>{task.text}</span>
                        <span className='todo-item-due-date'>{dueDate}</span>
                    </div>
                    <div className='time-from-now-container'>
                        <span id='time-from-now'>{moment(task.dueDate).fromNow()}</span>
                        <button className='icon-buttons' type='button' onClick={(event) => handleButton(event, 'delete', task)} onKeyDown={(event) => (event.key === "Enter") ? handleButton(event, 'delete', task) : ''}>
                            <i className='material-icons delete'>delete</i>
                            </button>
                        <button className='icon-buttons' type='button' onClick={(event) => handleButton(event, 'complete', task)} onKeyDown={(event) => (event.key === "Enter") ? handleButton(event, 'complete', task) : ''}>
                        <i className='material-icons checkmark'>checkmark</i>
                            </button>
                    </div>
                </div>
            </li>    
        );
    }

    return (
        <div id="items-container">
            {taskList}
        </div>
    );
}
export default TodoItem;