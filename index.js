let arr = ['img/img1.avif','img/img2.jpg','img/img3.jpeg','img/img4.jpeg','img/img5.jpeg','img/img6.jpg'];
let img = document.querySelector('img');

let count = 0;

function next(){
    count++;
    if(count>arr.length-1){
        count=0;
        img.src=arr[count];
    }
    else{
        img.src=arr[count];
    }
}
function prev(){
    count--;
    if(count<0){
        count=arr.length-1;
        img.src=arr[count];
    }
    else{
        img.src=arr[count];
    }
}