//FROG JUMPS

//CODILITY 100%

const solution = (X,Y,D) => {
  return Math.ceil((Y-X)/D)
}

//OR

function solution2(X,Y,D){
  if(X > Y || Y ===0){
    return 0
  }else{
    if((Y-X) % D == 0){
      return (Y-X)/D
    }else{
      return Math.floor(((Y-X)/D) +1)
    }
  }
}

console.log(solution2(10,85,30))
