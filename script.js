"use strict";

const contactList = [
  "Email richardson123@yahoo.com",
  "Phone 1-(888)-937-6259",
  "Address 123 Apple St.",
  "City Atlanta",
  "State Georgia",
];

const ul = document.getElementById("contactList");
ul.innerHTML = "";

for (let i = 0; i < contactList.length; i++) {
  const ul = document.getElementById("contactList");
  ul.innerHTML += "<li>New List Item</li>";
  li.textContent = contactList[i];
  ul.innerHTML(li);
}

const buttonOne = document.getElementById("my-btn");
buttonOne.addEventListener("click", function () {
  alert("Thanks for visiting, let me know what you think.");
});
