import {useState} from 'react';
import { Tag, Checkbox } from "antd";
import './ToDoItem.css';

function ToDoItem(props) {
  const [complete, setComplete] = useState(false);

  function onChange() {
    setComplete(!complete);
  }

  return (
    <div className="ToDoItem">
      <h4 className="Name">Task Name</h4>
      <h4 className="Date"> Jun 09, 2021</h4>
      <Tag className = "Tag" color="green"> Tag </Tag>
      <Checkbox className="Check" checked = {complete} onChange={onChange} > completed? </Checkbox>
    </div>
  );
}

export default ToDoItem;
