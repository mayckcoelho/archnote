import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component"
import { useHistory } from "react-router-dom";
import useWindowDimensions from "../../shared/hooks/useWindowDimensions";

import api from "../../services/api";

import NoteItem from "./NoteItem";
import NoteDatail from "../NoteDetail";
import Plus from "../../assets/plus.png"
import {
    List,
    NewNote,
    NewNoteContent
} from "./styles";

import INote from "../../shared/interfaces/INote";

const Home: React.FC = () => {
    const [notes, setNotes] = useState<INote[]>([])
    const [hasMore, setHasMore] = useState(true)
    const [selectedNote, setSelectedNote] = useState<string | null>(null)

    const history = useHistory();
    const { width } = useWindowDimensions();

    const handleClick = () => {
        if (width <= 720) {
            history.push({
                pathname: "/note",
                state: { selectedNote: "0" }
            })
        } else {
            setSelectedNote("0")
        }
    }

    const fetchData = async () => {
        const response = await api.get(`/notes?limit=${10}&offset=${notes.length}`)

        if (response) {
            const newNotes: INote[] = response.data;

            setNotes([...notes, ...newNotes])

            if (newNotes.length < 10)
                setHasMore(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            <List>
                <InfiniteScroll
                    dataLength={notes.length}
                    next={fetchData}
                    hasMore={hasMore}
                    height="77vh"
                    loader={
                        <div style={{ textAlign: "center" }}>
                            <h4>Loading...</h4>
                        </div>}
                    endMessage={
                        <p style={{ textAlign: "center" }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    {notes.map((n, i) => (
                        <NoteItem key={i} note={n} setSelectedNote={setSelectedNote} />
                    ))}
                </InfiniteScroll>

                <NewNoteContent>
                    <NewNote onClick={handleClick}><img src={Plus} alt="Adicionar" /><p>Nova Nota</p></NewNote>
                </NewNoteContent>
            </List>
            {width > 720 && <NoteDatail selectedNote={selectedNote} />}
        </>
    )
}

export default Home;