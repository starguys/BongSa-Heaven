import React from "react";
import styled from 'styled-components';
import { useHistory } from "react-router";

const ImgUploadBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 30px 0px 15px 0px;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`
const ImgUploadButton = styled.div`
  background-color : #FF7676;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 80px 20px 80px;
  border-radius: 20px;
`
const ImgUpload= styled.input`
  display:none;
`

const SelectBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  margin: 15px 0px 15px 0px;

  @media screen and (min-width: 1024px) {
    justify-content: flex-end;
  }
`
const CancelButton = styled.div`
  background-color : white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  padding: 20px 0px 20px 0px;
  margin-right: 10px;
  margin-bottom: 20px;
  border-radius: 20px;
  border: 1px solid #000000;

  @media screen and (min-width: 1024px) {

  }
`
const CompleteButton = styled.div`
  background-color : #FF7676;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  padding: 20px 0px 20px 0px;
  margin-left: 10px;
  margin-bottom: 20px;
  border-radius: 20px;

  @media screen and (min-width: 1024px) {

  }
`


export default function CreateButton(props) {

  const saveFileImage = (e) => { 
    props.setFileImage(URL.createObjectURL(e.target.files[0])); };

  const history = useHistory();
  const Create = (url) => history.push(url);
  const Cancel = (url) => history.push(url);


  return (
    <>
      <ImgUploadBox >
        <label for="imgUpload">
          <ImgUploadButton>
            이미지 업로드
          </ImgUploadButton>
        </label>
      </ImgUploadBox>
      <SelectBox>
        <CancelButton onClick={() => Cancel(props.cancel)}>
          취소
        </CancelButton>
        <CompleteButton onClick={() => Create(props.create)}>
          작성 완료
        </CompleteButton>
      </SelectBox>
      {/* display:none 상태 */}
      <ImgUpload id="imgUpload" onChange={saveFileImage} type="file" aceept="image/*"/>
      {/* display:none 상태 */}
    </>
  );
}
