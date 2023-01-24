import React from "react";

const ProjectItem = ({item}) => {
    return (
        <tr>
            <td>{item.name}</td>
            <td>{item.url_github}</td>
            <td>{item.users}</td>
        </tr>
    )
}

const ProjectList = ({items}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>url_github</th>
                    <th>users</th>
                </tr>
            </thead>

            {items?.map((item) => <ProjectItem key={item.name} item={item} />)}
        </table>
    )
}
export default ProjectList