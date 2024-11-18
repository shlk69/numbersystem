const numbers = [
    3, 7, 2, 15, 9, 20, 5, 14, 12, 1, 8, 11, 6, 19, 4, 10, 17, 13, 16, 18,
  ];

  let n = numbers.length;
  for(let i = 0;i<n;i++){
    if(n % i ==0){
        console.log("Even numbers")
    }
  }
  for(let i = 0;i<n;i++){
    if(n % i !=0){
        console.log("Odd numbers")
    }
  }