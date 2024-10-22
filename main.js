
let addLsData = ()=>{
    let inputData = document.querySelector('#input-data');
    let addList = document.querySelector('#add-list');
    addList.addEventListener('click',(e)=>{
        let ls = JSON.parse(localStorage.getItem('todo_list')) ?? [];         
        ls.push(inputData.value);
        
        localStorage.setItem('todo_list',JSON.stringify(ls));
        showData();
        inputData.value = '';
    })
}
addLsData();

let showData = ()=>{
    let ul = document.querySelector('.ul');
    let ls = JSON.parse(localStorage.getItem('todo_list')) ?? []; 
    let fData = '';
    ls.forEach((v,i)=>{
        fData+=`<li>
                    <span>${v}</span>
                    <i onClick='delData(${i})' class="fa-regular fa-trash-can"></i>
                </li>`;
    })
    ul.innerHTML = fData;
}
showData();

let delData = (p)=>{
    let ls = JSON.parse(localStorage.getItem('todo_list')) ?? [];
    ls.splice(p,1);
    localStorage.setItem('todo_list',JSON.stringify(ls));
    showData();
}


