import { InfoItem, InfoList, TitleText, TitleWrapper, Wrapper, getRandomHexColor } from "./Statistics.styled";

export const Statistics = ({ stats, title }) => (
  <Wrapper>
    <TitleWrapper>
      <TitleText>{title}</TitleText>
    </TitleWrapper>
    <InfoList>
      {stats.map(({ id, label, percentage }) => (
         <InfoItem key={id} style={{ backgroundColor: getRandomHexColor() }}>
          <span>{label}</span>
          <span>{percentage}</span>
        </InfoItem>
      ))}
    </InfoList>
  </Wrapper>
);
