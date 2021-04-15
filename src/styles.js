import styled from "styled-components";

export const CouponContainer = styled.div`
  padding: 1rem;
`;

export const Coupon = styled.div`
  padding: 0.75rem;
  border-radius: 5px;
  margin-bottom: 1rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  display: grid;
  grid-template-columns: 1fr 10%;
`;

export const CouponText = styled.div``;

export const CouponHead = styled.h3`
  font-family: sans-serif;
`;

export const CouponDesc = styled.p`
  font-family: sans-serif;
`;

export const Redeem = styled.button`
  background-color: transparent;
  color: #0b0;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  outline: none;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 200, 0, 0.1);
  }
`;
