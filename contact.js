"use strict";

const contactList = [
  "Email richardson123@yahoo.com",
  "Phone 1-(888)-937-6259",
  "Address 123 Apple St.",
  "City Atlanta",
  "State Georgia",
]

const ul = document.getElementById("contactList");
ul.innerHTML = "";

for (let i = 0; i < contactList.length; i++) {
  const li = document.createElement("li");
  li.textContent = contactList[i];
  ul.appendChild(li);
}

const btnTwo = document.getElementById("done-btn");
btnTwo.addEventListener("click", function () {
  alert("Thanks for your response, I will contact you when I get a chance");
});
