import {
  ActivityContainer,
  Avatar,
  ProfileActivityItem,
  ProfileActivitylist,
  ProfileContainer,
  ProfileName,
  ProfileTextContainer,
  SecondaryProfileInfo,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <div>
        <Avatar src={avatar} alt={username} />
        <ProfileTextContainer>
          <ProfileName>{username}</ProfileName>
          <SecondaryProfileInfo>@{tag}</SecondaryProfileInfo>
          <SecondaryProfileInfo>{location}</SecondaryProfileInfo>
        </ProfileTextContainer>
      </div>
      <ActivityContainer>
        <ProfileActivitylist>
          <ProfileActivityItem>
            <span>Followers</span>
            <span>{stats.followers}</span>
          </ProfileActivityItem>
          <ProfileActivityItem>
            <span>Views</span>
            <span>{stats.views}</span>
          </ProfileActivityItem>
          <ProfileActivityItem>
            <span>Likes</span>
            <span>{stats.likes}</span>
          </ProfileActivityItem>
        </ProfileActivitylist>
      </ActivityContainer>
    </ProfileContainer>
  );
};
