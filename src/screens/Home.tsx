import { useHistory } from "react-router-dom";
import { logUserOut } from "../apollo";

const Home = () => {
  const history = useHistory();
  console.log(history);
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => logUserOut(history)}>Log out!</button>
    </div>
  );
};
export default Home;
