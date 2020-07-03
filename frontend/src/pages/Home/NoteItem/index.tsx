import React from "react";
import moment from "moment"
import { useHistory } from "react-router-dom";
import useWindowDimensions from "../../../shared/hooks/useWindowDimensions";

import {
    Container,
    Content,
    NoteTitle,
    NoteDate,
    NoteContent,
    BottomContent
} from "./styles";
import INote from "../../../shared/interfaces/INote"

interface NoteProps {
    note: INote;
    setSelectedNote: (_id: string) => void;
}

type Props = JSX.IntrinsicElements['div'] & NoteProps;

const NoteItem: React.FC<Props> = ({ note, setSelectedNote }) => {

    const history = useHistory();
    const { width } = useWindowDimensions();

    const handleClick = () => {
        if (width <= 720) {
            history.push({
                pathname: "/note",
                state: { selectedNote: note._id }
            })
        } else {
            setSelectedNote(note._id)
        }
    }

    return (
        <Container onClick={handleClick}>
            <Content>
                <NoteTitle>{note.title}</NoteTitle>
                <NoteContent>{note.content}</NoteContent>
                <BottomContent>
                    <NoteDate>{moment(note.createdAt).format('dddd')}</NoteDate>
                </BottomContent>
            </Content>
        </Container>
    )
}

export default NoteItem;