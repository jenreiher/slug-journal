import React from 'react';
import Todo from './components/Todo.jsx'
import {addTodo} from './helpers/todos.jsx'
import moment from 'moment';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: []
    }

    this.newTodo = this.newTodo.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:8000/todos', {
      method: 'get',
      mode: 'cors'
    }).then(response=> {
      return response.json()
    })
    .then(responseData=> {
      let data = responseData
      return this.setState({data: data});
    });
  }

  newTodo(contents, date) {
    let newTodo = addTodo(contents, date);

    this.state.data.push(newTodo);
    this.setState(this.state);
  }

  renderTodos() {
    return(
      <div>
        {this.state.data.map((todo)=> (
          <Todo data={todo} key={todo.id} newTodo={this.newTodo} />
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-offset-2">
            <div className="left-margin">
              <header>
                <h1>Bullet Journal</h1>
                <h3>{moment(Date.now()).format('MMMM Do YYYY')}</h3>
                <button onClick={()=> this.newTodo()} className="btn"><i className="fa fa-plus-circle fa-2x"></i></button>
              </header>
            </div>
          </div>
        </div>
        {this.renderTodos()}
      </div>
    );
  }
}

export default App;
