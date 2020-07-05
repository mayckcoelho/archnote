import React, { useState, useContext, createContext } from "react";

import INoteContextData from "../shared/interfaces/INoteContextData";

const NoteContext = createContext<INoteContextData>({} as INoteContextData);

export const NoteProvider: React.FC = ({ children }) => {
    const [noteId, setNoteId] = useState<string | null>(null);
    const [updated, setUpdated] = useState<boolean>(false);

    const selectNote = (noteId: string | null) => {
        setNoteId(noteId);
    }

    const noteUpdated = (upt: boolean) => {
        setUpdated(upt);
    }

    return (
        <NoteContext.Provider value={{ noteId, updated, noteUpdated, selectNote }}>
            {children}
        </NoteContext.Provider>
    )
}

export function useNote() {
    const context = useContext(NoteContext);

    return context;
}