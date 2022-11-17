const button = document.getElementById("button");
const input = document.getElementById("input");
const comp_div = document.getElementById("complete");
const incomp_div = document.getElementById("incomplete");

button.addEventListener("click", () => {
    const div = document.createElement("div");
    const ul = document.createElement("ul");
    div.classList.add("flex");
    const li = document.createElement("li");
    li.classList.add("style");
    li.innerText = input.value;
    input.value = "";
    
    const doneButton = document.createElement("button");
    const delButton = document.createElement("button");
    
    doneButton.classList.add("style");
    delButton.classList.add("style");
    
    doneButton.innerText = "完了";
    delButton.innerText = "削除";

    li.appendChild(doneButton);
    li.appendChild(delButton);
    ul.appendChild(li);
    div.appendChild(ul);
    incomp_div.appendChild(div);

    doneButton.addEventListener("click", () => {
        doneButton.remove();
        comp_div.appendChild(div)
    })

    delButton.addEventListener("click", () => {
        div.remove();
    })
});