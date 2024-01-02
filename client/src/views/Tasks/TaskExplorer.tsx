import { Task } from '../../models/Task';


interface TaskExplorerProps {
  taskList: Task[];
  onTaskClick: (task: Task) => void;
}

export default function TaskExplorer( {taskList, onTaskClick} : TaskExplorerProps) {

  return (
    <div style={{ width: '15%', float: 'left', height: '100%', 
                  minWidth: '200pt', backgroundColor: 'lightgreen' }}>
      {taskList.map(task => (
        <button key={task._id} onClick={() => onTaskClick(task)}
        style={{
          width: '98%', 
          margin: '2pt',
          textAlign: 'left' 
        }}>
      {task.name}
      </button>
      ))}
    </div>
  );
};
