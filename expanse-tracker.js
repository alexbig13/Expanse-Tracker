//all the variables needed to start
let name = document.getElementById('name');
let day = document.getElementById('day');
let month = document.getElementById('month');
let year = document.getElementById('year');
let amount = document.getElementById('amount');
let submit = document.getElementById('submit');
let arrHeader = ['name of the expanse', 'date of the expanse', 'amount of the expanse', 'delete'];
//creates a table and setting all of the variables and styles with it
let createTable = () => {
  let table = document.createElement('table');
  table.setAttribute('id', 'expanseTable');
  table.setAttribute('class', 'mx-auto table');
  let tr = table.insertRow(-1); //inserts to the last row
  //all the headers of the table and creates the first col and appending them
  for (let title of arrHeader) {
    let th = document.createElement('th');
    th.innerHTML = title;
    tr.appendChild(th);
  }
  let tableDiv = document.getElementById('tableExpanse');
  tableDiv.appendChild(table);
}
//when the user clicks on the btn to add this function adds the input of the user
let addRow = () => {
  let expanseTab = document.getElementById('expanseTable');
  let rowCnt = expanseTab.rows.length; // counts the number of rows  
  let tr = expanseTab.insertRow(rowCnt); //added a new row to the table
  tr = expanseTab.insertRow(rowCnt);
  //adds the input of the user to the right section
  for (let field of arrHeader) {
    let td = document.createElement('td');
    td = tr.insertCell(field);
    if (field == 'name of the expanse') {
      let btn = document.createElement('input');
      btn.setAttribute('type', 'button');
      btn.setAttribute('value', 'remove');
      btn.setAttribute('class', 'btn btn-danger');
      btn.setAttribute('onclick', 'removeRow(this)');//the this is so the function below know which td to delete
      td.appendChild(btn);
    } else if (field == 'delete') {
      td.innerHTML = name.value;
    } else if (field == 'amount of the expanse') {
      td.innerHTML = ` ${day.value} / ${month.value} / ${year.value}`;
    } else {
      td.innerHTML = `${amount.value} ₪`;
    }
  }
}
//removes the expanse that the user inserted
let removeRow = (btn) => {
  let expanseTab = document.getElementById('expanseTable');
  expanseTab.deleteRow(btn.parentNode.parentNode.rowIndex);//deletes by the parents and by the index of the row
}



