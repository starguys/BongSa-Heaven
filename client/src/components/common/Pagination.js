import React from "react";
import styled from "styled-components";

const PaginationBox = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  a {
    color: black;
    padding: 1rem;
  }
`;

const PageNumber = styled.li`
`;

const PageButton = styled.button`
  cursor: pointer;
  font-size: 2rem;
  color: ${props => props.theme.uiColorOrange};
  margin: 0 0.3rem;
  padding: 0;
  border: none;
  background: none;
`;

export default function Pagination(
  { postPerPage, totalPosts, paginate }
) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <PaginationBox>
        {pageNumbers.map(number => (
          <PageNumber key={number}>
            <PageButton onClick={() => paginate(number)}>{number}</PageButton>
          </PageNumber>
        ))}
        {/* <a href="#">&laquo;</a>
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">&raquo;</a> */}
      </PaginationBox>
    </>
  );
}
