import React from "react";
import moment from "moment"
import { useHistory } from "react-router-dom";
import useWindowDimensions from "../../../shared/hooks/useWindowDimensions";
import api from "../../../services/api"
import { useAlert } from "react-alert";
import { useNote } from "../../../contexts/note";

import {
    Container,
    Content,
    NoteTitle,
    NoteDate,
    NoteContent,
    BottomInfo
} from "./styles";
import INote from "../../../shared/interfaces/INote"

import Delete from "../../../assets/delete.svg"

interface NoteProps {
    note: INote;
}

type Props = JSX.IntrinsicElements['div'] & NoteProps;

const NoteItem: React.FC<Props> = ({ note }) => {

    const { noteId, selectNote, noteUpdated } = useNote();
    const history = useHistory();
    const alert = useAlert();
    const { width } = useWindowDimensions();

    const decodeHtml = (html: string) => {
        let elem = document.createElement('textarea');
        elem.innerHTML = html.replace(/<[^>]+>/g, '');

        return elem.value;
    }


    const handleClick = () => {
        if (width <= 720) {
            history.push({
                pathname: "/note",
                state: { selectedNote: note._id }
            })
        } else {
            selectNote(note._id)
        }
    }

    const handleDelete = async () => {
        const response = await api.delete(`/notes/${note._id}`).catch(err => {
            alert.error(err.response.data.message)
        })

        if (response) {
            noteUpdated(true)

            alert.success("Nota excluída!")
        }
    }

    return (
        <Container className={(noteId && noteId === note._id) ? "selected" : ""}>
            <Content onClick={handleClick}>
                <NoteTitle>{decodeHtml(note.title)}</NoteTitle>
                <NoteContent>{decodeHtml(note.content)}</NoteContent>
            </Content>
            <BottomInfo>
                <NoteDate>{moment(note.createdAt).format("dddd")}</NoteDate>
                <img src={Delete} alt="Excluir" onClick={handleDelete} />
            </BottomInfo>
        </Container>
    )
}

export default NoteItem;