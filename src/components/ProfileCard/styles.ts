import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  width: 100%;
  max-width: 300px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  padding: 50px 0;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background-color: #111827;
  cursor: pointer;
  transition: 200ms ease-in-out;

  &:hover {
    box-shadow: 1px 1px 20px #6b7280;
    transition: 200ms ease-in-out;
    margin-bottom: -20px;
  }
`;

export const ImageWraper = styled.div`
  position: relative;

  width: 120px;
  height: 120px;

  border-radius: 50%;
  margin-bottom: 15px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;

  border-radius: 50%;
  object-fit: cover;
`;

export const Title = styled.h5`
  font-size: x-large;
  font-weight: 500;
  color: #ffffff;
  margin: 0;
`;

export const Description = styled.span`
  font-size: medium;
  color: #9ca3af;
`;
