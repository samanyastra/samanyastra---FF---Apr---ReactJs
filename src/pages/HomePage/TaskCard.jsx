import './Taskcard.css'


const TaskCard = ({title, completed, id}) => {
    return <div className="task-card" key={id}>
        <div>{title}</div>
        <div className={`${completed==true?"completed":"pending"}`} >
            {completed==true? "completed": "Pending"}
         </div>
    </div>
}

export default TaskCard

// condition ? true case : false case