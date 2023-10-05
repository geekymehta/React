import Card from "../ui/Card";

const UserList = (props) => {
  return (
    <Card className="users">
      <ul>
        {props.data.map((user) => (
          <li key={`${user.age * Math.random()}`}>
            {user.username} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
