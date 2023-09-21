import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useHttp from "../../hooks/use-http";

const NewTask = (props) => {
  const transformTaskOnPost = (data, body) => {
    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: body.text };
    props.onAddTask(createdTask);
  };

  const {
    isLoading,
    error,
    sendRequest: addTaskRequest,
  } = useHttp(
    {
      url: "https://react-custom-http-hook-68481-default-rtdb.firebaseio.com/tasks.json",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    },
    transformTaskOnPost
  );

  const enterTaskHandler = (enteredValue1) => {
    addTaskRequest({ text: enteredValue1 });
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
