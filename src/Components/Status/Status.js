import style from "./Status.module.css"

const Status = (props) => {


    
    return (

<div className={style.statusContainer}>
      <p>
        TO DO LIST STATUS - There are {props.toDoList.length} tasks for the To Do List
      </p>
      <p>
        DEV SKILL LIST STATUS- There are {props.devSkillsList.length} tasks for the To
        Do List
      </p>
      </div>



    );
};

export default Status;