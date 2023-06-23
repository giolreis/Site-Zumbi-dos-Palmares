import "./DetalheHomenageado.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

function DetalheHomenageado() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const auth = useAuth();

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

  const handleFavorite = async () => {
    if (auth.user) { //auth.user
      try {
        const favoriteData = {
          userId: auth.user.uid,
          favoriteItemId: id,
        };
        const docRef = await addDoc(collection(db, "favoritosUser"), favoriteData);
  
        console.log("Favorito salvo com ID:", docRef.id);
      } catch (error) {
        console.error("Erro ao salvar favorito:", error);
      }
    } else {
      console.log("Usuário não logado. Redirecionando para a página de login...");
      //navigate("/login");
    }
  };

  return (
    console.log(auth.user),
    <div className="formatacao">
      <h1>{user.nome}</h1>
      <img src={user.image} alt={user.nome} />
      <p>{user.texto}</p>
      <Button onClick={handleFavorite}>Favoritar</Button>
      <Button onClick={() => navigate("/")}>Sair</Button>
    </div>
  );
}

export default DetalheHomenageado;
