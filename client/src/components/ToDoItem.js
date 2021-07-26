import { Tag, Table, Checkbox, Space } from "antd";
import './ToDoItem.css';

function onChange(completed) {
  // would set it into opposite in database
  return !completed;
}

const columns = [
  {
    title: 'Task Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a className="Name">{text}</a>,
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <div className="Tag">
        {tags.map(tag => {
          let color = tag.length > 5 ? '#108ee9' : 'green'; // will change depending on the tag or something
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag className="IndividualTag" color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </div>
    ),
  },
  {
    title: 'Completion',
    key: 'completion',
    render: completed => (
      <Checkbox checked = {completed} onChange={onChange}/>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'ESC190 - Quiz #10',
    date: 32,
    tags: ['nice', 'developer'],
    completed: true,
  },
  {
    key: '2',
    name: 'ESC194 - Midterm #100',
    date: 42,
    tags: ['loser'],
    completed: false,
  },
  {
    key: '3',
    name: 'MAT185 - Final #20',
    date: 32,
    tags: ['cool', 'teacher'],
    completed: false,
  },
  {
    key: '35',
    name: 'MAT185 - Final #20',
    date: 32,
    tags: ['cool', 'teacher'],
    completed: false,
  },
  {
    key: '36',
    name: 'MAT185 - Final #20',
    date: 32,
    tags: ['cool', 'teacher'],
    completed: false,
  },
  {
    key: '73',
    name: 'MAT185 - Final #20',
    date: 32,
    tags: ['cool', 'teacher'],
    completed: false,
  },
  {
    key: '83',
    name: 'MAT185 - Final #20',
    date: 32,
    tags: ['cool', 'teacher'],
    completed: false,
  },
  {
    key: '39',
    name: 'MAT185 - Final #20',
    date: 32,
    tags: ['cool', 'teacher'],
    completed: false,
  },
  {
    key: '323',
    name: 'MAT185 - Final #20',
    date: 32,
    tags: ['cool', 'teacher'],
    completed: false,
  },
  {
    key: '423',
    name: 'MAT185 - Final #20',
    date: 32,
    tags: ['cool', 'teacher'],
    completed: false,
  },
  {
    key: '343',
    name: 'MAT185 - Final #20',
    date: 32,
    tags: ['cool', 'teacher'],
    completed: false,
  },
  {
    key: '633',
    name: 'MAT185 - Final #20',
    date: 32,
    tags: ['cool', 'teacher'],
    completed: false,
  },
  {
    key: '374',
    name: 'MAT185 - Final #20',
    date: 32,
    tags: ['cool', 'teacher'],
    completed: false,
  },
];

function ToDoItem() {
  return (
    <div className="ToDoItem">
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

export default ToDoItem;
