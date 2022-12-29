const adviceId = document.querySelector("#js-advice-number");
const adviceText = document.querySelector("#js-advice-text");
const button = document.querySelector("#button");
const url = "https://api.adviceslip.com/advice";

const adviceGenerator = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const number = data.slip.id;
  const text = data.slip.advice;

  adviceId.innerText = `Advice #${number}`;
  adviceText.innerText = `"${text}"`;
};

adviceGenerator();

button.addEventListener("click", adviceGenerator);
