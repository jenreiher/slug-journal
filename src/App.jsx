import React from 'react';
import Todo from './components/Todo.jsx'
import {data, addTodo} from './helpers/todos.jsx'

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  newTodo() {
    addTodo();
    // temporarily forcing update until data is actually flowing properly
    this.forceUpdate();
  }

  renderTodos() {
    return(
      <div>
        {data.map((todo)=> (
          <Todo data={todo} key={todo.id} />
        ))}
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Bullet Journal</h1>
        <button onClick={()=> this.newTodo()}>New Todo</button>
        {this.renderTodos()}
      </div>
    );
  }
}

export default App;
