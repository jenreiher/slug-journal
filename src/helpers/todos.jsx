import React from 'react';
import moment from 'moment';

function addTodo(contents, date) {
  let todoContents = contents;
  if (!todoContents) todoContents = prompt("What do you need to do?");

  let timestamp = date
  if (!timestamp) timestamp = moment(new Date()).format();

  let body = JSON.stringify({
    status: 1,
    contents: todoContents
  });

  let newTodo = {}

  fetch('http://localhost:8000/todos/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      body: body,
      mode: 'no-cors'
    }).then(response=> {
      return response.json()
    })
    .then(responseData=> {
      let data = responseData
      console.log(responseData);
  });

  newTodo = {
    id: 100,
    timestamp: timestamp,
    status: 0,
    contents: todoContents
  }

  return newTodo; 
}

export {addTodo};