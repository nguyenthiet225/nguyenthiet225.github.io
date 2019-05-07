//bai 1
function laySo(x){
  let laySo = []
  laySo.sort(function(a,b){return(b-a)};
  let soMoi = laySo.slice(1,2)
  return soMoi
  }
  //bai2
  function timChuoi(arr) {
    var results = [];
    for (var i = 0; i < arr.length; i++) {
      var meme = arr[i][0].length;
      for (var j = 0; j < arr[i].length; j++) {
        if (arr[i][j].length > meme) {
          meme = arr[i][j].length;
        }
      }
      results[i] = meme;
    }
    return results;
  }
  //bai3
  function yeuEm(str,target){
    var a = yeuEm.endsWith(target)
    console.log(a)
  }
  //bai4
  function skyBlue(x){
  for (let i =0 ; i < x.length ;i++){
      var mem = x[i][0];
      for (var j = 0; j < arr[i].length; j++) {
        if (x[i][j] = mem) {
          mem = x[i][j];
      console.log(false)
        }
      }
    console.log(true)
  }
  }
  //bai5
  