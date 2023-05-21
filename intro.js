// Declare an empty array;
const empty=[];
// Declare an array with more than 5 number of elements
const fruits=["apple","pear","mango","banana","peach"];
// Find the length of your array
console.log(fruits.length);
// Get the first item, the middle item and the last item of the array
console.log(fruits[0]);

const middle = fruits[Math.floor(fruits.length/2)];
console.log(middle);

let last=fruits.length -1
console.log(fruits[last]);


// Declare an array called mixedDataTypes, 
// put different data types in the array and find the length of the array. 
// The array size should be greater than 5
let  mixedDataTypes=[1,"hello",false,20.20,"hi",true];
console.log(mixedDataTypes.length);

// Declare an array variable name itCompanies
//  and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies=["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle","Amazon" ]

// Print the array using console.log()
console.log(itCompanies);
// Print the number of companies in the array
console.log(itCompanies.length);
// Print the first company, middle and last company
const firstCompany=itCompanies[0]
console.log({firstCompany});

const middleCompany = itCompanies[Math.floor(itCompanies.length/2)];
console.log({middleCompany});

let lastCompany=itCompanies[itCompanies.length -1]
console.log({lastCompany});
// Print out each company
itCompanies.forEach(company => {
   console.log(company); 
});
// Change each company name to uppercase one by one and print them out
for(let i=0; i<itCompanies.length;i++){
    let companyUppercase= itCompanies[i]
    console.log(companyUppercase.toUpperCase());
}
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

const sentence = itCompanies.join(", ") + " are big IT companies.";
console.log(sentence);

// Check if a certain company exists in the itCompanies array. 
// If it exist return the company else return a company is not found

    const company = 'Microsoft'
    if (itCompanies.includes(company)) {
        console.log("company exists");

    } else {
        return "a company is not found"
    }
    
// Filter out companies which have more than one 'o' without the filter method
const newArray = [];

itCompanies.forEach(company => {
  let count = 0;
  for (let i = 0; i < company.length; i++) {
    if (company[i].toLowerCase() === 'o') {
      count++;
    }
  }
  if (count > 1) {
    newArray.push(company);
  }
});

console.log(newArray);

// Sort the array using sort() method
console.log(itCompanies.sort());
// Reverse the array using reverse() method
console.log(itCompanies.reverse());

// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3));

// Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3));

// Slice out the middle IT company or companies from the array
const middleIndex = Math.floor(itCompanies.length / 2);
const middleCompanies = itCompanies.slice(middleIndex, middleIndex + (itCompanies.length % 2 === 0 ? 2 : 1));

console.log(middleCompanies);



// Remove the first IT company from the array
itCompanies.shift()
// Remove the middle IT company or companies from the array
const middleIndexs = Math.floor(itCompanies.length / 2);
itCompanies.splice(middleIndexs, itCompanies.length % 2 === 0 ? 2 : 1);


// Remove the last IT company from the array
itCompanies.pop();

// Remove all IT companies
itCompanies.length = 0;
