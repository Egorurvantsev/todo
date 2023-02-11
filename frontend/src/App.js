import React from 'react'
import logo from './logo.svg';
import './App.css';
import {Link, Route, Routes, BrowserRouter} from "react-router-dom";
import Project from "./components/Project.js";
import User from "./components/User.js";
import Todo from "./components/Todo.js";
import LoginForm from './components/Auth.js';
import Cookies from "universal-cookie/es6";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'users': [],
      'projects':  [],
      'token': ''
    }
  }


  set_token(token) {
      const cookies = new Cookies()
      cookies.set('token', token)
      localStorage.setItem('token', token)
      this.setState({'token': token}, () => this.load_data())
  }


  is_authenticated() {
      return this.state.token !== ''
  }


  logout() {
      this.set_token('')
  }

  get_token_from_storage() {
      const cookies = new Cookies()
      // const token = cookies.get('token')
      const token = localStorage.getItem('token')
      this.setState({'token': token}, () => this.load_data)
  }


  get_token(login, password) {
    axios.post('http://127.0.0.1:8000/api-token-auth/',
        {username: login, password: password})
        .then(response => {
            this.set_token(response.data['token'])
        }).catch(error => alert('ПНХ'))
  }


  get_headers() {
      let headers = {
          'Content-Type': 'application/json',
      }
      if (this.is_authenticated())
      {
          headers['Authorization'] = 'Token ' + this.state.token
      }
      return headers
  }


    load_data() {
      const headers = this.get_headers()
      this.get_token_from_storage()
      axios.get('http://127.0.0.1:8000/api/users/', {headers})
        .then(response => {
          const users = response.data
            this.setState(
                {
                  'users': users
                }
            )
        }).catch(error => console.log(error))
      axios.get('http://127.0.0.1:8000/api/project/', {headers})
        .then(response => {
          const projects = response.data.results
            this.setState(
                {
                  'projects': projects
                }
            )
        }).catch(error => console.log(error))
      axios.get('http://127.0.0.1:8000/api/todo/', {headers})
        .then(response => {
          const todo = response.data.results
            this.setState(
                {
                  'todo': todo
                }
            )
        }).catch(error => console.log(error))
    }

  componentDidMount() {
      this.get_token_from_storage()
  }


  render () {
    return (
      <div className='Application'>
          <BrowserRouter>
              <nav>
                  <ul>
                      <li>
                          {this.is_authenticated() ? <button onClick={() => this.logout()}>Logout</button> : <Link to='/login'>Login</Link>}
                      </li>
                      {/*<li>*/}
                      {/*    <Link to='/login'>Login</Link>*/}
                      {/*</li>*/}
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
                  <Route exact path='/login' element={<LoginForm get_token={(login, password) => this.get_token(login, password)}/>}/>
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