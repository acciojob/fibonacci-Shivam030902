function fibonacci(num) {
// your code here
	let fib1 = 0, fib2 = 1;
	if(num == 1)
	{
		return fib1;
	}
	else if(num == 2)
	{
		return fib2;
	}
	let ans = 0;
  for(let i=3;i<=num;i++)
  {
    ans = fib1 + fib2;
    fib1 = fib2;
    fib2 = ans;
  }
  return ans;
}

module.exports = fibonacci;
