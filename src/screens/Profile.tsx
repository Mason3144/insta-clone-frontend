import { useParams } from "react-router-dom";

const Profile = () => {
  const { username } = useParams();
  return "Profile";
};

export default Profile;
