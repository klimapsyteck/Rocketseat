

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


//temperature(89.6, 'f')

console.log('_______________ NEW WAY _____________')


function temperature2(degree){
    const fahrenhietTrue = degree.toString().toUpperCase().includes('F')
    const celsiusTrue = degree.toString().toUpperCase().includes('C')   

    if(!fahrenhietTrue && !celsiusTrue){
        throw new Error('Grau Informado Não Encontrado')
    }

    let updatedDegree = Number(degree.toUpperCase().replace("F", ""))
    let formula = fahrenhiet => (fahrenhiet - 32) * 5/9
    let degreeSign = 'C'

    if(celsiusTrue){
        updatedDegree = Number(degree.toUpperCase().replace("C", ""))
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F'
    }

    return formula(updatedDegree) + degreeSign
    
}

try {
    console.log(temperature2('50f'))
    console.log(temperature2('10c'))
} catch (error) {
    console.log(error.message)
}