const quantityText = document.getElementById("quantity-text");
      const totalPrice = document.getElementById("total-price");
      let quantity = parseInt(quantityText.innerText);
      let totalItems = document.getElementById("total-items");
      let totalGross = document.getElementById("total-gross");
      let payableAmt = document.getElementById("amount");
      function inc() {
        if (quantity<5) {
          quantityText.innerText = ++quantity;
        } else {
          alert("You can't add more than 5 items.")
        }
        totalPrice.innerText = `${quantity * 259}`;
        totalItems.innerText = quantity;
        totalGross.innerText = `${quantity * 259}`;
        payableAmt.innerText = `${(quantity * 259) + 39}`;
      }
      
      function dec() {
        if (quantity>1) {
          quantityText.innerText = --quantity;
        } else {
          alert("You may select atleast 1 item.");
        }
        totalPrice.innerText = `${quantity * 259}`;
        totalItems.innerText = quantity;
        totalGross.innerText = `${quantity * 259}`;
        payableAmt.innerText = `${(quantity * 259) + 39}`;
      }

      function remove() {
        const empty = document.getElementById("cart");
        empty.innerHTML = `\n 
         <div> 
          <p class="text-center mt-4" style="font-size:20px; font-family:"Poetsen One", sans-serif; font-weight: 300; font-style: normal;"> 
            Your Shopping Cart is currently empty. To add Product in your Shopping Cart, start by searching or browsing through our book store. 
            When you want to buy Product, click on Add to Cart button. product in Shopping Cart always reflect the most recent price, displayed on their product pages. 
          </p> 
          <p class="text-center" style="font-size:20px">
             Please <a href="../index.html">Click here</a> to continue shopping 
            </p> 
          </div>`;
      }