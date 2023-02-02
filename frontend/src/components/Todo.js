import React from "react";

const TodoItem = ({item}) => {
    return (
        <tr>
            <td>{item.text}</td>
            <td>{item.project}</td>
            <td>{item.user_create}</td>
            <td>{item.is_active}</td>
            <td>{item.data_create}</td>
            <td>{item.data_update}</td>
        </tr>
    )
}

const TodoList = ({items}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>text</th>
                    <th>project</th>
                    <th>user_create</th>
                    <th>is_active</th>
                    <th>data_create</th>
                    <th>data_update</th>
                </tr>
            </thead>

            {items?.map((item) => <TodoItem key={item.name} item={item} />)}
        </table>
    )
}
export default TodoList