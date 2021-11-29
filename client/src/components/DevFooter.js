import React from "react";

export default function DevFooter(props) {
  return (
    <>
      <button className="DevFooter_btn" onClick={props.handleDevHeader}>
        {props.isDevHeader ? <span>헤더접기</span> : <span>헤더펼치기</span>}
      </button>
    </>
  );
}
