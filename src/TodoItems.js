import React from 'react'

const TodoItems = (props) => {

    const createTasks = (item) => {
        return <li onClick={() => deleteItem(item.key)} key = {item.key}>{item.text}</li>;
    }

    const deleteItem = (key) => {
        props.delete(key);
    }

    const todoEntries = props.entries;
    const listItems = todoEntries.map(createTasks);

    return (
        <ul className="theList">
            {listItems}
        </ul>
    )
}

export default TodoItems