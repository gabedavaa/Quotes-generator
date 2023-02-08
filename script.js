"use strict";

//////////////////
const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const apiKey = "F5kVK7HB92acD0Y/ND6Hhg==AAyUjkldHbWt7HfR";

const options = {
  method: "GET",
  headers: { "X-Api-Key": apiKey },
};

const apiURL = "https://api.api-ninjas.com/v1/quotes?category=success";

async function getQoute() {
  try {
    quoteEl.innerText = "Updating....";
    authorEl.innerText = "";
    btnEl.disabled = true;
    btnEl.innerText = "Loading....";
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "GIVE ME A MOTIVATION";

    quoteEl.innerText = `${data[0].quote}`;
    authorEl.innerText = `'${data[0].author}'`;
  } catch (error) {
    quoteEl.innerText = "An error happend, try again";
    btnEl.disabled = false;
    btnEl.innerText = "GIVE ME A MOTIVATION";
  }
}

btnEl.addEventListener("click", getQoute);
