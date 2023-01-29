import React from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {Link, Route, Routes, BrowserRouter} from "react-router-dom";
import Project from "./components/Project.js";
import User from "./components/User.js";
import Todo from "./components/Todo.js";


class App extends React.Component {
  constructor(props) {
    super(props)
      const project1 = {name: '1', url_github: 'https://elschool.ru/users/diaries', users: 1}
      const project2 = {name: '2', url_github: 'https://elschool.ru/users/diaries/hui', users: 2}
      const projects = [project1, project2]
      const user1 = {username: 'mmkndr', firstname: 'hu', lastname: 'vladislav', email: 'pasholvpopu@mail.ru'}
      const user2 = {username: 'mmkndr1', firstname: 'hu1', lastname: 'vladisla1v', email: 'pasho1lvpo1pu@mail.ru'}
      const users = [user2, user1]
    this.state = {
      'users': users,
      'projects':  []
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
    axios.get('http://127.0.0.1:8000/api/project/')
        .then(response => {
          const projects = response.data.results
            this.setState(
                {
                  'projects': projects
                }
            )
        }).catch(error => console.log(error))
    axios.get('http://127.0.0.1:8000/api/todo/')
        .then(response => {
          const todo = response.data.results
            this.setState(
                {
                  'todo': todo
                }
            )
        }).catch(error => console.log(error))
  }


  render () {
    return (
      <div className='Application'>
          <BrowserRouter>
              <nav>
                  <ul>
                      <li>
                          <Link to='/user'>Users</Link>
                      </li>
                      <li>
                          <Link to='/projects'>Projects</Link>
                      </li>
                      <li>
                          <Link to='/todo'>Todos</Link>
                      </li>
                  </ul>
              </nav>
              <Routes>
                  <Route exact path='/user' element={<User items={this.state.users}/>}/>
                  <Route exact path='/projects' element={<Project items={this.state.projects}/>}/>
                  <Route exact path='/todo' element={<Todo items={this.state.todo}/>}/>
              </Routes>
          </BrowserRouter>
          <footer>
             GeekBrains&copy;
          </footer>
      </div>
    )
  }
}
export default App;