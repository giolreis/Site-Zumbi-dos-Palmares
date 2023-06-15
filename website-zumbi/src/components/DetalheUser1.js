import React from "react";
import {Modal, Header, Image, Button, ModalContent} from "semantic-ui-react";

const DetalheUser = ({open, setOpen, image, nome, texto, id}) => {
    return (
        <Modal onClose={() => setOpen(false)} onOpen={() => setOpen(true)} open={open}>
            <Modal.Header>Detalhes</Modal.Header>
            <Modal.Content image>
                <Image
                scr={image} wrapped
                />
                <Modal.Description>
                    <Header>{nome}</Header>
                    <p>{texto}</p>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => setOpen(false)}>Fechar</Button>
                <Button>Favoritar</Button>
            </Modal.Actions>
        </Modal>
    )
}

export default DetalheUser;