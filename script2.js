// const filter = document.querySelectorAll(".price");

// document.querySelector("nav").addEventListener("click", (event) => {
//   if (event.target.tagName !== "P") return false;

//   let filterClass = event.target.dataset["f"];

//   filter.forEach((elem) => {
//     if (!elem.classList.contains(filterClass)) {
//       elem.classList.add("hide");
//     }
//   });
// });

function app() {
  const buttons = document.querySelectorAll(".ticket");
  const cards = document.querySelectorAll(".price");

  const cardsArr = [];
  cards.forEach(function (item) {
    cardsArr.push(item.innerHTML);
  });

  const cardsNumber = cardsArr.map(function (item) {
    return parseInt(item, 10);
  });

  // const newCards = cardsNumber.filter(function (e) {
  //   const filterCheap = e.Math.min.apply(Math, cardsNumber);
  //   if (item != filterCheap) {
  //     item.classList.add(".hide");
  //   }
  //   return filterCheap;
  // });
  // console.log(newCards);

  // function filter(cardsNumber, item) {
  //   console.log(cardsNumber);
  //   const filterCheap = Math.min.apply(Math, cardsNumber);
  //   if (item != filterCheap) {
  //     for (var i = 0; i < cardsNumber.length; i++) {
  //       cardsNumber[i].classList.add("someClass");
  //       console.log(cardsNumber[i].classList);
  //     }
  //   }
  // }

  function filter() {
    let result = cardsNumber.filter(function (item) {
      const filterCheap = Math.min.apply(Math, cardsNumber);
      if (item === filterCheap) {
        return true;
      } else {
        console.log(cards)
        console.log(item)
        cards[item].style.display = "none";
      }
    });
    console.log(result);
  }

  buttons.forEach((button) => {
    button.addEventListener("click", filter);
  });
}

app();
