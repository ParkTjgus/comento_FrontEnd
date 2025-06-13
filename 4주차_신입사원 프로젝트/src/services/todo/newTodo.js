const todoViewerList = document.getElementsByClassName("todo_viewer__list")[0];
const newTodoButton = document.getElementsByClassName("new_todo__button")[0];
const newTodoInput = document.getElementsByName("new_todo__input")[0];

const addTodo = () => {
  const text = newTodoInput.value.trim();

  if (text === "") {
    alert("입력된 내용이 없습니다");
    return;
  }

  const li = document.createElement("li");
  li.className = "todo_viewer__list_item";

  li.innerHTML = `
    <div>
      <button class="todo_viewer__list_item__check_btn"><i class="fa-regular fa-circle fa-lg"></i></button>
      <span class="todo_viewer__list_item__text">${text}</span>
    </div>
    <button class="todo_viewer__list_item__delete_btn"><i class="fa-solid fa-trash-can fa-lg"></i></button>
      `;

  todoViewerList.appendChild(li);
  newTodoInput.value = "";
};

const deleteTodo = (e) => {
  const target = e.target;
  const deleteButton = target.closest(".todo_viewer__list_item__delete_btn");

  if (deleteButton) {
    const li = deleteButton.closest("li");
    if (li) {
      li.remove();
    }
  }
};

const completeTodo = (e) => {
  const target = e.target;
  const checkButton = target.closest(".todo_viewer__list_item__check_btn");

  if (checkButton) {
    const li = checkButton.closest("li");
    const icon = checkButton.getElementsByTagName("i")[0];

    if (li.classList.contains("done")) {
      li.classList.remove("done");
      icon.className = "fa-regular fa-circle fa-lg";
    } else {
      li.classList.add("done");
      icon.className = "fa-solid fa-circle-check fa-lg";
    }
  }
};

newTodoButton.addEventListener("click", addTodo);
todoViewerList.addEventListener("click", deleteTodo);
todoViewerList.addEventListener("click", completeTodo);
