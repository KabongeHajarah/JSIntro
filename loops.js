const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];
let newArray=[];
for (i=0; i<countries.length; i++){

newArray.push(countries[i].toUpperCase());


}
console.log(newArray);

const numbers=[10,20,30,40,60];
let sum=0;
let totalsArray=[];
for (i=0; i<numbers.length; i++){
sum += numbers[i];
console.log(sum);

}
console.log(sum);
let total=0
for (i=0; i<numbers.length; i++){

totalsArray.push(total +=numbers[i]);
}
console.log(totalsArray);

//while loop
let num=0;
while ( num<=8) {
    console.log(num);
    num++

}
let nums = 0
while (nums <= 5) {
  console.log(nums)
  nums++
}

//do while
let m=0;
do {
    console.log(m *2);
    m++
}
while (m<=10)


// for of 
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  for (const tech of webTechs) {
    console.log(tech.toUpperCase())
  }

  const countrys = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node'];


// //   Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let i = 0; i <=10; i++) {
    console.log(i);
    
}
let n=0;
while (n<=10) {
   console.log(n);
   n++ 
}
let s=0
do {
    console.log(s);
    s++
} while (s<=10);
// Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let i = 10; i >=0; i--) {
    console.log(i);
    
}
let p=0;
while (p>=10) {
   console.log(p);
   p--
}
let k=0
do {
    console.log(k);
    k--
} while (k>=10);


// Iterate 0 to n using for loop
for (let index = 0; index <=n; index++) {
    console.log(index);
    
}

// Write a loop that makes the following pattern using console.log():

//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######

for (let row = 1; row <= 7; row++) {
    let pattern = '';
    for (let col = 1; col <= row; col++) {
      pattern += '#';
    }
    console.log(pattern);
  }
  
// Use loop to print the following pattern:

// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100
for (let i=0; i<=10; i++){
        console.log( (i +"x" +i +"=")  + (i * i) );
}

// Using loop print the following pattern

//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000
console.log('i\ti^2\ti^3');
for (let i = 0; i <= 10; i++) {
  let square = i * i;
  let cube = i * i * i;
  console.log(i + '\t' + square + '\t' + cube);
}

// Use for loop to iterate from 0 to 100 and print only even numbers
for (let i=0; i<=100; i++){

    if (i%2===0) {
        console.log(i);

    }
}

// Use for loop to iterate from 0 to 100 and print only odd numbers
for (let i=0; i<=100; i++){
    if (i%2==!0) {
        console.log(i);

    }
}
// Use for loop to iterate from 0 to 100 and print only prime numbers
for (let i=0; i<=100; i++){
    if (i%2==!0) {
        console.log(i);

    }
}
// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sums=0;
for (let i=0; i<=100; i++){
    sums+=i;

}
console.log(sums);

// The sum of all numbers from 0 to 100 is 5050.
// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let newsum=0;

for (let i=0; i<=100; i++){
if(i%2===0){
    newsum+=i;

}

}
console.log(newsum);

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
// The sum of all evens from 0 to 100 is 2550. 
// And the sum of all odds from 0 to 100 is 2500.
let oddSum=0;

for (let i=0; i<=100; i++){
if(i%2==!0){
    oddSum+=i;

}

}
console.log(oddSum);

// Develop a small script which generate array of 5 random numbers
function generateRandomArray(length) {
    let randomArray = [];
    for (let i = 0; i < length; i++) {
      let randomNumber = Math.floor(Math.random() * 100); // Generates a random number between 0 and 99
      randomArray.push(randomNumber);
    }
    return randomArray;
  }
  
  let randomNumbers = generateRandomArray(5);
  console.log(randomNumbers);
  

// Develop a small script which generate array of 5 random numbers and the numbers must be unique
function generateRandomArray(length) {
    let randomArray = [];
    while (randomArray.length < length) {
      let randomNumber = Math.floor(Math.random() * 100); // Generates a random number between 0 and 99
      if (!randomArray.includes(randomNumber)) {
        randomArray.push(randomNumber);
      }
    }
    return randomArray;
  }
  
  let randomNumbers2 = generateRandomArray(5);
  console.log(randomNumbers2);
  
// Develop a small script which generate a six characters random id:
// 5j2khz
function generateRandomId() {
    let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < 6; i++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      let randomCharacter = characters.charAt(randomIndex);
      id += randomCharacter;
    }
    return id;
  }
  
  let randomId = generateRandomId();
  console.log(randomId);
  