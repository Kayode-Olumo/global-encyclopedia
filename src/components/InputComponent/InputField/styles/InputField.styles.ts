import styled from "styled-components";

export const InputWrapper = styled.div`

  padding: 10px 40px;
  display: flex;
  justify-content: space-between;

  .input-content{
    display: flex;
    height: 45px;
  }

  .input-search {
    width: 500px;
    height: 45px;
    display: flex;
    justify-content: center;
    border-radius: 8px 0 0 8px;
    border: 1px solid #f1f1f1;
    padding: 0 10px;
  }
`;

export const InputSubmit = styled.button`
  height: 47px;
  border-radius: 0 8px 8px 0;
  border: 1px solid #f1f1f1;
  color: #bfbfbf;
  cursor: pointer;
`



