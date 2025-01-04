import { createContext } from 'react';

export const TaskContext = createContext({
    tasks: [],
    setTasks: () => {},
    taskToEdit: {},
    setTaskToEdit: () => {},
});
