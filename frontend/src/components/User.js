import React from "react";

const UserItem = ({item}) => {
    return (
        <tr>
            <td>{item.username}</td>
            <td>{item.firstname}</td>
            <td>{item.lastname}</td>
            <td>{item.email}</td>
        </tr>
    )
}

const UserList = ({items}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>username</th>
                    <th>firstname</th>
                    <th>lastname</th>
                    <th>email</th>
                </tr>
            </thead>

            {items.map((item) => <UserItem key={item.username} item={item} />)}
        </table>
    )
}
export default UserList
