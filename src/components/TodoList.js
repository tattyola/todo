import React from 'react';
import TodoItem from "./TodoItem";
import {VStack} from "@chakra-ui/react";

const TodoList = ({tasks, handleToggle, handleEdit, handleDelete}) => {


    return (
        <div>
            <VStack
                // align='stretch'
                // spacing={2}
            >
                {tasks.map(task =>

                    <TodoItem
                        task={task}
                        key={task.id}
                        handleToggle={handleToggle}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                )}
            </VStack>
        </div>
    );
};

export default TodoList;
