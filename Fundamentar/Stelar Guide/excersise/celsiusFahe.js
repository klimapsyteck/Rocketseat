

function temperature(value, kind){
    value = Number(value)
    let message

    if(kind == 'c'){
        let f = value * 9/5 + 32
        
        message = `
            ${value} °C na escala de Fahrenhiet é ${f} °F
        `        
    }else if( kind == 'f'){
        let c = (value - 32) * (5/9)

        message = `
            ${value} °F na escala de Celsius é ${c} °C
        `
    }
    console.log(message)
}


temperature(89.6, 'f')


