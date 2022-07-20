import styled from "styled-components"
import { FC } from "react"
import { COLOR } from "../../../utils/theme"
import { TaskType } from "../../../types/Task"

const TaskContainer = styled.div`
  background-color: ${COLOR.light};
  padding: 1rem;
  width: 100%;
  margin-top: 1rem;
  border-radius: 0.5rem;
  box-shadow: 1px 3px 8px rgb(0 0 0 / 30%);
`
const TaskWrapper = styled.div`
  display: flex;
`
type TaskProps = {
  task: TaskType
}
export const Task: FC<TaskProps> = ({task}) =>{
  return (
    <TaskContainer>
      <TaskWrapper>
        <h2>{task.name}</h2>
        <h2>{task.description}</h2>
      </TaskWrapper>
    </TaskContainer>
  )
}