let addBtn = document.querySelector("#addBtn");
let list = document.querySelector("#list");
let input = document.querySelector("#taskInput");

addBtn.addEventListener("click", () => {
  let li = document.createElement("li");
  li.className = "item";
  li.textContent = input.value;
  list.appendChild(li);

  let btns = document.createElement("div");
  btns.className = "item__btns";
  li.appendChild(btns);

  let i = document.createElement("i");
  i.className = "fa-regular fa-square-check";
  btns.appendChild(i);
  let tr = document.createElement("i");
  tr.className = "fa-solid fa-trash-can";
  btns.appendChild(tr);
  
i.addEventListener('click', ()=> {
    li.classList.toggle('done');
});
tr.addEventListener('click', ()=> {
    list.removeChild(li);
})
});
