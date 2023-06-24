import "./DetalheHomenageado.css";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, collection, addDoc } from "firebase/firestore";
import { AuthContext } from "./AuthContext";

function DetalheHomenageado() {
  const { id } = useParams();
  const [user1, setUser1] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userRef = doc(db, "users", id);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          setUser1({ id: userDoc.id, ...userDoc.data() });
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

  const handleFavorite = async () => {
    if (user) {
      try {
        const favoriteData = {
          userId: user.uid,
          favoriteItemId: id,
          nome: user1.nome,
          image: user1.image,
          descricao: user1.descricao,
          // Outros dados do favorito que você deseja salvar
        };

        // Crie uma nova coleção "favoritosUser" e adicione o documento com os dados do favorito
        const docRef = await addDoc(collection(db, "favoritosUser"), favoriteData);

        console.log("Favorito salvo com ID:", docRef.id);
        alert("Favorito salvo com sucesso!");
      } catch (error) {
        console.error("Erro ao salvar favorito:", error);
      }
    } else {
      alert("Usuário não logado. Redirecionando para a página de login...");
      navigate("/login", { replace: true });
    }
  };

  return (
    console.log("Homenageado", user),
    <div className="formatacao">
      <h1>{user1.nome}</h1>
      <img src={user1.image} alt={user1.nome} />
      <p>{user1.texto}</p>
      <Button onClick={handleFavorite}>Favoritar</Button>
      <Button onClick={() => navigate("/")}>Sair</Button>
    </div>
  );
}

export default DetalheHomenageado;
