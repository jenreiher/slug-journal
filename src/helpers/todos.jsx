import React from 'react';
import moment from 'moment';

function addTodo(contents, date) {
  let todoContents = contents;
  if (!todoContents) todoContents = prompt("What do you need to do?");

  let timestamp = date
  if (!timestamp) timestamp = moment(new Date()).format();

  let body = JSON.stringify({
    timestamp: timestamp,
    status: 0,
    contents: todoContents
  });
  // let body = {
  //   timestamp: timestamp,
  //   status: 0,
  //   contents: todoContents
  // };

  fetch('http://localhost:8000/todos/new', {
      method: 'POST',
      headers: {
        // 'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        // 'Content-Type': 'application/json'  
        // 'Content-Type': 'text/plain',  
      },
      body: body,
      // dataType: "json",
      mode: 'no-cors'
    }).then(response=> {
      return response.json()
    })
    .then(responseData=> {
      let data = responseData
      console.log(responseData);
  });

  let newTodo = {
    id: 100,
    timestamp: timestamp,
    status: 0,
    contents: todoContents
  }

  return newTodo; 
}

export {addTodo};