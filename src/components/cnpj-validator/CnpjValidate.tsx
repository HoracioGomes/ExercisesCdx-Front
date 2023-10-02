import React from 'react'
import { useState } from 'react'
import './CnpjValidate.css'
import { validateCnpj } from './CnpjUtils'

function CnpjValidator() {
    const [cnpj, setCnpj] = useState<string>('')
    const [isValideCnpj, setIsValidCnpj] = useState<boolean | null>(null)

    const validationResolve = () => {
        const isOk = validateCnpj(cnpj)
        setIsValidCnpj(isOk)
    }

    return (
        <div id={'cnpjBody'}>
            <h1>CNPJ Validator</h1>
            <input type='text' value={cnpj} onChange={(it) => setCnpj(it.target.value)} placeholder='Digite o CNPJ'></input>
            <button className='check_btn' onClick={validationResolve}>Check</button>
            {isValideCnpj !== null && (
                isValideCnpj ? (<span style={{ color: 'green' }}>CNPJ válido!</span>) :
                    (<span style={{ color: 'red' }}>Digite um CNPJ válido!</span>)
            )}
        </div>
    )

}

export default CnpjValidator