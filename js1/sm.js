{
const num = 12345;
let temp = num;
let sum = 0;

for (let i =0; i<5; i++)
{
    let digit = temp%10;
    sum +=digit;
    temp= Math.floor(temp/10);
}

console.log("sum is" + sum);
}


{
const num = 5;

for (let i =1 ; i<=num;i++)
{
    let row="";
    for(let j =1; j<=i;j++){
        row+="*";

    }
    console.log(row);
}

}
{

const num1=1;
const num2=2;
const num3=3;
const num4=4;
const num5=6;

let max =num1;
if (max<num2){
    max = num2;
}
if (max<num3){
    max = num3;
}
if (max<num4){
    max = num4;
}
if (max<num5){
    max = num5;
}

console.log(max);

}
{
const num =12343;
let test  =1;
let digit=0;
while (num>=test)
{
digit++;
test*=10
}
console.log(digit);
}

{
const start=263;
const end =678;
let realstart=start;;
if(start%2 !=0)
{
realstart++;
}
for (let i=realstart; i<=end; i+=2)
{
    console.log(i);
}



}



{
const num = 1234;
let temp=num;
let end=0;
let multi =1000;
for(let i=0;i<4; i++)
{
end+= temp%10*multi;
multi=multi/10;
temp =Math.floor(temp/10);
}
console.log(end);
}

{


for (let i =1 ; i<=5;i++)
{
    let row="";
    for(let j =1; j<=i;j++){
        row+=i;

    }
    console.log(row);
}

}

{
    const num = 124;
let temp=num;
let end=0;
let multi =100;
for(let i=0;i<3; i++)
{
end+= temp%10*multi;
multi=multi/10;
temp =Math.floor(temp/10);
}
if (num!= end)
{
    console.log("Not a Palindrome");
}else
{
    console.log("Palindrome");
}


}


{
    const num =5;
    for (let i =1;i<=10;i++)
    {
        console.log(num+"X"+i+"="+num*i );
           
    }

}


{
    let num= 7834;
    while (num!=1)
    {
        if(num%2==0)
        {
            
            num=num/2;
            console.log(num);
        }
        else {
             num=num*3+1;
            console.log(num);
        }
    }
}