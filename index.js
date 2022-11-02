const input = document.querySelector("input");
const btn = document.querySelector("button");
const message = document.querySelector("message");
const ballMessage = document.querySelector(".message-container");

const predictions = [
  "You will succeed!",
  "Things will go your way",
  "Highly doubtful",
  "theres always a chance",
  "Not in this lifetime",
  "Of course",
  "Probably not",
  "Most definetly",
  "Don't give up hope!",
  "you cant be for real?",
];

btn.addEventListener("click", (event) => {
  event.preventDefault();

  const newMessage = () => {
    const question = input.value;
    input.value = "";

    const response =
      predictions[Math.floor(Math.random(predictions) * predictions.length)];

    if (question) {
      return (ballMessage.textContent = response);
    } else {
      return alert("must ask a question to see your future!");
    }
  };
  newMessage();
});
