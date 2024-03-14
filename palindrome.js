let n, r, sum = 0, temp = 0;

n = parseInt(prompt("Enter the Number"));
temp = n;
while (n > 0) 
{
    r = parseInt(n % 10);
    sum=(sum * 10) + r;
    n = parseInt(n / 10);
}
if(temp==sum)
{
    document.write(" The Number is Palindrome");
    console.log(" The Number is Palindrome");
}
else
{
    document.write(" The Number is Not Palindrome");
    console.log(" The Number is Not Palindromes");
}