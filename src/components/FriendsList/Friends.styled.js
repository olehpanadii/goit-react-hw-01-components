import styled from 'styled-components';

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding-top: 40px;
  align-items: center;
  justify-content: center;
`;
export const FriendItem = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 200px;
  border: 1px transparent;
  padding: 10px 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  background-color: #fff;
`;

export const Status = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  border: 1px solid #a4abb6;
  background-color: ${({ status }) => (status ? `#56f000` : `#ee1818d9`)};
`;

export const FriendName = styled.p`
  font-weight: bold;
`;
