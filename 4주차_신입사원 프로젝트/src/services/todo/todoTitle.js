const todoTitleDate = document.getElementsByClassName("todo_title__date")[0];

const setTitleDate = () => {
  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate();

  todoTitleDate.textContent = `${year}/${month}/${date}`;
};

setTitleDate();
