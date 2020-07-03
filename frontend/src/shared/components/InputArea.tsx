import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core"

interface Props {
    name: string;
    label: string;
}

type InputProps = JSX.IntrinsicElements['textarea'] & Props;

const InputArea: React.FC<InputProps> = ({ name, label, ...rest }) => {
    const inputRef = useRef<HTMLTextAreaElement>(null);

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

            <textarea
                ref={inputRef}
                id={fieldName}
                defaultValue={defaultValue}
                {...rest}
            />

            {error && <span style={{ color: "#f00" }}>{error}</span>}
        </>
    )
}

export default InputArea;