// Task 1

/*
დაწერე ფუნქცია, რომელიც პარამეტრად
მიიღებს n ცალ რიცხვს (n > 2). ფუნქციამ
უნდა დააბრუნოს 2 - ელემენტიანი მასივი,
სადაც პირველი ელემენტია პირველი და
მეორე პარამეტრის ჯამი, ხოლო მეორე
ელემენტი - მესამე ელემენტიდან
დაწყებული ყველა დანარჩენის ნამრავლი
*/

function calculateNumbers(...numbers) {
    if (numbers.length <= 2) {
      return 'Provide more than 2 numbers';
    }
    
    const totalOfFirstTwo = numbers[0] + numbers[1];

    const restOfProduct = numbers.slice(2).reduce((productSoFar, nextNumber) => productSoFar * nextNumber, 1);
      
    return [totalOfFirstTwo, restOfProduct];
  }
  
  const finalResult = calculateNumbers(5, 2, 6, 3, 2);
  console.log("Result:", finalResult);
  

// Task 2

/*
დავუშვათ გვინდა ობიექტიდან წავიკითხოთ
შემდეგი ველი: user.banks[2].address.city.
დაწერე ფუნქცია, რომელიც პარამეტრად
მიიღებს user ობიექტს და დააბრუნებს cityს. გამოიყენე destructuring-ი. თუ ასეთი
ველი არ არსებობს უნდა დაბრუნდეს 
undefined
*/

const user = {
    banks: [
       {test:"testX"},
       {test1:"testY"},
       {test2:"testZ"},
    {
        address: {
            city: "Tbilisi"
        }
    }
]
};

function requestCityFromUsr(user){
    const { banks } = user;

    if (banks && banks[3] && banks[3].address) {
        const { city } = banks[3].address;
        return city;
    }else{
         return undefined;
    }
       
}
console.log(requestCityFromUsr(user));


// Task 3

/*
დაწერე ფუნქცია, რომელიც პარამეტრად
მიიღებს ნებისმიერ ობიექტს და
დააბრუნებს იგივე მნიშვნელობების მქონე
ახალ (განსხვავებულ) ობიექტს
გაითვალისწინე, რომ თუ ობიექტში კიდევ
სხვა ობიექტებია იმათი ასლებიც უნდა
შეიქმნას
გამოიყენეთ (...) ოპერატორი
*/

const initialObject = {
    name: "testName",
    lastName: "testLastName",
    age: 21,
    job: {
        industry: "IT",
        position: "software engineer"
    } ,
    education: {
        university: "MIT",
        faculty: "computer science"
    },
    skills: ["javascript","mongodb","node.js","react","typescript","AWS","next.js"]
};

function spreadObject(obj){
    const cloneObject = {
        ...obj,
        job: {...obj.job},
        education: {...obj.education},
        skills: {...obj.skills}
    };
    return cloneObject;
};

console.log(spreadObject(initialObject));
