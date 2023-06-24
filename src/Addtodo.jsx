import { useState,useCallback } from 'react'
import './Addtodo.css'
import { v4 as uuidv4 } from 'uuid'
import TodoLists from './components/TodoLists.jsx'

function TextInput({ description, value, setValue }) {
  return (
    <div className='inputbox'>
      <div className='text'>
        {description} 
      </div>
      <input value={value} className='titleinput' onChange={(event) => setValue(event.target.value)}></input>
    </div>
  )
}

function Addtodo() {
  const [todolist, setList] = useState([]); 
  const [title, setTitle] = useState('');
  const [content, setCnt] = useState('');


  const addtolist = function () {
    const id = uuidv4();
    const is_done = false;
    setList([...todolist, { id, title, content, is_done }]);
    setTitle('');
    setCnt('');
  }
  

  return (
    <div className='inputCompo'>
      <div className='inputboxes'>
        <TextInput description="제목" value={title} setValue={setTitle} />
        <TextInput description="내용" value={content} setValue={setCnt} />
        <button onClick={addtolist}>추가하기</button>
      </div>

      <div className='work-done-card'>

      <TodoLists 
        title="Working.. 🔥"
        type={false}
        todolist={todolist}
        setList={setList}/>
      <TodoLists 
        title="Done..! 🎉"
        type={true}
        todolist={todolist}
        setList={setList}/>  

      </div>
    </div>
  )
}

export default Addtodo