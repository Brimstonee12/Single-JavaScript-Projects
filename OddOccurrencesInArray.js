// OddOccurrencesInArray

//CODILITY 55%

let A=[9,3,9,3,9,7,9]

function solution(A) {
  let B = A.sort()
  let prevItem =[]
  let done = []
  for(let i of [...Array(B.length).keys()]){
    if(B[0] === B[1]){
      B.shift()
      prevItem.push(B.shift())
   }else if(B[0] !== B[1]){
     if(prevItem.includes(B[0])){
       B.shift()
       done.push(B[0])
     }
     else{
       done.push(B[0])
       B.shift()
     }
   }
  }
  return done
}

console.log(solution(A))
