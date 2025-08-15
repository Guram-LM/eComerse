import React, { useMemo } from 'react'
import Form from '../../../components/Form/Form'
import { RegistrationInpute } from '../../../components/inpute/registrationInpute/RegistrationInpute'
import useUserMutation from '../../../hook/mutationHook/useUserMutation'
import type { userdataType } from '../../../components/inpute/interface'

const RegistrationPage = () => {
    const {mutate} = useUserMutation("icommersUserApp")
    
    const sendData = (data:userdataType) => {
        mutate(data)
    }

    const regButton = useMemo(() => {
        return <button type='submit'>Register</button>
    }, [])
  return (
    <Form action={sendData} button={regButton} inpute={RegistrationInpute}/>
  )
}

export default RegistrationPage