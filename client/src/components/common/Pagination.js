import React from "react";
import styled from "styled-components";

const PaginationBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  a {
    color: black;
    padding: 1rem;
  }
`

export default function Pagination() {
  return (
    <>
      <PaginationBox>
        {/* <a href="#">&laquo;</a>
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">&raquo;</a> */}
      </PaginationBox>
    </>
  )
}
