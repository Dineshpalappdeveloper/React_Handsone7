

import { useSelector } from 'react-redux'


const StudentData = () => {
    const data = useSelector((state)=> state.Student)
    console.log(data);
       
  return (
    <div>
        <div className='display'>
<h2>name</h2>
        </div>
        {
             data.map((ele,index)=>{
                
             })
        }
    </div>
  )
}

export default StudentData
