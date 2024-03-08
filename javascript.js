add =document.getElementById("add");
function update(){
    console.log("updating List...");
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if (localStorage.getItem('itemJson')==null){
        itemJsonArray = [];
        itemJsonArray.push([tit,desc]);
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
    }
    else{
        itemJsonArrayStr =localStorage.getItem('itemJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit,desc]);
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
    }

    //Populate the table
    
    let tableBody = document.getElementById('tablebody');
    let str ="";
    itemJsonArray.forEach((element ,index )=> {
        str += `
        <tr>
        <th scope="row">${index+1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn btn-primary">Delete</button></td>
        </tr> `;
    });
        tableBody.innerHTML= str;
}
add.addEventListener("click", update);
update();

//delete function

function deleted(itemindex){
    console.log("Delete", itemindex);
    itemJsonArrayStr =localStorage.getItem('itemJson');
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    
    //Delete itemindex element form the array 

    itemJsonArray.splice(itemindex ,1);
    localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
}
