import React, { useMemo } from 'react'
import Form from '../../../components/Form/Form'
import { RegistrationInpute } from '../../../components/inpute/registrationInpute/RegistrationInpute'

const RegistrationPage = () => {

    const sendData = (data:Record<string, string>) => {
        console.log(data)
    }

    const regButton = useMemo(() => {
        return <button type='submit'>Register</button>
    }, [])
  return (
    <Form action={sendData} button={regButton} inpute={RegistrationInpute}/>
  )
}

export default RegistrationPage