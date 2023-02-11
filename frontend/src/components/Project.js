import React from "react";

const ProjectItem = ({item}) => {
    return (
        <tr>
            <td>{item.name}</td>
            <td>{item.url}</td>
            <td>{item.users}</td>
        </tr>
    )
}

const ProjectList = ({items}) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>name</th>
                    <th>url</th>
                    <th>users</th>
                </tr>
            </tbody>
            {items?.map((item) => <ProjectItem key={item.name} item={item} />)}
        </table>
    )
}
export default ProjectList