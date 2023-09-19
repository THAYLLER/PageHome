
import styled from 'styled-components/native';

export const Container = styled.View<{ borderColor: string }>`
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 30px;
  height: 50px;
  margin-right: 15px;
  
`;

export const IconContainer = styled.View`
  margin-right: 10px;
`;

export const Text = styled.Text<{ textColor: string }>`
  color: ${({ textColor }) => textColor};
  font-size: 14px;
  font-weight: bold;
`;
