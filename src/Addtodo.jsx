import { useState } from 'react'
import './Addtodo.css'
import { v4 as uuidv4 } from 'uuid'

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
  const rmfromlist = function (id) {
    setList(todolist.filter((item) => item.id !== id));
  }
  const toggledone = function (id){
    setList(todolist.map((item)=>item.id===id? {...item, is_done:!item.is_done} : item));
  };

  return (
    <div className='inputCompo'>
      <div className='inputboxes'>
        <TextInput description="제목" value={title} setValue={setTitle} />
        <TextInput description="내용" value={content} setValue={setCnt} />
        <button onClick={addtolist}>추가하기</button>
      </div>
      <div className='work-done-card'>
        <div className="card-box">
          <div className="box-title">Working.. 🔥</div>
          <div className="cards">
            {todolist.filter((item) => item['is_done'] === false).map((item) => (
              <div className="card" key={item.id}>
                <div className="todo-title">
                  {item.title}
                </div>
                <div className="todo-content">
                  {item.content}
                </div>
                <div className='buttons'>
                  <button  className='delete' onClick = {()=>rmfromlist(item.id)}>삭제하기</button>
                  <button  className='complete-toggle' onClick={()=>toggledone(item.id)}>완료</button>
                </div>
              </div>
            ))
            }
          </div>
        </div>
        <div className="card-box">
          <div className="box-title">Done..! 🎉</div>
          <div className="cards">
            {todolist.filter((item) => item['is_done'] === true).map((item) => (
              <div className="card" key={item.id}>
                <div className="todo-title">
                  {item.title}
                </div>
                <div className="todo-content">
                  {item.content}
                </div>
                <div className='buttons'>
                  <button  className='delete' onClick = {()=>rmfromlist(item.id)}>삭제하기</button>
                  <button  className='complete-toggle' onClick={()=>toggledone(item.id)}>취소</button>
                </div>
              </div>
            ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Addtodo