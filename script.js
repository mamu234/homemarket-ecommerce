var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'images/item1.jpg';

imgArray[1] = new Image();
imgArray[1].src = 'images/item3.jpg';

imgArray[2] = new Image();
imgArray[2].src = 'images/item4.jpg';
function nextImage(element)
{
    var img = document.getElementById(element);

    for(var i = 0; i < imgArray.length;i++)
    {
        if(imgArray[i].src == img.src)
        {
            if(i === imgArray.length){
                document.getElementById(element).src = imgArray[0].src;
                break;
            }
            document.getElementById(element).src = imgArray[i+1].src;
            break;
        }
    }
}