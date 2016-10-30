import React from 'react';
import Todo from './components/Todo.jsx'
import moment from 'moment';

var data = [ 
    {
      id: 0,
      timestamp: '2016-10-30',
      status: 1,
      contents: 'My first todo'
    },
    {
      id: 1,
      timestamp: '2016-10-30',
      status: 1,
      contents: 'Display on page'
    },
    {
      id: 2,
      timestamp: '2016-10-30',
      status: 1,
      contents: 'Toggle status'
    },
    {
      id: 3,
      timestamp: '2016-10-31',
      status: 1,
      contents: 'Group todos by date'
    },
    {
      id: 4,
      timestamp: '2016-10-31',
      status: 1,
      contents: 'Make todo status change a pop up'
    },
    {
      id: 5,
      timestamp: '2016-10-31',
      status: 1,
      contents: 'Add new todo'
    },
    {
      id: 6,
      timestamp: '2016-10-31',
      status: 0,
      contents: 'If status changes to 1 copy to next days date'
    } 
  ];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(status, contents) {
    let todoContents = status;
    let todoStatus = contents;

    if (!contents) {
      todoContents = prompt("What do you need to do?")
    }
    if (!status) {
      todoStatus = 0
    }

    this.newTodo(todoStatus, todoContents);
    this.forceUpdate();
  }

  newTodo(status, contents) {
    let id = data.length;
    let timestamp = moment(new Date()).format();

    let newTodo = {
      id: id,
      timestamp: timestamp,
      status: status,
      contents: contents
    };

    data.push(newTodo); 
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
        <button onClick={()=>this.addTodo()}>New Todo</button>
        {this.renderTodos()}
      </div>
    );
  }
}
export default App;
