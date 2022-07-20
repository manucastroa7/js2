function decimeNombre (){ 

    let nombreUsuario = prompt("Insertar nombre")

    let resultado = 'Hola ' + nombreUsuario

    return resultado
}

console.log(decimeNombre())


function cantidadPax () {

    let mensaje
    let cuenta
    let pasajeros = parseInt(prompt("Cantidad Pasajeros "))
       

    if (pasajeros >= 4) {
        cuenta = (pasajeros *500) - (((pasajeros * 500) * 25) /100)
        mensaje = "Has ingresado " + pasajeros + " pasajeros. Tienes descuento de 25%. El total a pagar es " + cuenta
        

    }
    else {
        cuenta = pasajeros * 500
        mensaje = "Has ingresado " + pasajeros + " pasajeros. No tienes descuento de 25% El total a pagar es " + cuenta
    }

    return mensaje
    
    
}

console.log (cantidadPax())









/* function cantidad () {

    adultos = parseInt (prompt ("Ingresar cantidad Adultos"))

    chd= parseInt(prompt ("Ingresar cantidad CHD"))

    let total = adultos + chd
    
    return total

 
}

console.log(cantidad()) */ 









/* 

let pasajerosAdultos = prompt("Cuantos adultos son? (valor por adulto 1000$")

let pasajerosChd = prompt ("Cuantos pasajeros CHD son? (valor por chd 500$")

let cantidadAdultos = pasajerosAdultos

let cantidadChd = pasajerosChd

function (adultos, chd) {

} */ 