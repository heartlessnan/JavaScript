/*
Question 1
Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
Given the array, implement a function to calculate the total value of the items.
*/

const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

// a new array which doubles the quantity and price in each object
const doubleEach = (itemsObject) => {
  return itemsObject.map((item) => {
    return { quantity: item.quantity * 2, price: item.price * 2 };
  });
};
console.log("Question1.1");
console.log(doubleEach(itemsObject));

// a new array which contains item quantity > 2 and price > 300 only
const check = (itemsObject) => {
  return itemsObject.filter((item) => {
    return item.quantity > 2 && item.price > 300;
  });
};
console.log("Question1.2");
console.log(check(itemsObject));

// calculate the total value of the items
const sum = (itemsObject) => {
  return itemsObject.reduce((accumulator, element) => {
    return accumulator + element.quantity * element.price;
  }, 0);
};
console.log("Question1.3");
console.log(sum(itemsObject));

/*
Question 2
Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.
*/

const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";

const expectedReturnString =
  "perhaps the easiest to understand case for reduce is to return the sum of all the elements in an array";

const remove = (string) => {
  return string
    .replace(/\s+/g, " ")
    .replace(/[^a-z0-9A-Z ]/g, " ")
    .trim()
    .toLocaleLowerCase();
};
console.log("Question2");
console.log(remove(string));
console.log(remove(string) == expectedReturnString);

/*
Question 3
Implement a function to merge two arrays of objects on uuid, but first has uuid and name, second has uuid and role. With the not existing property, fill with null. Sort according to uuid after merge.
*/

const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];

const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

const expectedReturnArray = [
  { uuid: 1, role: "manager", name: null },
  { uuid: 2, role: "associate", name: "test" },
  { uuid: 3, role: null, name: "test3" },
  { uuid: 4, role: "engineer", name: null },
  { uuid: 5, role: null, name: "test5" },
  { uuid: 6, role: "pm", name: null },
];

const merged = (first = [], second = []) => {
  const merged_dict = {};
  let result = [];
  const arr = [...second, ...first];
  arr.forEach((ele) => {
    if (merged_dict[ele.uuid]) {
      merged_dict[ele.uuid] = { ...merged_dict[ele.uuid], ...ele };
    } else {
      merged_dict[ele.uuid] = ele;
    }
  });
  for (let ele in merged_dict) {
    if ("role" in merged_dict[ele] === false) {
      merged_dict[ele].role = null;
    }
    if ("name" in merged_dict[ele] === false) {
      merged_dict[ele].name = null;
    }
    merged_dict[ele] = {
      uuid: merged_dict[ele].uuid,
      role: merged_dict[ele].role,
      name: merged_dict[ele].name,
    };
    result.push(merged_dict[ele]);
  }
  return result;
};
console.log("Question3");
console.log(merged(first, second));
