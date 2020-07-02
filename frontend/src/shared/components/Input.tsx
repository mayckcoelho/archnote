import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core"

interface Props {
    name: string;
    label: string;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const { fieldName, defaultValue = "", registerField, error } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: "value"
        })
    }, [fieldName, registerField])

    return (
        <>
            {label && <label htmlFor={fieldName}>{label}</label>}

            <input
                ref={inputRef}
                id={fieldName}
                defaultValue={defaultValue}
                {...rest}
            />

            {error && <span style={{ color: "#f00" }}>{error}</span>}
        </>
    )
}

export default Input;