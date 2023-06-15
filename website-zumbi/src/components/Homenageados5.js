import React, { useEffect, useState } from "react";
import HomenageadosData from './HomenageadosData';
import { db } from "../firebase";
import "./Homenageados.css";
import firebase from 'firebase/compat/app'; // Importe o objeto firebase corretamente
import 'firebase/compat/firestore';

const Homenageados = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPostsFromFirebase = [];
    const subscriber = db
      .collection("users")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          getPostsFromFirebase.push({
            ...doc.data(),
            key: doc.id,
          });
        });
        setPosts(getPostsFromFirebase);
        setLoading(false);
      });

    // return cleanup function
    return () => subscriber();
  }, [loading]); // empty dependencies array => useEffect only called once

  return (
    <div className="homenageado">
      <h1>Todos os homenageados</h1>
      <p>Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto</p>
      <div className="homenageadoscard">
        {posts.map((post) => (
          <HomenageadosData
            key={post.id}
            image={post.image}
            titulo={post.titulo}
            descricao={post.descricao}
          />
        ))}
      </div>
    </div>
  );
};

export default Homenageados;