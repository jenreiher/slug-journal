import React from 'react';
import Todo from './components/Todo.jsx'
import moment from 'moment';

class App extends React.Component {
  data() {
    return(
      [ 
        { 
          '2016-10-30': [
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
              status: 0,
              contents: 'If status changes to 1 copy to next days date'
            }
          ]
        },
        {
          '2016-10-31': [
            {
              id: 6,
              timestamp: '2016-10-31',
              status: 0,
              contents: 'Add new todo'
            } 
          ]
        }
      ]
    );
  }

  renderTodos() {
    return(
      <div>
        {this.data().map((date, index)=> (
          <div key={index}>
            <h2>{moment(Object.keys(date)[0]).format('MMMM Do[,] YYYY')}</h2>
            <div>
              {date[Object.keys(date)].map(todo=> (
                <Todo data={todo} key={todo.id} />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Bullet Journal</h1>
        {this.renderTodos()}
      </div>
    );
  }
}
export default App;
