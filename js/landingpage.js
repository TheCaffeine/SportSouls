//adding data to local storage
const addToCartBtn = document.getElementsByClassName('sc-add-to-cart');
let items = []
for(let i=0; i<addToCartBtn.length; i++){
    addToCartBtn[i].addEventListener('click', function(event){
        if(typeof(Storage) !=='undefined'){
            let item = {
                id:i+1,
                name:e.target.parentElememt.children[0]
            };
        }
        else{
            alert('Local storage not working')
        }
    });
}