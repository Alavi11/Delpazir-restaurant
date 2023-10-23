const Resuser =(cart = [] ,action)=>{

    if(action.type === "ADD"){
        let product = cart.filter((item)=> item.ID === action.payload.ID)
        if(product < 1){
            return [...cart, action.payload]
        }
        else{
            alert("تو سفارشاتت هست !!!")
            return cart;
        }
    }
    if(action.type === "REMOVE"){
        let product = cart.filter((item)=> item.ID != action.payload.ID);
        cart = product;
        return cart
    }
    
    return cart;
}

export default Resuser;





// const Resuser =(cart = [] ,action)=>{

//     if(action.type === "ADD"){
//         console.log(cart);
//         console.log(action.payload);
//         let product = cart.filter((item)=> item.ID === action.payload.ID)
//         if(product < 1){
//             return [...cart , action.payload]
//         }
//         else{
//             alert("تو سفارشاتت هست")
//             return cart;
//         }
//     }
//     if(action.type === "REMOVE"){
//         let product = cart.filter((item)=> item.id !== action.payload.id);
//         cart = product;
//         return cart
//     }
    
//     return cart;
// }

// export default Resuser;