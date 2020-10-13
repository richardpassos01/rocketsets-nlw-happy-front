import styled from 'styled-components';
import kidsImg from '../../static/images/kids.svg';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #29B6D1, #00C7C7 100%);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  position: relative;
  
  width: 100%;
  max-width: 1100px;

  height: 100%;
  max-height: 680px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  background: url(${kidsImg}) no-repeat 80% center;

  @media (max-width: 768px) {
    padding: 1em;
    background: none;
  }
`;

export const Logo = styled.img``;

export const Main = styled.main`
  max-width: 350px;
`;

export const Title = styled.h1`
  font-size: 76px;
  font-weight: 900;
  line-height: 70px;

  @media (max-width: 360px) {
    font-size: 50px;
  }
`;

export const Subtitle = styled.p`
  margin-top: 40px;
  font-size: 24px;
  line-height: 34px;
`;

export const Location = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  font-size: 24px;
  line-height: 34px;

  display: flex;
  flex-direction: column;

  text-align: right;

  @media (max-width: 768px) {
    position: relative;
  }
`;

export const State = styled.strong`
  font-weight: 800;
`;

export const City = styled.span``;

export const ChangePage = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;

  width: 80px;
  height: 80px;
  background: #ffd666;
  border-radius: 30px;

  text-decoration: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s;

  :hover {
    background: #96FEFF;
  }

  @media (max-width: 768px) {
    right: 1em;
    bottom: 1em;
  }
`;
