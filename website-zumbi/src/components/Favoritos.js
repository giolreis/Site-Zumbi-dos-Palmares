import React, { useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { Button, Card, Container, Image } from "semantic-ui-react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import "./Favoritos.css";

function Favoritos() {
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      const q = query(collection(db, "favoritosUser"), where("userId", "==", user.uid));
      const unsub = onSnapshot(q, (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          const data = { id: doc.id, ...doc.data() };
          const existingFavorite = list.find((favorite) => favorite.favoriteItemId === data.favoriteItemId);

          if (!existingFavorite) {
            list.push(data);
          }
        });
        setUsers(list);
        setLoading(false);
      });

      return () => {
        unsub();
      };
    } else {
      alert("Usuário não logado. Redirecionando para a página de login...");
      navigate('/login', { replace: true });
    }
  }, [user, navigate]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (users.length === 0) {
    return <div className="texto-formatacao"><h1 >Sem favorito salvo.</h1></div>;
  }

  return (
    <Container className="homenageados-container">
      <div className="homenageados-grid" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        {users.map((item) => (
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
          </Card>
        ))}
      </div>
    </Container>
  );
}

export default Favoritos;
