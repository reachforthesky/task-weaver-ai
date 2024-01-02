import {useEffect, useState} from 'react';
import TaskExplorer from './TaskExplorer';
import TaskDetails from './TaskDetails';
import { fetchTopLevelTasks } from '../../services/TaskService';
import { Task } from '../../models/Task';


export default function App() {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const loadTasks = async () => {
      try {
        setLoading(true);
        const fetchedTasks = await fetchTopLevelTasks();
        setTasks(fetchedTasks);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch tasks');
        setLoading(false);
      }
    };

    loadTasks();
  }, []);

  if (loading) return <div>Loading tasks...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleTaskClick = (task: Task) => {
    setSelectedTask(task);
    console.log(task);
  };

  return (
    <div className="App" style={{ height: '100vh' }}>
      <TaskExplorer taskList = {tasks} onTaskClick={handleTaskClick}/>
      {selectedTask && <TaskDetails task={selectedTask}/>}
    </div>
  );
};