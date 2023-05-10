'use client'
import axios from 'axios';
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [updateUI, setUpdateUI] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/setTask', { task: input }).
      then((res) => {
        setInput("");
        console.log(res.data)
        setUpdateUI(true)
      }).
      catch((err) => console.log("Error occured " + err))
  }

  useEffect(()=>{
    axios.get('/api/getTask').then((res)=>{
      setTasks(res.data)
      console.log(res);
    })
  }, [updateUI])

  return (
    <main className="flex min-h-screen justify-center ">
      <div className="input-holder py-20">
        <form action="" className='flex gap-1' onSubmit={handleSubmit}>
          <input type="text" className='border-2 rounded-xl px-2 py-0.5' value={input} placeholder='Write here' onChange={(e) => { setInput(e.target.value) }} />
          <button type='submit' className='bg-slate-400 py-1 px-3 rounded-xl text-slate-100 text-sm' >Submit</button>
        </form>
      </div>

      <ul className='absolute top-32 text-center'>
       {tasks.map((task)=>(
        <li key={task._id}>{task.task}</li>
       ))}
      </ul>
    </main>
  )
}
