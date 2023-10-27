let currentimageindex =0;

function showImage(index){
    const mainimage =document.getElementById("main");
    mainimage.src =document.querySelectorAll(".side_view img")[index].src;
    currentimageindex = index
}
function nextImage(){
    currentimageindex =(currentimageindex +1)%5; // Assuming 5 images showimage(currentimageindex);
}
function prevImage(){
 currentimageindex= (currentimageindex -1+5)% 5; //Assuming 5 images s
showImage(currentimageindex);
}

// Adding event listeners for arrow keys
document.addEventListener("keydown" ,(Event)=>{
    if (Event.key === "Arrowleft"){
        prevImage();
    } else if(Event.key ==="ArroRight"){
        nextImage();
    }
})