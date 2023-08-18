import React, { useState, useRef } from "react";
import TodoItems from "./TodoItems";

const TodoList = () => {
    const [items, setItems] = useState([]);
    const inputElement = useRef(null);

    function addItem(e) {
        const inputElement = e.target[0]
        if (inputElement.value !== "") {
            const newItem = {
                text: inputElement.value,
                key: Date.now(),
            };
            setItems(prevItems => prevItems.concat(newItem));
            inputElement.value = "";
        }
        console.log(items);
        e.preventDefault();
    }

    function deleteItem(key) {
        const filteredItems = items.filter(item => item.key !== key)
        setItems(filteredItems);
    }

    return (
        <div className="todoListMain">
            <div className="header">
                <form onSubmit={addItem}>
                    <input ref={inputElement} placeholder="enter task" />
                    <button type="submit">add</button>
                </form>
                <TodoItems entries={items} delete={deleteItem}/>
            </div>
        </div>
    )
}

export default TodoList;