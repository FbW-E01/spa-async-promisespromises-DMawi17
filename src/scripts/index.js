// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
// Import any additional modules you want to include below \/

// \/ All of your javascript should go here \/

const myModal = document.querySelector(".modal");

const promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(), 60000);
});

promise.then(() => {
  myModal.style.display = "block";
});

// ...

const kill = document.querySelector(".close");

kill.addEventListener("click", () => {
    myModal.style.display = "none";
});
