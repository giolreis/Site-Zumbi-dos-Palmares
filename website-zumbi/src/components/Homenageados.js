import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { Button, Card, Container, Image } from "semantic-ui-react";
import { collection, onSnapshot } from "firebase/firestore";
import "./Homenageados.css";
import { useNavigate } from "react-router-dom";

function Homenageados() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

  const calculateNumColumns = (totalUsers) => {
    const screenWidth = window.innerWidth;
    const cardWidth = 100; // Adjust this value according to your card width
    const minColumnWidth = 500; // Adjust this value according to your minimum column width
    const maxColumns = Math.floor(screenWidth / minColumnWidth);
    const numColumns = Math.min(Math.floor(screenWidth / cardWidth), maxColumns);
    return Math.max(numColumns, 2);
  };

  const renderColumns = () => {
    const numColumns = calculateNumColumns(users.length);
    const columns = [];
    for (let i = 0; i < numColumns; i++) {
      columns.push(
        <div key={i} className="column">
          {users
            .slice(i * Math.ceil(users.length / numColumns), (i + 1) * Math.ceil(users.length / numColumns))
            .map((item) => (
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
                    <Button onClick={() => navigate(`/usuarioHomenageado/${item.id}`)}>Mais Detalhes</Button>
                  </div>
                </Card.Content>
              </Card>
            ))}
        </div>
      );
    }
    return columns;
  };

  return (
    <Container className="homenageados-container">
      <div className="homenageados-grid">{renderColumns()}</div>
    </Container>
  );
}

export default Homenageados;
