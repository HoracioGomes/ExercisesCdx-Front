export const validateCnpj = (cnpj: string): boolean => {
    // Regex to validate cnpj format
    const cnpjRegex = /^(\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}|\d{14})$/
    const cnpjWithoutSpaces = cnpj.trim()

    // First type of check (string format)
    if (cnpjRegex.test(cnpjWithoutSpaces)) {

        // Start of the second type of check (receita rules)
        let finalcheckNumbers: number[]
        let cnpjNumbers: number[]
        const primeNumberReceitaRule = 11
        const minimumFactorReceitaRule = 2
        const maximumFactorReceitaRule = 9
        const hyphenPosition = 15
        const positionFirstVerificationNumber = 0
        const positionSecoundVerificationNumber = 1

        // Treating formats differently: 00.000.000/0000-00 e 00000000000000
        if (cnpjWithoutSpaces.includes("-", hyphenPosition)) {
            // Separate verification numbers for checking
            const [, checkNumbers]: string[] = cnpjWithoutSpaces.split('-')
            finalcheckNumbers = checkNumbers.split('').map(Number)

            // Treat CNPJ by removing verification numbers
            let withoutVerificationNumbersCnpj: string = cnpjWithoutSpaces.replace(/-.*/, '')
            let cleanCnpj: string[] = withoutVerificationNumbersCnpj.replace(/[./-]/g, '').split('').reverse()
            cnpjNumbers = cleanCnpj.map((char) => parseInt(char, 10))
        } else {
            // Separate verification numbers for checking
            const finalNumbers = cnpjWithoutSpaces.substring(cnpjWithoutSpaces.length - 2)
            finalcheckNumbers = finalNumbers.split('').map(Number)

            // Treats cnpj
            let cleanCnpj: string[] = cnpjWithoutSpaces.split('')
            // remove the two check digits
            cleanCnpj = cleanCnpj.slice(0, cleanCnpj.length - 2).reverse()
            cnpjNumbers = cleanCnpj.map((char) => parseInt(char, 10))
        }


        let factor = minimumFactorReceitaRule
        let sumCnpjNumbers = 0

        // First multiplication/sum of the cnpj (without checking numbers)
        // to find the first "possible" verification number
        for (let i = 0; i <= cnpjNumbers.length - 1; i++) {
            if (factor > maximumFactorReceitaRule) {
                factor = 2
            }
            sumCnpjNumbers += (cnpjNumbers[i] * factor)
            factor++
        }

        // Getting the first "possible" verification number
        const firstCheckDigit: number = primeNumberReceitaRule - (sumCnpjNumbers % primeNumberReceitaRule) >= 10 ? 0 :
            primeNumberReceitaRule - (sumCnpjNumbers % primeNumberReceitaRule)

        // Checking first "possible" check number with separate check number initially
        if (firstCheckDigit == finalcheckNumbers[positionFirstVerificationNumber]) {
            // Resetting variables for new multiplication/addition
            factor = minimumFactorReceitaRule
            sumCnpjNumbers = 0
            // Adding the first verification number to the beginning of the cnpj
            cnpjNumbers.unshift(firstCheckDigit)

            // Second multiplication/sum of the cnpj (without checking numbers)
            // to find second "possible" verification number
            for (let i = 0; i <= cnpjNumbers.length - 1; i++) {
                if (factor > maximumFactorReceitaRule) {
                    factor = 2
                }
                sumCnpjNumbers += (cnpjNumbers[i] * factor)
                factor++
            }

            // Removing the verification number from the beginning of the CNPJ
            cnpjNumbers.shift()

            // Getting second "possible" verification number
            const secoundCheckNumber = primeNumberReceitaRule - (sumCnpjNumbers % primeNumberReceitaRule) >= 10 ? 0 :
                primeNumberReceitaRule - (sumCnpjNumbers % primeNumberReceitaRule)

            // Checking second "possible" check number with separate check number initially
            if (secoundCheckNumber == finalcheckNumbers[positionSecoundVerificationNumber]) {
                return true
            }
            return false
        }

        return false

    } else {
        return false
    }
}



