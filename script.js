var cartTotal = 0

var productsListing = document.getElementById('product-listing')

let products = [{
image:'images/image1.jpeg',
category:'Kitchen Equipment', 
description: 'Mixer',
amount:'Ksh:8,900',
amountNumber:8900
},
{
image:'images/image2.jpeg',
category:'Utensils & Cutlery',
description: 'knives & board',
amount:'Ksh: 5,200',
amountNumber:5200
},
{
image:'images/image3.jpeg',
category:'Kitchen Equipment',
description: 'Coffee-maker',
amount:'Ksh:2,500',
amountNumber:2500
},
{
image:'images/image4.jpeg',
category:'Kitchen Equipment',
description: 'blender & Mixer',
amount:'Ksh:25,000',
amountNumber:25000
},
{
image:'images/image5.jpg',
category:'Kitchen Equipment',
description: 'coffee maker' ,
amount:'Ksh: 3,000',
amountNumber:3000
},
{
image:'images/image6.jpg',
category:'Utensils & Cutlery',
description: 'Spice containers',
amount:'Ksh:1,200' ,
amountNumber:1200  
},
{
image:'images/image7.jpg' ,
category:'Home Decor'  ,
description: 'sticky pans',
amount:'Ksh:7,200',
amountNumber:7200
},
{
image:'images/image8.jpg',
category:'Kitchen Equipment' ,
description: 'Smoothy'  ,
amount:'Ksh:2,00',
amountNumber:2000
 },
{
image:'images/item9.jpg' ,
category:'Pots and Pans',
description: 'Heavy sticky pans' ,
amount:'Ksh:1,200' ,
amountNumber:1200 
 },
 {
image:'images/image10.jpg' ,
category:'Kitchen Equipment' ,
description: 'Juice extractor' ,
amount:'Ksh:1,200' ,
amountNumber:1200
},
{
image:'images/image11.jpg' ,
category:'Kitchen Equipment' ,
description: 'Toaster' ,
amount:'Ksh:1,200',
amountNumber:1200
},
{
 image:'images/image12.jpg' ,
 category:'Kitchen Equipment',
 description: 'Toaster',
 amount:'Ksh:1,200',
 amountNumber:1200
 },
 {
    image:'images/image13.jpg' ,
    category:'Pots and Pans',
    description: 'cooking pots',
    amount:'Ksh:7,200',
    amountNumber:7200
    },
    {
        image:'images/image14.jpg' ,
        category:'Home Decor',
        description: 'Laundary basket',
        amount:'Ksh:4,000',
        amountNumber:4000
        }
,
{
    image:'images/image15.jpg' ,
    category:'Kitchen Equipment',
    description: 'Toaster',
    amount:'Ksh:1,200',
    amountNumber:1200
    },
    {
        image:'images/image16.jpg' ,
        category:'Kitchen Equipment',
        description: 'knives',
        amount:'Ksh:1,200',
        amountNumber:1200
        },  
        {
            image:'images/image17.jpg' ,
            category:'Home Decor',
            description: 'shoe rack',
            amount:'Ksh:1,200',
            amountNumber:1200
            },
            {
                image:'images/image18.jpg' ,
                category:'Home Decor',
                description: 'Laundary basket',
                amount:'Ksh:1,200',
                amountNumber:1200
                },
                {
                    image:'images/image19.jpg' ,
                    category:'Pots and Pans',
                    description: 'pans',
                    amount:'Ksh:1,200',
                    amountNumber:1200
                    },
                    {
                        image:'images/image20.jpg' ,
                        category:'Home Decor',
                        description: 'kitchen accessory',
                        amount:'Ksh:1,200',
                        amountNumber:1200
                        },

   

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
            

           let br = document.createElement('br')
           div.appendChild(br)
            
            let span = document.createElement('span')
            productsListing.appendChild(span)
            span.innerHTML= product.description
            div.appendChild(span)

            let h1 = document.createElement('h1')
            productsListing.appendChild(h1)
            h1.innerHTML= product.amount
            div.appendChild(h1)


            let button = document.createElement('button')
            productsListing.appendChild(button)
             button.innerHTML = 'Add to Cart'
             button.amount = product.amountNumber
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
name:'Storage Equipment'
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
    let btn = document.createElement('btn')
    productsCategory.appendChild(btn)
    btn.innerHTML = category.name
    btn.onclick = function(){
        deleteProductListing()
        createProductListing(category.name)
        div.appendChild(btn)
    }
    


}
let productCategoryBreak = document.createElement('br')
productsCategory.appendChild(productCategoryBreak)

function myFunction() {
    var popup = document.getElementById("myPopup");
    var popuptext = document.getElementsByClassName("popuptext")[0]
    popuptext.innerHTML= 'total:' + cartTotal
    popup.classList.toggle("show");
  }

  const all_items_button = document.getElementsByTagName("button")
   for (var i = 0;i < all_items_button.length; i++){
   var button = all_items_button[i]
   button.onclick = function(){
       cartTotal = cartTotal + button.amount 
       console.log(cartTotal)
   }
  }
