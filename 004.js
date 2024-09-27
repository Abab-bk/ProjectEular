let finalNumber = 0

function calculateFinalNumber() {
    for (let i = 100; i < 1000; i++) {
        for (let j = 100; j < 1000; j++) {
            var number = i * j
            if (isPalindrome(number) && number > finalNumber) {
                finalNumber = number
            }
        }
    }
}

function isPalindrome(number) {
    return number.toString() === number.toString().split('').reverse().join('')
}

calculateFinalNumber()
console.log(finalNumber)