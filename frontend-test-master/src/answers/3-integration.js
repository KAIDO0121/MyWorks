// Please try to add 1~3 line of code to finish the integration

function integrate (fun, start, end) {//積分函數,起點,終點

  let step = 0.1              //每一個積分的小片段
  let width = 0.1
  let height = 0
  let intercept = start        
  let area = 0
  while (intercept < end) {
  
    height = Math.abs(0-fun(width))
    area += width*height
    intercept += step         //累加積分的小片段得到最後的area
  }
  return area
}

export default integrate(x => (x), -2, 0)
