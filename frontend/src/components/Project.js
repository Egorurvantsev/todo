import React from "react";

const ProjectItem = ({item}) => {
    return (
        <tr>
            <td>
                {item.name}
            </td>
            <td>
                {item.url_github}
            </td>
            <td>
                {item.users}
            </td>
        </tr>
    )
}

const ProjectList = ({items}) => {
    return (
        <table>
            <th>
                name
            </th>
            <th>
                url_github
            </th>
            <th>
                users
            </th>
            {items.map((item) => <ProjectItem item={item} />)}
        </table>
    )
}
export default ProjectList