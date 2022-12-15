import styled from "styled-components";

export const container = styled.div`
  canvas {
    height: 500px;
  }
`;
export const text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .text-box {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    h1 {
      font-size: 130px;
      color: #353535;
      font-weight: 300;
      line-height: 195px;
      margin-bottom: 0px;
      margin-top: 10px;
    }
    h2 {
      font-size: 47px;
      color: #353535;
      font-weight: 300;
      line-height: 70.5px;
      margin-bottom: 1.5rem;
      margin-top: 0;
    }
  }
`;
