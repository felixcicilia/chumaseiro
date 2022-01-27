/* 

1. Add your custom JavaScript code below
2. Place the this code in your template:

  

*/
let position = null;

function scrollX(end) {

    let aux = $(window).scrollTop()
    position = setInterval( () => {
        
        if( aux > end) {
            aux = aux - 10;
            window.scroll(0,aux)
        }else {
            stopScroll()
        }
      
        console.log(aux)
    
    }, 1);
  
}

function stopScroll() {
    clearInterval(position);
}


