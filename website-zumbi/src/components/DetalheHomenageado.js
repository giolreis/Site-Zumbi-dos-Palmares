import "./DetalheHomenageado.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

function DetalheHomenageado() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userRef = doc(db, "users", id);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          setUser({ id: userDoc.id, ...userDoc.data() });
        } else {
          setError("Usuário não encontrado.");
        }
      } catch (error) {
        setError("Erro ao buscar usuário.");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Ocorreu um erro: {error}</div>;
  }

  return (
    <div className="formatacao">
      <h1>{user.nome}</h1>
      <img src={user.image} alt={user.nome} />
      <p>{user.texto}</p>
      <Button>Favoritar</Button>
      <Button onClick={() => navigate("/")}>Sair</Button>
    </div>
  );
}

export default DetalheHomenageado;
