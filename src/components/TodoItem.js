import React from 'react';
import {Box, Text, Checkbox, IconButton} from "@chakra-ui/react";
import {DeleteIcon, EditIcon} from "@chakra-ui/icons";

const TodoItem = ({task, handleToggle, handleEdit, handleDelete}) => {


    return (
        <div key={task.id}>
            <Box>
                <Checkbox isChecked={task.completed} onChange={() => handleToggle(task.id)}>
                    <Text
                        textDecoration={task.completed ? 'line-through' : 'none'}
                    >
                        {task.title}
                    </Text>
                </Checkbox>
                <Box>
                    <IconButton
                        aria-label={'edit'}
                        icon={<EditIcon/>}
                        onClick={() => handleEdit(task.id)}
                    />
                    <IconButton
                        aria-label={'delete'}
                        icon={<DeleteIcon/>}
                        onClick={() => handleDelete(task.id)}
                    />

                </Box>
            </Box>
        </div>
    );
};

export default TodoItem;
