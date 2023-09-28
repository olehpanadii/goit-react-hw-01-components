import { FriendItem, FriendName, FriendsList, Status } from "./Friends.styled"



export const Friends = ({ friends }) => {
    return <FriendsList>
        {friends.map(({ avatar, name, isOnline, id }) => (
            <FriendItem key={id}>
                <Status status = {isOnline}></Status>
                <img  src={avatar} alt={name} width="48" />
                <FriendName >{name}</FriendName>
    
            </FriendItem>))}
    </FriendsList>
    
}
