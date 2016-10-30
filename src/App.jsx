import React from 'react';
import Todo from './components/Todo.jsx'
import {data, addTodo} from './helpers/todos.jsx'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.rerender = this.rerender.bind(this);
  }

  componentWillUpdate(nextprops) {
    // instead of forcing rerender, could something happen here instead to trigger the udpate?

  }

  newTodo() {
    addTodo();
    this.rerender();
  }

  rerender() {
    // temporarily forcing update until data is actually flowing properly
    // should data maybe move to state here to fix this?? 
    // yes good idea, self!
    this.forceUpdate();
  }

  renderTodos() {
    return(
      <div>
        {data.map((todo)=> (
          <Todo data={todo} key={todo.id} rerender={this.rerender}/>
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
