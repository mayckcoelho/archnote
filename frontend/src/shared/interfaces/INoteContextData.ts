interface INoteContextData {
    noteId: string | null;
    updated: boolean;
    noteUpdated: (upt: boolean) => void;
    selectNote: (noteId: string | null) => void;
}

export default INoteContextData;