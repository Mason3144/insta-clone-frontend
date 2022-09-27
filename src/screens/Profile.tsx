import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { PHOTO_FRAGMENT } from "../fragments";

interface Params {
  username: string;
}

const SEE_PROFILE_QUERY = gql`
  query seeProfile($username: String!) {
    seeProfile(username: $username) {
      id
      isMe
      isFollowing
      totalFollowers
      totalFollowing
      avatar
      bio
      username
      lastName
      firstName
      photos {
        ...PhotoFragment
      }
    }
  }
  ${PHOTO_FRAGMENT}
`;

const Profile = () => {
  const { username }: Params = useParams();
  const { data } = useQuery(SEE_PROFILE_QUERY, {
    variables: {
      username,
    },
  });
  console.log(data);
  return <span></span>;
};

export default Profile;
