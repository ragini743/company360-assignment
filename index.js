const radio = document.querySelector(".radio-btn");

const container = document.querySelector(".container");

var lastIndex = 0;

const slider = (position) => {
  console.log((position - lastIndex) * 600);
  if (position > lastIndex) {
    console.log("right");
    container.scrollBy({
      left: (position - lastIndex) * 600,
      behavior: "smooth",
    });
  } else {
    console.log("left");
    container.scrollBy({
      left: -(lastIndex - position) * 600,
      behavior: "smooth",
    });
  }
  lastIndex = position;
};
