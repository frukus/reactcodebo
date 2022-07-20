import React from "react";
import { useSelector } from "react-redux";
import { Button } from "../../components/Button";
import { Box } from "../../components/layout/Box";
import { Container } from "../../components/layout/Container";
import { RootState } from "../../redux/configureStore";
import { Task } from "./components/Task";

export const Todo: React.FC = () => {
  const { todoData } = useSelector((s: RootState) => s.todo);
  return (
    <Container>
      <div>hola</div>
      {todoData?.map((task: any) => (
        <Task
          task={task}
          key={task.id}
        />
      ))}
      <Box>
        <Button>Add task</Button>
      </Box>
    </Container>
  )
}