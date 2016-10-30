import React from 'react';
import Todo from './components/Todo.jsx'
import moment from 'moment';

class App extends React.Component {
  renderTodos() {
    let data =
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
            }
          ]
        },
        {
          '2016-10-31': [
            {
              id: 3,
              timestamp: '2016-10-31',
              status: 0,
              contents: 'Group todos by date'
            },
            {
              id: 4,
              timestamp: '2016-10-31',
              status: 0,
              contents: 'If status changes to 1 copy to next days date'
            } 
          ]
        }
    ];

    return(
      <div>
        {data.map((date, index)=> (
          <div>
            <h2 key={index}>{moment(Object.keys(date)[0]).format('MMMM Do[,] YYYY')}</h2>
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
        <h1>Hello React :)</h1>
        {this.renderTodos()}
      </div>
    );
  }
}
export default App;
