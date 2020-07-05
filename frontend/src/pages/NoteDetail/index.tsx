import React, { useState, useCallback, useEffect } from "react";
import { ContentEditableEvent } from "react-contenteditable"
import moment from "moment"
import { useAlert } from "react-alert";
import { useNote } from "../../contexts/note";
import { debounce } from "lodash"
import * as Yup from "yup";

import {
    Note,
    NoteDetailContent,
    NoteInfo,
    TextArea,
    TextAreaContent,
    EmptyNote,
} from "./styles"

import { useLocation } from "react-router-dom";

import Attachments from "./Attachments";
import INote from "../../shared/interfaces/INote"
import api from "../../services/api";
import NoData from "../../assets/no_data.svg"
import Delete from "../../assets/delete.svg"

interface DetailProps {
    selectedNote: string | null
}

const NoteDetail: React.FC<DetailProps> = ({ selectedNote }) => {
    const [noteId, setNoteId] = useState<string | null>(null)
    const [note, setNote] = useState<INote>({ title: "", content: "" } as INote)
    const [newNote, setNewNote] = useState<INote>({ title: "", content: "" } as INote)
    const location = useLocation<DetailProps>();

    const { selectNote, noteUpdated } = useNote()
    const alert = useAlert()

    useEffect(() => {
        async function loadNote() {
            const noteId = selectedNote || location.state?.selectedNote;

            setNoteId(noteId)

            if (noteId) {
                if (noteId === "0") {
                    setNote({ title: "", content: "" } as INote)
                    setNewNote({ title: "", content: "" } as INote)
                } else {
                    const response = await api.get(`/notes/${noteId}`).catch(err => {
                        alert.error(err.response.data.message)
                    })

                    if (response) {
                        setNote(response.data)
                        setNewNote(response.data)
                    }
                }
            }
        }

        loadNote();
    }, [selectedNote, location])

    const saveNote = async (newNote: INote, note: INote) => {
        try {
            const schema = Yup.object().shape({
                title: Yup.string().required(),
                content: Yup.string().required(),
            });

            await schema.validate(newNote);

            if (newNote.title !== note.title || newNote.content !== note.content) {
                const response = await api({
                    method: newNote._id ? "put" : "post",
                    url: `/notes/${newNote._id || ""}`,
                    data: {
                        title: newNote.title,
                        content: newNote.content
                    }
                }).catch(err => {
                    alert.error(err.response.data.message)
                })

                if (response) {
                    setNote({ ...newNote, updatedAt: response.data.updatedAt })
                    setNoteId(response.data._id)
                    selectNote(response.data._id)
                    noteUpdated(true)

                    alert.success("Nota salva!")
                }
            }
        } catch (err) { }
    }

    const debounceSaveNote = useCallback(debounce(saveNote, 2000), [])

    useEffect(() => {
        debounceSaveNote(newNote, note)
    }, [newNote])

    const onChange = (e: ContentEditableEvent, field: string) => {
        const value = e.target.value;

        if (field === "title") {
            setNewNote({ ...newNote, title: value })
        } else {
            setNewNote({ ...newNote, content: value })
        }
    }

    const handleDelete = async () => {
        const response = api.delete(`/notes/${note._id}`).catch(err => {
            alert.error(err.response.data.message)
        })

        if (response) {
            setNoteId(null)
            setNote({ title: "", content: "" } as INote)
            setNewNote({ title: "", content: "" } as INote)
            noteUpdated(true)

            alert.success("Nota Excluída!")
        }
    }

    return (
        <Note>
            {noteId ?
                <NoteDetailContent>
                    <NoteInfo>
                        <h1>
                            {note?.updatedAt ? `Salvo ${moment(note?.updatedAt).fromNow()}` : "Não salvo"}
                        </h1>
                        {noteId !== "0" &&
                            <img src={Delete} alt="Exlcuir" onClick={handleDelete} />
                        }
                    </NoteInfo>
                    <TextArea html={newNote?.title} onChange={e => onChange(e, "title")} placeholder="Título" />
                    <TextAreaContent html={newNote?.content} onChange={e => onChange(e, "content")} placeholder="Escreve ai..." />
                    <Attachments noteId={noteId} attachments={note.attachments || []} />
                </ NoteDetailContent>
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