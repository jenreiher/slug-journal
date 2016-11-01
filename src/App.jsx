import React from 'react';
import Todo from './components/Todo.jsx'
import {addTodo} from './helpers/todos.jsx'

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
      <div className="container">
        <div className="row">
          <h1>Bullet Journal</h1>
          <button onClick={()=> this.newTodo()}>New Todo</button>
          {this.renderTodos()}
        </div>
      </div>
    );
  }
}

export default App;
