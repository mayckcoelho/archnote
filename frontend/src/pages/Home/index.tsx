import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component"
import { useHistory } from "react-router-dom";
import useWindowDimensions from "../../shared/hooks/useWindowDimensions";
import { useAlert } from "react-alert";
import { useNote } from "../../contexts/note"

import api from "../../services/api";

import NoteItem from "./NoteItem";
import NoteDatail from "../NoteDetail";
import Plus from "../../assets/plus.svg"
import {
    List,
    NewNote,
    NewNoteContent,
    ListMessage
} from "./styles";

import INote from "../../shared/interfaces/INote";

const Home: React.FC = () => {
    const [notes, setNotes] = useState<INote[]>([])
    const [hasMore, setHasMore] = useState(true)

    const { noteId, selectNote, updated, noteUpdated } = useNote();
    const alert = useAlert();
    const history = useHistory();
    const { width } = useWindowDimensions();

    const handleClick = () => {
        if (width <= 720) {
            history.push({
                pathname: "/note",
                state: { selectedNote: "0" }
            })
        } else {
            selectNote("0")
        }
    }

    const fetchData = async (limit: number, offset: number) => {
        const response = await api.get(`/notes?limit=${limit}&offset=${offset}`).catch(err => {
            alert.error(err.response.data.message)
        })

        if (response) {
            const newNotes: INote[] = response.data;

            if (limit === 0)
                setNotes([...newNotes])
            else
                setNotes([...notes, ...newNotes])


            if (newNotes.length < 10)
                setHasMore(false)

            noteUpdated(false)
        }
    }

    useEffect(() => {
        fetchData(10, 0);
    }, [])

    useEffect(() => {
        if (updated)
            fetchData(0, 0)
    }, [updated])

    return (
        <>
            <List>
                <InfiniteScroll
                    dataLength={notes.length}
                    next={() => fetchData(10, notes.length)}
                    hasMore={hasMore}
                    height="77vh"
                    loader={
                        <ListMessage >
                            <h4>Carregando mais...</h4>
                        </ListMessage>}
                    endMessage={
                        <ListMessage >
                            <h4>Estas são todas as suas notas!</h4>
                        </ListMessage>
                    }
                >
                    {notes.map((n, i) => (
                        <NoteItem key={i} note={n} />
                    ))}
                </InfiniteScroll>

                <NewNoteContent>
                    <NewNote onClick={handleClick}><img src={Plus} alt="Adicionar" /><p>Nova Nota</p></NewNote>
                </NewNoteContent>
            </List>
            {width > 720 && <NoteDatail selectedNote={noteId} />}
        </>
    )
}

export default Home;