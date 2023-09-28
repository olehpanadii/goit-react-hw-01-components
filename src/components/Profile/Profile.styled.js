import styled from 'styled-components';

export const Avatar = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  border: 1px solid grey;
  object-fit: cover;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 400px;
  background-color: #fff;
  border: 1px transparent;
  border-radius: 5px;
  margin-top: 40px;
  padding: 15px 15px 40px 15px;
  position: relative;
`;

export const ProfileTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 30px;
  gap: 20px;
`;
export const ProfileName = styled.p`
  font-weight: bold;
  font-size: 24px;
`;

export const SecondaryProfileInfo = styled.p`
  color: #959494;
`;
export const ActivityContainer = styled.div`
  position: absolute;
  width: 100%;
  background-color: #80808070;
  bottom: 0px;
`;

export const ProfileActivitylist = styled.ul`
  display: flex;

  justify-content: space-around;
`;

export const ProfileActivityItem = styled.li`
  display: flex;
  flex-direction: column;

  gap: 5px;
  justify-content: center;
  align-items: center;
`;
