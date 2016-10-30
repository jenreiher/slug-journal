import React from 'react';
import Todo from './components/Todo.jsx'
import moment from 'moment';

class App extends React.Component {
  renderTodos() {
    let data = [
      {
        id: 0,
        timestamp: '1477789154',
        status: 1,
        contents: 'My first todo'
      },
      {
        id: 1,
        timestamp: '1477789247',
        status: 1,
        contents: 'Display on page'
      },
      {
        id: 2,
        timestamp: '1477789224',
        status: 1,
        contents: 'Toggle status'
      },
      {
        id: 3,
        timestamp: '1477789512',
        status: 0,
        contents: 'Group todos by date'
      },
      {
        id: 4,
        timestamp: '1477789272',
        status: 0,
        contents: 'If status changes to 1 copy to next days date'
      }
    ];

    return(
      <div>
        {data.map(todo=> (
          <Todo status={todo.status} contents={todo.contents} key={todo.id} />
        ))}
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Hello React :)</h1>
        {this.renderTodos()}
      </div>
    );
  }
}
export default App;
