import React from 'react';
import { Tag, Table, Checkbox } from "antd";
import './ToDoItem.css';

function onChange(completed) {
  // would set it into the opposite of current bool in database and that would update on the website
  return !completed;
}

const columns = [
  {
    title: 'Subject',
    dataIndex: 'subject',
    key: 'subject',
    sorter: (a, b) => a.subject > b.subject,
  },
  {
    title: 'Task Name - database',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name > b.name,
  },
  {
    title: 'Date Due - database',
    dataIndex: 'date',
    key: 'date',
    sorter: (a, b) => a.date > b.date,
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <div>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'blue' : 'green'; // will change depending on the tag or something
          if (tag === 'exam' || tag === 'midterm') 
          {
            color = 'volcano';
          }
          else if (tag === 'teacher')
          {
            color = 'purple';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </div>
    ),
    filters: [
      {
        text: 'Exams & Midterms',
        value: ['exam', 'midterm'],
      },
      {
        text: 'Assignments',
        value: ['assignment'],
      }
    ],
    onFilter: (value, record) => 
    {
      for (const tag of record.tags)
      {
        if (value.indexOf(tag) > -1)
        {
          return true;
        }
      }
      return false;
    }
  },
  {
    title: 'Completed? - database',
    key: 'completed',
    filters: [
      {
        text: 'Only show completed',
        value: true,
      },
      {
        text: 'Only show not completed',
        value: false,
      }
    ],
    onFilter: (value, record) => record.completed === value,
    filterMultiple: false,
    sorter: (a, b) => a.completed - b.completed, //not sure about this one, will see once connected with db
    render: a => (
      <Checkbox checked = {a.completed} onChange={onChange}/> // completed would be from db
    ),
  },
];

const data = [
  {
    subject: 'ESC190',
    key: '1',
    name: 'Quiz #10',
    date: 32,
    tags: ['quiz', 'mandatory'],
    completed: true,
  },
  {
    subject: 'ESC194',
    key: '2',
    name: 'Assignment #100',
    date: 42,
    tags: ['assignment'],
    completed: false,
  },
  {
    subject: 'MAT185',
    key: '3',
    name: 'Final #20',
    date: 32,
    tags: ['exam'],
    completed: false,
  },
  {
    subject: 'AAA',
    key: '35',
    name: 'Final #20',
    date: 32,
    tags: ['exam', 'mandatory'],
    completed: false,
  },
  {
    subject: 'ABC',
    key: '36',
    name: 'Final #20',
    date: 32,
    tags: ['midterm', 'teacher'],
    completed: false,
  },
  {
    subject: 'AAB',
    key: '73',
    name: 'Final #20',
    date: 32,
    tags: ['midterm', 'TA'],
    completed: false,
  },
  {
    subject: 'MAT185',
    key: '83',
    name: 'Final #20',
    date: 32,
    tags: ['teacher'],
    completed: false,
  },
  {
    subject: 'MAT185',
    key: '39',
    name: 'Final #20',
    date: 32,
    tags: ['cool', 'teacher'],
    completed: false,
  },
  {
    subject: 'MAT185',
    key: '323',
    name: 'Final #20',
    date: 32,
    tags: ['cool', 'teacher'],
    completed: false,
  },
  {
    subject: 'MAT185',
    key: '423',
    name: 'Final #20',
    date: 32,
    tags: ['cool', 'teacher'],
    completed: false,
  },
  {
    subject: 'MAT185',
    key: '343',
    name: 'Final #20',
    date: 32,
    tags: ['cool', 'teacher'],
    completed: false,
  },
  {
    subject: 'MAT185',
    key: '633',
    name: 'Final #20',
    date: 32,
    tags: ['cool', 'teacher'],
    completed: false,
  },
  {
    subject: 'MAT185',
    key: '374',
    name: 'Final #20',
    date: 32,
    tags: ['cool', 'teacher'],
    completed: false,
  },
];

function ToDoItem() {
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  ); 
}

export default ToDoItem;
