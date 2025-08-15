import React, { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import type { InputeType, userdataType } from '../inpute/interface';



interface FormProps {
    inpute: InputeType[];
    button: ReactNode;
    action: (data: userdataType) => void;
}


const Form: React.FC<FormProps> = ({ action, button, inpute }) => {

    const [data, setdata] = useState<userdataType>({
        confirmPassword:"",
        country:"",
        email: "",
        image: "",
        lastName: "",
        name: "",
        password: "",
        phone: "",
        sity: "",
        street: "",
    })

    const onchange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setdata(prev => ({
            ...prev, [name]: value
        }))
    }
        
        const onsubmit =(e: FormEvent<HTMLFormElement>) =>{
            e.preventDefault()

          


            action(data)
            e.currentTarget.reset()
            
            

        }

    return (
        <form className="custom-form" onSubmit={onsubmit}>
            {inpute.map(({ type, name, label, placeholder, id }) => (
                <label key={id} htmlFor={id} className="form-label">
                    {label}
                    <input
                        type={type}
                        name={name}
                        id={id}
                        placeholder={placeholder}
                        className="form-input"
                        onChange={onchange}
                    />
                </label>
            ))}
            <div className="form-button">{button}</div>
        </form>
    );
};

export default Form;
