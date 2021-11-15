//фильтрация по чекбоксам
var itemsToFilter = [];

//HTMLCollections, not arrays
let checkboxes = document.getElementsByClassName("custom-checkbox");
let checkboxesNum = checkboxes.length;
let tickets = document.getElementsByClassName("ticket-card");
var arr = [].slice.call(tickets); //перевожу HTMLCollections в массив

function filter(e) {
  e.preventDefault();
  let selectedTransfer = Object.values(checkboxes).filter(
    (item) => item.checked === true
  );

  if (selectedTransfer.length === 0) {
    arr.forEach((ticket) => {
      ticket.style.display("block");
    });
  } else {
    arr.forEach((ticket) => {
      let hasAllTransfers = true;
      selectedTransfer.forEach((item) => {
        let valueInput = item.getAttribute("value");
        if (ticket.getAttribute("id") === valueInput) {
          hasAllTransfers = false;
        }
      });
      var arrTickets = [].slice.call(
        ticket.getElementsByClassName("ticket-card")
      );

      if (hasAllTransfers) {
        ticket.classList.add("hide");
      } else if (
        ticket.getElementsByClassName("ticket-card") === "ticket-card"
      ) {
        console.log("iijijjki");
        ticket.classList.remove("hide");
      } else {
        ticket.classList.remove("hide");
      }
    });
  }
}

for (let i = 0; i < checkboxesNum; i++) {
  checkboxes[i].addEventListener("click", filter);
}

// function filter() {
//
//   let selectedTransfer = checkboxes.filter((item) => item.checked === true);

//   if (selectedTransfer.length === 0) {
//     tickets.forEach((ticket) => {
//       ticket.classList.add("show");
//     });
//   } else {
//     tickets.forEach((ticket) => {
//       let hasAllTransfers = true;
//       selectedTransfer.forEach((item) => {
//         if (!ticket.classList.includes(item.getAttribute("id"))) {
//           hasAllTransfers = false;
//         }
//       });

//       if (hasAllTransfers) {
//         ticket.classList.add("show");
//       } else {
//         ticket.classList.remove("show");
//       }
//     });
//   }
// }

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

  const cardsArr = []; // перевожу массив тегов в массив строк
  cards.forEach(function (item) {
    cardsArr.push(item.innerHTML);
  });

  const cardsNumber = cardsArr.map(function (item) {
    return parseInt(item, 10); // перевожу массив строк в массив
  });

  // function filter() {
  //   let result = cardsNumber.filter(function (item) {
  //     const filterCheap = Math.min.apply(Math, cardsNumber);
  //     if (item === filterCheap) {
  //       return true;
  //     } else {
  //       false;
  //       console.log(cards);
  //       console.log(item);
  //       cards[item].classList.add("hide");
  //       console.log(cards[item]);
  //       // cards[item].style.display = "none";
  //       // const deleted = document.querySelector(".ticket-card");
  //       // deleted.style.display = "none";
  //     }
  //   });
  //   console.log(result);
  // }

  // if (item != filterCheap) {
  //       for (let i = 0; i < cardsNumber.length; i++) {
  //         cardsNumber[i].classList.add("someClass");
  //         console.log(cardsNumber[i].classList);
  //       }
  // }

  function filter() {
    let result = cardsNumber.filter(function (item) {
      const filterCheap = Math.min.apply(Math, cardsNumber);

      if (item !== filterCheap) {
        // cards[item].classList.add("hide");
        console.log(cards[item]);
      } else {
        console.log(filterCheap);
        return true;
      }
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", filter);
  });
}

app();
