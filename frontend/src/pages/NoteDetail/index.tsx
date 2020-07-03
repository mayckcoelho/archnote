import React, { useRef, useState, useEffect } from "react";
import { FormHandles } from '@unform/core';

import { Note, NoteInfo, Form, TextArea, TextAreaContent, EmptyNote } from "./styles"

import { useLocation } from "react-router-dom";

import api from "../../services/api";
import NoData from "../../assets/no_data.svg"

interface DetailProps {
    selectedNote: string | null
}

const NoteDetail: React.FC<DetailProps> = ({ selectedNote }) => {
    const [noteId, setNoteId] = useState<string | null>(null)
    const location = useLocation<DetailProps>();

    const formRef = useRef<FormHandles | null>(null);

    useEffect(() => {
        async function loadNote() {
            const noteId = selectedNote || location.state?.selectedNote;

            setNoteId(noteId)

            if (noteId) {
                if (noteId === "0") {
                    formRef.current?.setData({ title: "", content: "" })
                } else {
                    const response = await api.get(`/notes/${noteId}`)

                    if (response) {
                        formRef.current?.setData(response.data)
                    }
                }
            }
        }

        loadNote();
    }, [selectedNote, location])

    return (
        <Note>
            {noteId ?
                <>
                    <NoteInfo>
                        <h1>Header </h1>
                    </NoteInfo>
                    <Form ref={formRef} onSubmit={(data) => console.log(data)}>
                        <TextArea name="title" label="" placeholder="Título" rows={1} />
                        <TextAreaContent name="content" label="" placeholder="Escreve ai..." />
                    </Form>
                </>
                :
                <EmptyNote>
                    <img src={NoData} alt="Sem Dados" />
                    <h1>Crie uma nova nota!</h1>
                </EmptyNote>
            }
        </Note>
    )
}

export default NoteDetail;