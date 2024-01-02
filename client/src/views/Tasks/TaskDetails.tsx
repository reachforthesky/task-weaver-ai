import { Task } from '../../models/Task';


interface TaskDetailsProps {
    task: Task;
  }
  
  export default function TaskDetails({ task }: TaskDetailsProps) {
    if (!task) return <div>Select a task to view its details</div>;
  
    return (
      <div>
        <h1>{task.name}</h1>
        <ul>
            
        </ul>
      </div>
    );
  }