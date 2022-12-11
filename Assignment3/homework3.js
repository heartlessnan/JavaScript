/*
Question 1
Given the following array and implement the table dynamically
*/

const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};
const createElementHelper = (type, textContent, className) => {
  const newElement = document.createElement(type);
  newElement.textContent = textContent;
  newElement.className = className;
  return newElement;
};

const Q1Head = createElementHelper("h1", "Question 1", "head-1");
document.body.appendChild(Q1Head);

const table = createElementHelper("table", "", "mytable");
const tablehead = createElementHelper("thead", "", "tablebody");
const tableHeadItems = tableInfo.tableHeader.map((item) => {
  return createElementHelper("th", item, "head-item");
});
tablehead.append(...tableHeadItems);

const tableBody = createElementHelper("tbody", "", "tablebody");
for (let i = 0; i < 4; i++) {
  const tr = createElementHelper("tr", "", "tablerow");
  const name = createElementHelper(
    "td",
    tableInfo.tableContent[i]["Student Name"],
    "name"
  );
  const age = createElementHelper("td", tableInfo.tableContent[i].Age, "age");
  const phone = createElementHelper(
    "td",
    tableInfo.tableContent[i].Phone,
    "phone"
  );
  const address = createElementHelper(
    "td",
    tableInfo.tableContent[i].Address,
    "address"
  );
  tr.append(name, age, phone, address);
  tableBody.append(tr);
}
table.append(tablehead, tableBody);
document.body.appendChild(table);

/*
Question 2
Given the array and generate order list and unordered list dynamically as following:
*/

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

const Q2Head = createElementHelper("h1", "Question 2", "head-2");
document.body.appendChild(Q2Head);

const orderList = createElementHelper("ol", "", "orderList");
const unorderList = createElementHelper("ul", "", "unorderList");
const listItems = list.map((item) => {
  return createElementHelper("li", item, "list-item");
});
const listItems2 = list.map((item) => {
  return createElementHelper("li", item, "list-item");
});
orderList.append(...listItems);
unorderList.append(...listItems2);
document.body.append(orderList, unorderList);
// document.body.append(orderList, unorderList);

/*
Question 3
Given a array and implement a dropdown list with the following options dynamically 
FYI: use 'value' in the object as the value attribute in the option tag when you create the dropdown list
*/

const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

const Q3Head = createElementHelper("h1", "Question 3", "head-3");
document.body.appendChild(Q3Head);

const createElementHelper2 = (type, textContent, className, value) => {
  const newElement = document.createElement(type);
  newElement.textContent = textContent;
  newElement.className = className;
  newElement.value = value;
  return newElement;
};

const dropDown = createElementHelper("select", "", "cities");
const dropDownItems = dropDownList.map((item) => {
  return createElementHelper2(
    "option",
    item.content,
    "dropDown-item",
    item.value
  );
});
dropDown.append(...dropDownItems);
document.body.appendChild(dropDown);
