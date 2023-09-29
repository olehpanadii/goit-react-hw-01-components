import { FriendItem, FriendName,  Status } from "./FriendListItem.styled"


export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <FriendItem key={id}>
      <Status status={isOnline}></Status>
      <img src={avatar} alt="User Avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};