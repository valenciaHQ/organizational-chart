import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 0;
  width: auto;
  padding: 0 8px;
  border-radius: 6px;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 8px 0 0 0;
`;

export const Tag = styled.div`
  width: auto;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 0 8px;
  font-size: 14px;
  list-style: none;
  border-radius: 6px;
  margin: 0 8px 8px 0;
  background: #0052cc;
`;

export const TagText = styled.span`
  margin-top: 3px;
`;

export const AddTagInput = styled.input`
  flex: 1;
  border: none;
  height: 46px;
  width: 40px;
  font-size: 14px;
  padding: 4px 0 0 0;

  &:focus {
    outline: none;
  }
`;
