
// let text =
// 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
//  console.log(words)
// console.log(words.length)
// ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

// Remove punctuation and convert the text to lowercase
let cleanedText = text.replace(/[.,]/g, '').toLowerCase();

// Split the text into an array of words
let words = cleanedText.split(' ');

console.log(words);
console.log(words.length);




// In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// add 'Meat' in the beginning of your shopping cart if it has not been already added

if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
  }
// add Sugar at the end of you shopping cart if it has not been already added


if (!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar');
}


// // remove 'Honey' if you are allergic to honey
if (shoppingCart.includes('Honey')) {
    shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
  }
  
  console.log(shoppingCart);

// modify Tea to 'Green Tea'
shoppingCart.splice(shoppingCart.indexOf("Tea"), 1, "Green Tea");
console.log(shoppingCart);


// In countries array check if 'Ethiopia' exists in the array
const countries = [
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
  ];
//  if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if (countries.includes('Ethiopia')) {
    console.log('Ethiopia'.toUpperCase());
}
if (!countries.includes('Ethiopia')) {
    countries.push('Ethiopia')
    console.log(countries);
    
}


// Concatenate the following two variables and store it in a fullStack variable.
 const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
const fullStack= frontEnd + backEnd;
console.log(fullStack);

// console.log(fullStack)
// ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]






// The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
let sortedArray= ages.sort()
console.log(sortedArray);
console.log(sortedArray[0]);
console.log(sortedArray[sortedArray.length -1]);

// Find the median age(one middle item or two middle items divided

// Calculate the middle index
const middleI = Math.floor(sortedArray.length / 2);

// Check if the array has an odd or even length
if (sortedArray.length % 2 === 0) {
  // If the length is even, there are two middle items
  const middleItem1 = sortedArray[middleI - 1];
  const middleItem2 = sortedArray[middleI];
  const median = (middleItem1 + middleItem2) / 2;
  console.log(median);
} else {
  // If the length is odd, there is a single middle item
  const median = sortedArray[middleI];
  console.log(median);
}

// Find the average age(all items divided by number of items)

let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}
const average = sum / ages.length;
console.log(average);
// Find the range of the ages(max minus min)
const range = sortedArray[sortedArray.length - 1] - sortedArray[0];
console.log(range);
// Compare the value of (min - average) and (max - average), use abs() method
const min = sortedArray[0];
const max = sortedArray[sortedArray.length - 1];
const average1 = sum / ages.length;

const diffMinAverage = Math.abs(min - average1);
const diffMaxAverage = Math.abs(max - average1);

console.log(diffMinAverage);
console.log(diffMaxAverage);
//  1.Slice the first ten countries from the countries array

const slicedCountries = countries.slice(0, 10);
console.log(slicedCountries);

// Find the middle country(ies) in the countries array
const middleIndex = Math.floor(countries.length / 2);
const middleCountry = countries[middleIndex];
console.log(middleCountry);

// Divide the countries array into two equal arrays if it is even.
//  If countries array is not even , one more country for the first half.
const halfIndex = Math.ceil(countries.length / 2);
const firstHalf = countries.slice(0, halfIndex);
const secondHalf = countries.slice(halfIndex);
console.log(firstHalf);
console.log(secondHalf);
