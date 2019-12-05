export const slideHorizontally = (
  element,
  direction,
  speed,
  distance,
  step
) => {
  console.log(direction, element);
  let scrollAmount = 0;
  var slideTimer = setInterval(function() {
    if (direction === "left") {
      element.scrollLeft -= step;
    } else {
      element.scrollLeft += step;
    }
    scrollAmount += step;
    if (scrollAmount >= distance) {
      window.clearInterval(slideTimer);
    }
  }, speed);
};
