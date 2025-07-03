import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
`;

export const OneLineText = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  background: linear-gradient(90deg, #00c6ff, #0072ff, #00c6ff);
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${shimmer} 2s linear infinite;
  letter-spacing: 1.5px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;


export const LeftSection = styled.div`
  width: 70%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 40vh;
  height: 40vh;
  object-fit: cover;
  margin-left: 2rem;

  @media (max-width: 768px) {
    margin: 2rem 0 0;
    width: 200px;
    height: 200px;
  }
`;


export const RightSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

