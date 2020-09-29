import React from 'react';
import ReactDOM from 'react-dom';
import UsersList from './UsersList';
import './index.scss';

const users = [
    {
      id: 'id-0',
      name: 'William',
      age: 30
    },
    {
      id: 'id-1',
      name: 'Tom',
      age: 13
    },
    {
      id: 'id-2',
      name: 'Ted',
      age: 16
    },{
      id: 'id-3',
      name: 'Roj',
      age: 23
    },{
      id: 'id-4',
      name: 'Ann',
      age: 43
    },{
      id: 'id-5',
      name: 'Sem',
      age: 32
    },{
      id: 'id-6',
      name: 'Sally',
      age: 22
    },{
      id: 'id-7',
      name: 'Jack',
      age: 19
    },{
      id: 'id-8',
      name: 'Dilan',
      age: 20
    },{
      id: 'id-9',
      name: 'Rob',
      age: 11
    },
  ]

ReactDOM.render(
    <UsersList users={users}/>,
    document.querySelector('#root')
)