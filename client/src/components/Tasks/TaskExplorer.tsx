import React, { useEffect, useState } from 'react';
import { fetchTopLevelTasks } from './TaskService';

interface Task {
  _id: string;
  name: string;
  // Add other task properties as needed
}

const TaskExplorer: React.FC = () => {

    const [tasks, setTasks] = useState<Task[]>([]);
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

  return (
    <div style={{ width: '20%', float: 'left' }}>
      {tasks.map(task => (
        <div key={task._id}>{task.name}</div>
      ))}
    </div>
  );
};

export default TaskExplorer;