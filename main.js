const cars = [
   {
      type: "sedan",
      name: "Toyota Camry",
      description: "A comfortable sedan.",
      year: 2024
   },
   {
      type: "sedan",
      name: "Honda Accord",
      description: "A spacious sedan.",
      year: 2023
   },
   {
      type: "SUV",
      name: "Toyota RAV4",
      description: "A versatile SUV.",
      year: 2025
   },
   {
      type: "SUV",
      name: "Ford Explorer",
      description: "A roomy SUV.",
      year: 2024
   },
   {
      type: "truck",
      name: "Ford F-150",
      description: "A powerful pickup truck.",
      year: 2025
   },
   {
      type: "truck",
      name: "Chevrolet Silverado",
      description: "A dependable truck.",
      year: 2023
   },
   {
      type: "convertible",
      name: "Mazda MX-5 Miata",
      description: "A sporty convertible.",
      year: 2024
   },
   {
      type: "convertible",
      name: "Ford Mustang Convertible",
      description: "A stylish convertible.",
      year: 2025
   },
   {
      type: "van",
      name: "Honda Odyssey",
      description: "A spacious van.",
      year: 2024
   },
   {
      type: "van",
      name: "Chrysler Pacifica",
      description: "A practical minivan.",
      year: 2023
   }
];
function displayCars(carList) {
   const carContainer = document.querySelector(".car-container");
   carContainer.innerHTML = "";
   carList.forEach(function(car) {
      const carCard = document.createElement("article");
      carCard.className = "car-card";
      const carImage = document.createElement("img");
      carImage.src = "car_1.jpg";
      carImage.alt = car.name;
      const carName = document.createElement("h2");
      carName.textContent = car.name;
      const carDescription = document.createElement("p");
      carDescription.textContent = car.description;
      const carYear = document.createElement("p");
      carYear.textContent = "Year: " + car.year;
      carCard.appendChild(carImage);
      carCard.appendChild(carName);
      carCard.appendChild(carDescription);
      carCard.appendChild(carYear);
      carContainer.appendChild(carCard);
   });
}
function listCars() {
   const params = new URLSearchParams(window.location.search);
   if (params.has("type")) {
      const type = params.get("type");
      const filteredCars = cars.filter(function(car) {
         return car.type === type;
      });
      displayCars(filteredCars);
   }
   else {
      displayCars(cars);
   }
}
function myFunction() {
   var x = document.getElementById("myTopnav");
   if (x.className === "topnav") {
      x.className += " responsive";
   } else {
      x.className = "topnav";
   }
}
function validateSearch() {
   const carType = document.getElementById("type").value;
   const pickupValue = document.getElementById("pickup").value;
   const returnValue = document.getElementById("return").value;
   const errors = [];
   if (!carType) {
      errors.push("Please select a car type.");
   }
   if (!pickupValue) {
      errors.push("Please select a pickup date.");
   }
   if (!returnValue) {
      errors.push("Please select a return date.");
   }
   const today = new Date();
   const todayString =
      today.getFullYear() + "-" +
      String(today.getMonth() + 1).padStart(2, "0") + "-" +
      String(today.getDate()).padStart(2, "0");
   if (pickupValue && pickupValue <= todayString) {
      errors.push("Pickup date must be in the future.");
   }
   if (pickupValue && returnValue && returnValue <= pickupValue) {
      errors.push("Return date must be after the pickup date.");
   }
   return errors;
}
const searchForm = document.getElementById("searchForm");
if (searchForm) {
   const searchButton = searchForm.querySelector('button[type="submit"]');
searchButton.addEventListener("click", function(event) {
   const errors = validateSearch();
   const previousErrors = searchForm.querySelector(".search-errors");
   if (previousErrors) {
      previousErrors.remove();
   }
   if (errors.length > 0) {
      event.preventDefault();
      const errorList = document.createElement("ul");
      errorList.className = "search-errors";
      errors.forEach(function(error) {
         const listItem = document.createElement("li");
         listItem.textContent = error;
         errorList.appendChild(listItem);
      });
      searchForm.appendChild(errorList);
   }
});
const pickupDate = document.getElementById("pickup");
const returnDate = document.getElementById("return");
pickupDate.addEventListener("change", function() {
   returnDate.min = pickupDate.value;
   if (returnDate.value && returnDate.value < pickupDate.value) {
      returnDate.value = pickupDate.value;
   }
});
returnDate.addEventListener("change", function() {
   pickupDate.max = returnDate.value;
   if (pickupDate.value && pickupDate.value > returnDate.value) {
      pickupDate.value = returnDate.value;
   }
});
}
