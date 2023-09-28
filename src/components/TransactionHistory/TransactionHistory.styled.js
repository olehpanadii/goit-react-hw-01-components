import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  background-color: white;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const HeadWrapper = styled.thead`
  tr {
    border: 1px solid #e0e0e0;
    text-align: center;
  }
`;

export const TableBody = styled.tbody`
  tr:nth-child(even) {
    background-color: #f0f0f0;
  }

  tr {
    border: 1px solid #e0e0e0;
    text-align: center;
  }
`;
