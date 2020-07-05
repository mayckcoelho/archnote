import React, { useState, useEffect, ChangeEvent } from "react";

import api from "../../../services/api"
import { useAlert } from "react-alert";
import IAttachment from "../../../shared/interfaces/IAttachment"
import Plus from "../../../assets/plus.svg"

import {
    Container,
    AttachmentList,
    AttachmentItem,
    AddAttachment
} from "./styles";

interface Props {
    noteId: string;
    attachments: IAttachment[];
}

const Attachments: React.FC<Props> = ({ noteId, attachments }) => {
    const [attachmentList, setAttachmentList] = useState<IAttachment[]>([])

    const alert = useAlert()

    const onUploadAtachment = async (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        const file: File = (target.files as FileList)[0];

        const formData = new FormData();
        formData.append('file', file)
        const response = await api.post(`/notes/${noteId}/attachments`, formData, {
            headers: {
                'Content-Type': 'multpart/form-data'
            }
        }).catch(err => {
            alert.error(err.response.data.message)
        })

        if (response) {
            setAttachmentList([response.data, ...attachmentList])

            alert.success("Anexo salvo!")
        }
    }

    const handleAttachmentDelete = async (id: string) => {
        const response = await api.delete(`/notes/${noteId}/attachments/${id}`).catch(err => {
            alert.error(err.response.data.message)
        })

        if (response) {
            const newAttachmentList = attachmentList.filter(at => at.id !== id)

            setAttachmentList([...newAttachmentList])

            alert.success("Anexo excluído!")
        }
    }

    useEffect(() => {
        setAttachmentList(attachments)
    }, [attachments])

    return (
        <Container>
            <AttachmentList>
                <h1>Anexos</h1>
                {attachmentList.length > 0 ? attachmentList.map(at => (
                    <AttachmentItem key={at.id}>
                        <a href={at.url} target="_blank" rel="noopener noreferrer">{at.name}</a>
                        <span onClick={() => handleAttachmentDelete(at.id)}>x</span>
                    </AttachmentItem>
                )) : <p>Nenhum anexo</p>}
            </AttachmentList>
            {noteId !== "0" &&
                <AddAttachment>
                    <button><img src={Plus} alt="Adicionar" /> Anexo</button>
                    <input type="file" onChange={e => onUploadAtachment(e)} />
                </AddAttachment>}
        </Container>
    )
}

export default Attachments;