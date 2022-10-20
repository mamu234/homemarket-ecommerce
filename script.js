




var productsListing = document.getElementById('product-listing')

let products = [{
image:'images/item1.jpg', 
},
{
image:'images/item2.jpg'
},
{
image:'images/item3.jpg'
},
{
image:'images/item4.jpg'
},
{
image:'images/item5.jpg'   
},
{
image:'images/item6.jpg'   
},
{
image:'images/item7.jpg'   
},
{
image:'images/item8.jpg'   
 },
{
image:'images/item9.jpg'   
 }
]
for(var i = 0 ;i<products.length;i++){
    let product = products[i]

let div = document.createElement('div')
productsListing.appendChild(div)
image = document.createElement('img')
image.src= product.image
div.appendChild(image)
}

var productsCategory = document.getElementById("products-category")
let categorys = [{
name:'All'
},
{
name:'Cookware'   
},
{
name:'Kitchen equipment'  
},
{
name:'Home Decor'  
    }

]

for(var i = 0 ;i<categorys.length;i++){
    let category = categorys[i]

    let div = document.createElement('div')
    productsCategory.appendChild(div)
    let button = document.createElement('button')
    productsCategory.appendChild(button)
    button.name = category.name
    div.appendChild(button)


}

