import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { Button, Card, Container, Image } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";
import "./Homenageados.css";
import DetalheUser from "./DetalheUser1";

function Homenageados() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [open,setOpen] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "users"), (snapshot) => {
      let list = [];
      snapshot.docs.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setUsers(list);
      setLoading(false);
    });

    return () => {
      unsub();
    };
  }, []);

  const handleModal = (item) =>{
    setOpen(true);
    setUser(item);
  };

  return (
    <Container className="homenageados-container">
      <div className="homenageados-grid">
        {users && users.map((item) => (
            <Card key={item.id} className="homenageadoscard t-card">
              <Card.Content>
                <div className="t-image">
                  <Image src={item.image} />
                </div>
                <div>
                  <Card.Header>
                    <h4>{item.nome}</h4>
                  </Card.Header>
                </div>
                <div>
                  <Card.Description className="homenageado">
                    <p>{item.descricao}</p>
                  </Card.Description>
                </div>
              </Card.Content>
              <Card.Content extra>
                <div>
                  <Button>Favoritar</Button>
                  <Button onClick={() => handleModal(item)}>Mais Detalhes</Button>
                  {open && (
                        <DetalheUser
                        open={open}
                        setOpen={setOpen}
                        {...user}
                        />
                  )}
                </div>
              </Card.Content>
            </Card>
          ))}
      </div>
    </Container>
  );
}

export default Homenageados;
