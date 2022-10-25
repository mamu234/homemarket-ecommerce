




var productsListing = document.getElementById('product-listing')

let products = [{
image:'images/item1.jpg',
category:'Pots and Pans' 
},
{
image:'images/item2.jpg',
category:'Kitchen Equipment'
},
{
image:'images/item3.jpg',
category:'Home Decor'
},
{
image:'images/item4.jpg',
category:'Home Decor'
},
{
image:'images/item5.jpg',
category:'Pots and Pans'    
},
{
image:'images/item6.jpg',
category:'Kitchen Equipment'   
},
{
image:'images/item7.jpg' ,
category:'Home Decor'  
},
{
image:'images/item8.jpg',
category:'Kitchen Equipment'   
 },
{
image:'images/item9.jpg' ,
category:'Pots and Pans'   
 },
 {
image:'images/item10.jpg' ,
category:'Pots and Pans'   
},
{
image:'images/item11.jpg' ,
category:'Utensils & Cutlery'  
},
{
 image:'images/item12.jpg' ,
 category:'Pots and Pans'   
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

