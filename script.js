var productSelected = 0

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
    category:'Storage Equipment',
    description: 'Laundary basket',
    amount:'Ksh:2,200',
    amountNumber:2200
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
            category:'Storage Equipment',
            description: 'shoe rack',
            amount:'Ksh:1,200',
            amountNumber:1200
            },
            {
                image:'images/image18.jpg' ,
                category:'Storage Equipment',
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
                        {
                            image:'images/image21.jpg' ,
                            category:'Pots and Pans',
                            description: 'cooking pots with lids',
                            amount:'Ksh:8,200',
                            amountNumber:8200
                            },
                            {
                                image:'images/image22.jpg' ,
                                category:'Pots and Pans',
                                description: 'stainless cooking pots',
                                amount:'Ksh:5,000',
                                amountNumber:5000
                                },
                                {
                                    image:'images/image23.jpg' ,
                                    category:'Kitchen Equipment',
                                    description: 'kitchen accessory',
                                    amount:'Ksh:3,500',
                                    amountNumber:3500
                                    },
                                    {
                                        image:'images/image24.jpg' ,
                                        category:'Pots and Pans',
                                        description: 'Frying pans',
                                        amount:'Ksh:4,200',
                                        amountNumber:4200
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
             button.product = product
            
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
}];

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
    popuptext.innerHTML= 'item:' + productSelected
    popup.classList.toggle("show");
    
    var showItems = document.getElementsByClassName("hide")[0]
    showItems.innerHTML= 'item:' +  productSelected.product.category + product.amount + product.image
    showItems.classList.toggle("show");
  }




  const all_items_button = document.getElementsByTagName("button")
   for (var i = 0;i < all_items_button.length; i++){
        var button = all_items_button[i]
        if(button.innerHTML == 'Add to Cart'){
            button.onclick = function(){
            productSelected = productSelected + button.product.category + button.product.amount + button.product.image
            

         
            console.log(productSelected) 
   }
   
   }
  }

  let footer = document.getElementById("footer")
  
  var image = document.createElement('img')
  image.src = "images/twitter.png"
 footer.appendChild(image)
 
 var image = document.createElement('img')
 image.src = "images/instagram.png"
 footer.appendChild(image)

 var image = document.createElement('img')
  image.src = "images/pinterest.png"
 footer.appendChild(image)

 var image = document.createElement('img')
  image.src = "images/facebook.png"
 footer.appendChild(image)


 let para = document.createElement("a")
 let link = document.createTextNode("About us");
 para.appendChild(link)
 para.href="About us";
 footer.appendChild(para)



 let para2 = document.createElement("a")
 let link2 = document.createTextNode("Contact us");
 para2.appendChild(link2)
 para2.href="Contact us";
 footer.appendChild(para2)

 
 let para3 = document.createElement("a")
 let link3 = document.createTextNode("Terms and Conditions");
 para3.appendChild(link3)
 para3.href="Terms and Conditions";
 footer.appendChild(para3)


 let para4 = document.createElement("a")
 let link4 = document.createTextNode("Privacy policy");
 para4.appendChild(link4)
 para4.href="Privacy policy";
 footer.appendChild(para4)

 var payment = document.createElement('img')
  payment.src = "images/paypal.png"
 footer.appendChild(payment)

 var payment2 = document.createElement('img')
 payment2.src = "images/visa.png"
footer.appendChild(payment2)


let copyRight = document.createElement("p")
 copyRight.innerHTML = "<h4>Copyright © HomeMarket-Kenya 2023</h4>"
 footer.appendChild(copyRight)


 ///// filtering items using search bar 
function search(){
    let filter = document.getElementById('search').value.toUpperCase();
     for(var i=0;i<productsListing.children.length;i++){
         let div = productsListing.children[i];
         
    
         let span = div.getElementsByTagName('span')[0]
          if(span.innerHTML.toUpperCase().indexOf(filter) > -1){
              div.style.display = '';
          } else {
              div.style.display = 'none';
          }
          
     }
}
