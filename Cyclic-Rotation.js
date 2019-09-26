//CyclicRotation

//CODILITY 100%


function solution(A,K){
  if(A.reduce((a,b) => {return a + b}, 0) === 0){
    return A
  }
  else if(K===0){
    return A
  }
  else{
    for (let i of [...Array(K).keys()]){
      let Item = A.pop()
      A.unshift(Item)
      Item = []
    }
    return A
  }
}

console.log(solution([1, 2, 3, 4],4))
