import React, { useRef, useState, useEffect } from "react";
import { SubmitHandler, FormHandles } from '@unform/core';
import * as Yup from "yup";

import { Form, TextArea, TextAreaContent } from "./styles"

import { useLocation } from "react-router-dom";

import INote from "../../shared/interfaces/INote";
import api from "../../services/api";

interface DetailProps {
    selectedNote: string | null
}

const NoteDetail: React.FC<DetailProps> = ({ selectedNote }) => {
    const location = useLocation<DetailProps>();

    const formRef = useRef<FormHandles | null>(null);

    useEffect(() => {
        async function loadNote() {
            const note_id = selectedNote || location.state?.selectedNote;

            if (note_id) {
                const response = await api.get(`/notes/${note_id}`)

                if (response) {
                    formRef.current?.setData(response.data)
                }
            }
        }

        loadNote();
    }, [selectedNote, location])

    return (
        <Form ref={formRef} onSubmit={(data) => console.log(data)}>
            <TextArea name="title" label="" placeholder="Título" rows={1} />
            <TextAreaContent name="content" label="" placeholder="Escreve ai..." />
        </Form>
    )
}

export default NoteDetail;