import TodoList from "./components/TodoList";
import {Button, ChakraProvider, Heading, Input} from '@chakra-ui/react'
import {useState} from "react";
import {AddIcon, CheckIcon} from "@chakra-ui/icons";

function App() {

    const [tasks, setTasks] = useState([]); // array of tasks
    const [newTaskText, setNewTaskText] = useState(''); // current text in input
    const [editingTaskId, setEditingTaskId] = useState(null); // id of editing task

    const handleAddTask = () => {
        if (editingTaskId !== null) {
            setTasks(prevTasks => // prevTasks - это копия  tasks
                prevTasks.map(task =>
                    task.id === editingTaskId ? {...task, title: newTaskText} : task
                )
            );
            setNewTaskText('');
            setEditingTaskId(null);
        } else if (newTaskText.trim() !== '') {
            // add new task
            const newTask = {
                id: Date.now(),
                title: newTaskText,
                completed: false,
            };
            setTasks(prevTasks =>
                [...prevTasks, newTask]
            );
            setNewTaskText('');
        }
    }

    const handleToggle = (taskId) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === taskId ? {...task, completed: !task.completed} : task
            )
        )
    }

    // edit find
    const handleEdit = (taskId) => {
        setEditingTaskId(taskId)
        const findTask = tasks.find(task => task.id === taskId)
        setNewTaskText(findTask.title)
    }

    // delete filter
    const handleDelete = (taskId) => {
        setTasks(prevTasks =>
            prevTasks.filter(task => task.id !== taskId))
    }

    return (
        <ChakraProvider>

            <Heading mb={4} color='pink.400'>
                Todo List
            </Heading>

            <Input
                placeholder='Enter new task'
                mb={3}
                value={newTaskText}
                onChange={e => setNewTaskText(e.target.value)}
            />

            <Button
                colorScheme='pink'
                variant='outline'
                size='sm'
                mb={3}
                leftIcon={editingTaskId === null ? <AddIcon/> : <CheckIcon/>}
                onClick={handleAddTask}
            >
                {editingTaskId !== null ? 'Ok' : 'Add'}
            </Button>

            <TodoList
                tasks={tasks}
                handleToggle={handleToggle}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />

        </ChakraProvider>
    );
}

export default App;
