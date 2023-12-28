export interface Task {
    _id: string;
    name: string;
    // Add other task properties as needed
}

export interface TaskList extends Task {
  subTasks: Task[]
}