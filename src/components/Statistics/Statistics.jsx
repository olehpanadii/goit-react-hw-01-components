import { InfoItem, InfoList, TitleText, TitleWrapper, Wrapper, } from "./Statistics.styled";
import { getRandomHexColor } from "helpers/get-colour";

export const Statistics = ({ stats, title }) => (
  <Wrapper>
      {title && (
      <TitleWrapper>
        <TitleText>{title}</TitleText>
      </TitleWrapper>
    )}
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
