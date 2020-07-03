import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component"
import useWindowDimensions from "../../shared/hooks/useWindowDimensions";

import api from "../../services/api";

import NoteItem from "./NoteItem";
import NoteDatail from "../NoteDetail";

import { useAuth } from "../../contexts/auth";
import {
    Container,
    OrderSelect,
    SubHeader,
    Header,
    List,
    Note,
    NewNote,
    NewNoteContent
} from "./styles";

import INote from "../../shared/interfaces/INote";

const Home: React.FC = () => {
    const [notes, setNotes] = useState<INote[]>([])
    const [hasMore, setHasMore] = useState(true)
    const [selectedNote, setSelectedNote] = useState<string | null>(null)

    const { signOut } = useAuth();
    const { width } = useWindowDimensions();

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
        <Container>
            <Header>
                <div>
                    Ordenar por
                    <OrderSelect>
                        <option>Data</option>
                        <option>Título</option>
                    </OrderSelect>
                </div>
                <h1>Home</h1>
                <button onClick={signOut}>Logout</button>
            </Header>
            <SubHeader>
                <NewNoteContent>
                    <NewNote>Nova Nota</NewNote>
                </NewNoteContent>
            </SubHeader>
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
            </List>
            {width > 720 &&
                <Note>
                    <NoteDatail selectedNote={selectedNote} />
                </Note>}
        </Container>
    )
}

export default Home;