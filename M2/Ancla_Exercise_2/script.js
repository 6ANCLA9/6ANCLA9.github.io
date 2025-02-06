

// JSON string
const jsonString = '{"name": "Kent", "age": 19, "hobbies": ["Guitar", "Gym", "High Risk Investing"]}';

const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name);
console.log(jsonObject.age); 
console.log(jsonObject.hobbies);

const newJsonString = JSON.stringify(jsonObject);
console.log(newJsonString); 
