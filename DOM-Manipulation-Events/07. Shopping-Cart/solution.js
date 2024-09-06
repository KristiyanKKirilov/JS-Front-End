function solve() {
   //get elements refferences
   const resultElement = document.querySelector('textarea[disabled]');
   const checkoutButton = document.querySelector('button.checkout');
   const productCatalogElement = document.querySelector('.shopping-cart');
   let products = [];

   //attach event for add product
   productCatalogElement.addEventListener('click', (e) => {
      if(e.target.tagName !== 'BUTTON'){//event delegation
         return;
      }
      
      if(e.target.textContent.trim() !== 'Add'){
         return;
      }
   //get name and price
   const productElement = e.target.closest('.product');
   const name = productElement.querySelector('.product-title').textContent;
   const price = Number(productElement.querySelector('.product-line-price').textContent);

   //print in text area
   resultElement.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;

   //add product to the array
   products.push({
      name,
      price
   });
   });
   //attach checkout event
   checkoutButton.addEventListener('click', (e) => {
   //calc total price
   const totalPrice = products.reduce((totalPrice, product) => totalPrice += product.price, 0); 

   //get unique items
   const productList = [...new Set(products.map(product => product.name))];
   
   //print result in text area
   resultElement.value += `You bought ${productList.join(', ')} for ${totalPrice.toFixed(2)}.`;

   //dissable all buttons after checkout
   document.querySelectorAll('button')
      .forEach(el => el.setAttribute('disabled', 'disabled'));
   });
}
