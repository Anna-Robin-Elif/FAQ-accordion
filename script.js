

const buttons = document.getElementsByClassName("container__button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    // Das nächste Element (FAQ-Text) holen
    const answer = this.parentElement.nextElementSibling;
    const icon = this.querySelector('.icon');

    // Toggle Sichtbarkeit
    if (answer.classList.contains("container__p--hidden")) {
      answer.classList.remove("container__p--hidden");
      answer.classList.add("container__p--active")
      icon.src = 'images/icon-minus.svg';
    } else {
      answer.classList.add("container__p--hidden");
      icon.src = 'images/icon-plus.svg';
    }
  });
}
