import styled from 'styled-components';

interface CardProps {
  total?: boolean;
}

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  padding: 8px;
  margin-top: -150px;
  overflow: auto;
`;

export const Card = styled.div<CardProps>`
  background: ${({ total }: CardProps): string => (total ? '#4182D8' : '#fff')};
  padding: 22px 32px;
  min-width: 200px;
  border-radius: 6px;
  color: ${({ total }: CardProps): string => (total ? '#fff' : '#363F5F')};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 16px;
    }
  }

  h1 {
    margin-top: 14px;
    font-size: 36px;
    font-weight: normal;
    line-height: 54px;
  }
  @media (max-width: 1000px) {
    h1 {
      font-size: 24px;
    }
  }
`;

export const DateRange = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 20px;
  strong {
    margin: 0 10px;
  }

  div {
    flex: 1;
    background: #fff;
  }

  @media (max-width: 700px) {
    display: block;

    strong {
      display: none;
    }
  }
`;

export const TableContainer = styled.section`
  margin-top: 14px;
`;

export const TableHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  span {
    width: 100%;
    color: #969cb3;
    font-weight: normal;
    padding: 20px 32px 5px;
    text-align: left;
    font-size: 16px;
    line-height: 24px;
  }

  @media (max-width: 700px) {
    span {
      padding: 20px 24px 5px;

      &.hidden-sm {
        display: none;
      }
    }
  }
`;

export const TableRow = styled.div`
  display: flex;
  width: 100%;
  border-radius: 6px;
  background: #fff;
  align-items: center;
  justify-content: space-between;

  & + div {
    margin-top: 15px;
  }

  span {
    width: 100%;
    color: #969cb3;
    padding: 20px 32px;
    font-size: 16px;
    font-weight: normal;
  }

  @media (max-width: 700px) {
    span {
      padding: 20px 24px 5px;

      &.hidden-sm {
        display: none;
      }
    }
  }
`;
