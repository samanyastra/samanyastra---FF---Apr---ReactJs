import { useEffect, useState } from "react"

import axios from "axios";
import TaskCard from "./TaskCard";


const Homepage = () => {
    const [counter, setCounter] = useState(0);

    const [taskList, setTaskList] = useState([]);

  
    useEffect( () => {
        console.log("Data Has to be loaded here")

        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(response => {
                setTaskList(response.data)
                setCounter(response.data.length)
            })
            .catch(err => {

            })

    } , [counter])
    
    // useEffect( function, [])

    return <>
        <h1>Welcome back Satish,</h1>
        <hr/>
        <h1>{counter}</h1>
        <button onClick={() => setCounter(counter+1)} >increase count</button>

        <p>Here are your tasks for day</p>
        {/* <TaskCard title={"MY DUMMY TASK"} completed={false}  />

        <TaskCard title={"MY DUMMY TASK"} completed={true}  /> */}


        {
            taskList.map( task => <TaskCard title={task.title} completed={task.completed}  id={task.id} /> )
        }
    </>
}

export default Homepage