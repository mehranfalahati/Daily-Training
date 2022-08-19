function numberSum(N) {
    var total = 0;
      for(var i = 1; i <= N; i++){
        if (!(i % 5 === 0 || i % 7 === 0))
        total += i;
      }
      return total;
}

console.log(numberSum(8))