import React, { type ReactNode } from 'react'
import type { InputeType } from '../inpute/interface'

interface FormProps {
    inpute: InputeType[]
    button: ReactNode
    action: (data: Record<string, string>) => void
}

const Form:React.FC<FormProps> = ({action, button, inpute}) => {
  return (
    <form>
        {
            inpute.map(({type, name, label, placeholder, id}) =>
               
                <label htmlFor={id}> {label}
                    <input
                        type={type}
                        name={name}
                        id={id}
                        placeholder={placeholder}
                    />
                </label>
                
            )
        }

        {button}
    </form>
  )
}

export default Form