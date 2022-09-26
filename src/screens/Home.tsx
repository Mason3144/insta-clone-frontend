import { gql, useQuery } from "@apollo/client";
// import { useHistory } from "react-router-dom";
import Photo from "../components/feed/Photo";

const FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      id
      user {
        username
        avatar
      }
      file
      caption
      likes
      createdAt
      isMine
      isLiked
    }
  }
`;

const Home = () => {
  const { data } = useQuery(FEED_QUERY);
  // const history = useHistory();
  return (
    <div>
      {data?.seeFeed?.map((photo: any) => (
        <Photo
          key={photo.id}
          {...photo} //same as below
          // id={photo.id}
          // user={photo.user}
          // file={photo.file}
          // isLiked={photo.isLiked}
          // likes={photo.likes}
        ></Photo>
      ))}
    </div>
  );
};
export default Home;

//<button onClick={() => logUserOut(history)}>Log out!</button>
