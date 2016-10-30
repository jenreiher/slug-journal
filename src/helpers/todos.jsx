import React from 'react';
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

function addTodo(contents, date) {
  let todoContents = contents;
  if (!todoContents) todoContents = prompt("What do you need to do?");

  let timestamp = date
  if (!timestamp) timestamp = moment(new Date()).format();
  console.log(timestamp)

  newTodo(todoContents, timestamp);
}

function newTodo(contents, timestamp) {
  let id = data.length;

  let newTodo = {
    id: id,
    timestamp: timestamp,
    status: 0,
    contents: contents
  }

  data.push(newTodo); 
}

export {data, addTodo, newTodo};