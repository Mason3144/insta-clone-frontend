import styled from "styled-components";

const SVatar = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 15px;
  background-color: #2c2c2c;
  overflow: hidden;
`;
const Img = styled.img`
  max-width: 100%;
`;

const Avatar = ({ url = "" }) => {
  return <SVatar>{url !== "" ? <Img src={url} /> : null}</SVatar>;
};
export default Avatar;
