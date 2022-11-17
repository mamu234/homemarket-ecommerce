
var productsListing = document.getElementById('product-listing')

let products = [{
image:'images/item1.jpg',
category:'Pots and Pans', 
description: 'Heavy sticky pans',
amount:'Ksh:1,200'
},
{
image:'images/item2.jpg',
category:'Kitchen Equipment',
description: 'Heavy sticky pans',
amount:'Ksh:1,200'
},
{
image:'images/item3.jpg',
category:'Home Decor',
description: 'Heavy sticky pans',
amount:'Ksh:1,200'
},
{
image:'images/item4.jpg',
category:'Home Decor',
description: 'Heavy sticky pans',
amount:'Ksh:1,200'
},
{
image:'images/item5.jpg',
category:'Pots and Pans'   ,
description: 'Heavy sticky pans' ,
amount:'Ksh:1,200'
},
{
image:'images/item6.jpg',
category:'Kitchen Equipment',
description: 'Heavy sticky pans',
amount:'Ksh:1,200'   
},
{
image:'images/item7.jpg' ,
category:'Home Decor'  ,
description: 'Heavy sticky pans',
amount:'Ksh:1,200'
},
{
image:'images/item8.jpg',
category:'Kitchen Equipment' ,
description: 'Heavy sticky pans'  ,
amount:'Ksh:1,200'
 },
{
image:'images/item9.jpg' ,
category:'Pots and Pans',
description: 'Heavy sticky pans' ,
amount:'Ksh:1,200'  
 },
 {
image:'images/item10.jpg' ,
category:'Pots and Pans' ,
description: 'Heavy sticky pans' ,
amount:'Ksh:1,200' 
},
{
image:'images/item11.jpg' ,
category:'Utensils & Cutlery' ,
description: 'Heavy sticky pans' ,
amount:'Ksh:1,200'
},
{
 image:'images/item12.jpg' ,
 category:'Pots and Pans' ,
 description: 'Heavy sticky pans',
 amount:'Ksh:1,200'
 }

]
function createProductListing(category) {
    for (var i=0; i<products.length; i++) {
        let product = products[i]  
        if (product.category==category || category=='All') {
            let div = document.createElement('div')
            productsListing.appendChild(div)
            image = document.createElement('img')
            image.src = product.image
            div.appendChild(image)
            
            let p = document.createElement('p')
            productsListing.appendChild(p)
            p.innerHTML= product.description
            div.appendChild(p)

            let h1 = document.createElement('h1')
            productsListing.appendChild(h1)
            h1.innerHTML= product.amount
            div.appendChild(h1)


            let button = document.createElement('button')
            productsListing.appendChild(button)
             button.innerHTML = 'Add to Cart'
            div.appendChild(button)
             }  
        }
    }

createProductListing('All')
var productsCategory = document.getElementById("products-category")
let categorys = [{
name:'All'
},
{
name:'Kitchen Equipment'   
},
{
name:'Pots and Pans'  
},
{
name:'Utensils & Cutlery'  
},
{
name:'Storage'
},
{
name:'Home Decor'
}
]
function deleteProductListing(){
productsListing.innerHTML = ''
}
for(var i = 0 ;i<categorys.length;i++){
    let category = categorys[i]
    let div = document.createElement('div')
    productsCategory.appendChild(div)
    let button = document.createElement('button')
    productsCategory.appendChild(button)
    button.innerHTML = category.name
    button.onclick = function(){
        deleteProductListing()
        createProductListing(category.name)
    }
    div.appendChild(button)


}
    
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

  const all_items_button = document.getElementsByTagName("button")
  console.log(all_items_button)
  for (var i = 0;i < all_items_button.length; i++){
   var button = all_items_button[i]


function addToCart(){
button.onclick = function(){
    button.innerHTML = products.description
     addToCart()

}

}
}