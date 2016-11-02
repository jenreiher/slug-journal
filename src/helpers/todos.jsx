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
      body: body
    }).then(response=> {
      return response.json()
    })
    .then(responseData=> {
      newTodo = {
        id: responseData.id,
        timestamp: responseData.created_at,
        status: responseData.status_id,
        contents: responseData.contents
      }

      console.log(newTodo);
      return newTodo; 
  });

  

}

export {addTodo};