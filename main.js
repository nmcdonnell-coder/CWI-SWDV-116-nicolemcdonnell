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
