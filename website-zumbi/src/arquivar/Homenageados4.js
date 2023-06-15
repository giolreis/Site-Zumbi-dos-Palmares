import React, { useEffect, useState } from 'react';
import HomenageadosData from '../components/HomenageadosData';
import { db } from "../firebase";
import { firebase } from "../firebase";

function Homenageados() {
  const [homenageados, setHomenageados] = useState([]);

  useEffect(() => {
    // Buscar os dados do Firebase Firestore
    const usersCollection = firebase.firestore().collection('users');
    usersCollection.onSnapshot((snapshot) => {
      const homenageadosArray = [];
      snapshot.forEach((doc) => {
        const homenageado = doc.data();
        homenageadosArray.push(homenageado);
      });
      setHomenageados(homenageadosArray);
    });

    // Remover o listener quando o componente for desmontado
    return () => {
      usersCollection();
    };
  }, []);

  return (
    <div className="homenageado">
      <h1>Todos os homenageados</h1>
      <p>Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto</p>
      <div className="homenageadoscard">
        {homenageados.map((homenageado) => (
          <HomenageadosData
            key={homenageado.id}
            image={homenageado.image}
            titulo={homenageado.titulo}
            descricao={homenageado.descricao}
          />
        ))}
      </div>
    </div>
  );
}

export default Homenageados;
