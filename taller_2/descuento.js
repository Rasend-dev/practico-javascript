console.group('Descuento');
//podemos pasar un objeto al console.log
//console.log({precio,descuento,porcentajePrecioConDescuento,precioConDescuento});

function calcularDescuento(precio,descuento){
    let porcentajePrecioConDescuento = 100 - descuento;    
    let precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento
}

function btnCalculate(){
    let resultP = document.getElementById("resultP"); //get the P
    let price = document.getElementById("inputPrice"); //get the price
    let nameCoupon = document.getElementById("inputCoupon"); //get the name of the coupon

    let coupons = [{name:'02',discount:20},{name:'04',discount:40},{name:'06',discount:60}]
    
    let isCouponValid = function(coupon){ //coupon es el objeto(diccionario) que se encuentra en el array
        return coupon.name === nameCoupon.value // si hace match retorna el objeto(diccionario) si no, retorna undefined
    }

    let userCoupon = coupons.find(isCouponValid) //los arrays tienen .find() que es un metodo que nos permite iterar en el array usando una funcion

    if (!userCoupon){ // !userCoupon si es undefined entonces sera true
        resultP.innerText = "Lo lamentamos su cupon no es valido..." 
    }
    else{
        let total_price = calcularDescuento(price.value,userCoupon.discount)
        resultP.innerText = "El precio con descuento es de: " + total_price
    }
}

console.groupEnd();