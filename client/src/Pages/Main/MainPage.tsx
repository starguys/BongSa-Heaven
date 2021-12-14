import Header from "../../components/common/Header";
import BestCrew from "../../components/Main/BestCrew";
import FreeBoard from "../../components/Main/FreeBoard";

export default function MainPage(GoToFreeBoardContent: any) {
  return (
    <>
      <Header />
      <BestCrew />
      <FreeBoard GoToFreeBoardContent={GoToFreeBoardContent} />
    </>
  );
}
