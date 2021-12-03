const FreeBoardListDummy = [];

for(let i=0 ; i < 25 ; i++) {

  let dummy = 
  {
    title: `안녕하세요 이 제목은 ${i+1}번 제목입니다.`,
    writer: `글쓴이${i+1}`,
    date: `2020-01-${i+1}`,
  }

  FreeBoardListDummy.push(dummy)  
}


export default FreeBoardListDummy;
