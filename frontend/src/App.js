import React from 'react'
import logo from './logo.svg';
import './App.css';
import UserList from "./components/User.js";
import axios from 'axios'
import ProjectList from "./components/Project.js";
import {HashRouter, Route} from 'react-router-dom'


class App extends React.Component {
  constructor(props) {
    super(props)
      const project1 = {name: '1', url_github: 'https://elschool.ru/users/diaries', users: 1}
      const project2 = {name: '2', url_github: 'https://elschool.ru/users/diaries/hui', users: 2}
      const projects = [project1, project2]
    this.state = {
      'users': [],
      'projects':  projects
    }
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/users/')
        .then(response => {
          const users = response.data
            this.setState(
                {
                  'users': users
                }
            )
        }).catch(error => console.log(error))
  }

  render () {
    return (
      <div className='App'>

          <h1>Список пользователь</h1>
        <UserList users={this.state.users}/>
        <ProjectList items={this.state.projects}/>
          <footer>
             GeekBrains&copy;
          </footer>
      </div>

    )
  }
}
export default App;

