
import React from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';



const StudentData = () => {
  const nav = useNavigate();
  const data = useSelector((state) => state.Student)


  return (
    <div>
      StudentData:
      {
        data.map((item, index) => {
          return (
            <>
              <div key={index} className='display'>
                <h2>{item.Name}</h2>  <h2>{item.Age}</h2>  <h2>{item.Course}</h2> <h2>{item.batch}</h2>

                <button onClick={
                  () => {
                    const id = item.id;
                    nav("/editStudent", { state: id });
                  }}> Edit </button>
              </div>
            </>
          )
        })
      }

    </div>
  )
}

export default StudentData
