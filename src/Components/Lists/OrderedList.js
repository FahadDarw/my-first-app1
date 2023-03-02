import style from "./List.module.css"
import ListHeader from "../../ListHeader/ListHeader";

const OrderedList = (props) => {



    return (

        <div className={style.listContainer}> <ListHeader headerText="List of to do items" colour="red" />
        <ol>
          {props.toDoList.map((task) => (
            <>
              {task.status === "Done" ? (
                <li>
                  {task.id} {task.task} {task.status}
                </li>
              ) : null}
            </>
          ))}
        </ol>
        <ListHeader headerText="List of Semi Done Tasks" colour="green" />
  
        <ol>
          {props.toDoList.map((task) => (
            <>
              {task.status === "Semi Done" ? (
                <li>{task.task}</li>
              ) : (
                <li>You have not done task {task.id} yet!</li>
              )}
            </>
          ))}
        </ol>
  
        <ol>
          {props.devSkillsList.map((skill) => (
            <>
              {skill.score === "Done" ? (
                <li>
                  {skill.id} {skill.priority} {skill.task}
                </li>
              ) : null}
            </>
          ))}
        </ol>
        <ListHeader headerText="List of Items to be worked on" colour="blue" />
  
        <ul>
          {props.devSkillsList.map((skill) => (
            <>
              {skill.priority === "High" ? (
                <li>{skill.task}</li>
              ) : (
                <li>You have not done task {skill.id} yet!</li>
              )}
            </>
          ))}
        </ul></div>


    );
};

export default OrderedList;