// NOMOR I
async function numberOne(){
    let input = [3, 4, 6, 17, 25, 21, 23, 19, 20]
    let arrTemp = []
    let output = []

    function getMedian(array) {
        const sorted = array.slice().sort((a, b) => a - b)
        const median = sorted.length / 2

        if (sorted.length % 2 === 0) {
            return (sorted[median - 1] + sorted[median]) / 2
        }
        else{
            return sorted[Math.floor(median)];
        }
    }

    function getMean(array){

        let total = 0
        array.forEach(val => {
            total += val
        })
        return (total / array.length)
    }

    for(let i = 0; i < input.length; i++){
        if(input[i] < input[i+1]){
            arrTemp.push(input[i])
        }else {
            arrTemp.push(input[i])
            let result = {
                mean : getMean(arrTemp),
                median : getMedian(arrTemp)
            }
            output.push(result)
            arrTemp = []
            i += 1
            arrTemp.push(input[i])
        }
    }

    await console.log('nomor 1 =', output)
}

// NOMOR II
import fetch from 'node-fetch'

async function numberTwo(){


    async function convertFetch(amount, currency) {   
        
        let fetchData =  await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`)
            .then(resp => resp.json())
            .then((data) => {
                return Number(data.rates.USD.toFixed(1))
        });
    
        return fetchData
    }

    async function convertCurrency(value){
        let resultTemp = []
        let results
        await value.map(val => {
            let convertResult = convertFetch(val.amount, val.currency)
            resultTemp.push(convertResult)
        })
    
        await Promise.all(resultTemp).then(value => {
        results = value
        });
    
        return results
    }

    let input = [
            { amount: 15000.0, currency: 'IDR' },
            { amount: 3.1, currency: 'EUR' }
    ]

    await console.log('nomor 2 =', await convertCurrency(input))
}


// NOMOR III

async function numberThree(){
    let allMoney = [1000, 2000, 5000, 10000, 20000, 50000, 75000, 100000]

    let inputMoney = 23000
    let inputAmount = 4

    let result = []

    function getFraction(input1, input2){
        for(let y = 0; y < input2; y++){
            let small = (input1 - allMoney[0])
            let resultTemp
            for(let i = 0; i < allMoney.length; i++){
                let selisih = (input1 - allMoney[i])
                if(Math.abs(selisih) <= Math.abs(small)){
                    
                    resultTemp = allMoney[i] 
                    small = Math.abs(input1 - allMoney[i])
                }
            }
    
            input1 -= resultTemp
            result.push(resultTemp)
         }
    }
   
    await getFraction(inputMoney, inputAmount)
     
    await console.log('nomor 3 =', result)
}

numberOne()
numberTwo()
numberThree()

// number four open equid-lib-diagram and equid-lib-architecture