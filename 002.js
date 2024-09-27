function fibonacci(number) {
    let fibArr = []
    for (let i = 0; i < number; i++) {
        if (i < 2) {
            fibArr[i] = 1
        } else {
            var sum = fibArr[i - 1] + fibArr[i - 2]
            if (sum >= 4000000) {
                break
            }
            fibArr[i] = sum
        }
    }
    return fibArr
}

function sum(number) {
    let sum = 0
    let fibArr = fibonacci(number)

    fibArr.forEach(element => {
        if (element % 2 == 0) {
            sum += element
        }
    })

    return sum
}

console.log(sum(4000000))