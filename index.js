const dataContainer = document.querySelector("#data-container");

function toggleLoader() {
  const loader = document.querySelector("#loader");
  const isHidden = loader.hasAttribute("hidden");
  isHidden
    ? loader.removeAttribute("hidden")
    : loader.setAttribute("hidden", ""),
    "";
}

toggleLoader();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Ошибочка вышла :)");
    }
    return response.json();
  })
  .then((users) => {
    users.forEach((user) => {
      dataContainer.append(createNameOfUsersElement(user.name));
    });
  })
  .catch((error) => {
    console.log("error", error);
  })
  .finally(() => {
    toggleLoader();
  });

function createNameOfUsersElement(text) {
  const userItem = document.createElement("li");
  const userItemAnchor = document.createElement("a");
  userItemAnchor.href = "#";
  userItemAnchor.textContent = text;
  userItem.append(userItemAnchor);
  return userItem;
}
