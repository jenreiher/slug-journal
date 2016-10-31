import React from 'react';
import moment from 'moment';

function addTodo(contents, date) {
  let todoContents = contents;
  if (!todoContents) todoContents = prompt("What do you need to do?");

  let timestamp = date
  if (!timestamp) timestamp = moment(new Date()).format();

  let id = data.length;

  let newTodo = {
    id: id,
    timestamp: timestamp,
    status: 0,
    contents: todoContents
  }

  return newTodo; 
}

export {data, addTodo};