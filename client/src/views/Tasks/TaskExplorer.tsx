import { Task } from '../../models/Task';


interface TaskExplorerProps {
  taskList: Task[];
}

export default function TaskExplorer( {taskList} : TaskExplorerProps) {

  return (
    <div style={{ width: '15%', float: 'left', height: '100%', 
                  minWidth: '200pt', backgroundColor: 'lightgreen' }}>
      {taskList.map(task => (
        <button key={task._id}style={{
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
