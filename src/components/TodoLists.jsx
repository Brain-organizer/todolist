import React from 'react'
import './TodoLists.css'

function TodoLists({title, type,todolist,setList}) {
  const rmfromlist = function (id) {
      setList(todolist.filter((item) => item.id !== id));
    };
  const toggledone = function (id){
    setList(todolist.map((item)=>item.id===id? {...item, is_done:!item.is_done} : item));
  };

  return (
    <div className="card-box">
          <div className="box-title">{title}</div>
          <div className="cards">
            {todolist.filter((item) => item['is_done'] === type).map((item) => (
              <div className="card" key={item.id}>
                <div className="todo-title">
                  {item.title}
                </div>
                <div className="todo-content">
                  {item.content}
                </div>
                <div className='buttons'>
                  <button  className='delete' onClick = {()=>rmfromlist(item.id)}>삭제하기</button>
                  <button  className='complete-toggle' onClick={()=>toggledone(item.id)}>{type ? "취소" : "완료"}</button>
                </div>
              </div>
            ))
            }
          </div>
        </div>
  )
}

export default TodoLists