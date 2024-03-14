let i, level, a = 0, b = 1, c = 0

level = prompt("Enter any Number");
document.write(a + "<br>");
document.write(b + "");
console.log(a);
console.log(b);

for (i = 1; i <= level; i++) 
{
    c = a + b;
    document.write("<br>" + c);
    console.log(+c)
    a = b;
    b = c;


}