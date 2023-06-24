import React, { useState } from 'react';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { getDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

export const UsersContext = React.createContext();

const Auth = (props) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(undefined);

  const authUser = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const userAuth = userCredential.user;
        const firebaseUser = await getDoc(doc(db, 'users', userAuth.uid));

        let auxUser = firebaseUser.data();
        auxUser['id'] = userAuth.uid;
        setUser(auxUser);

        setAuthenticated(true);

        return true;
      })
      .catch((error) => {
        setAuthenticated(false);
        return false;
      });
  };

  const logout = () => {
    signOut(auth);
    setAuthenticated(false);
    setUser(undefined);
  };

  const isFavorite = (id) => {
    return user !== undefined && user.favorites.includes(id);
  };

  const updateFavorite = (id) => {
    if (user !== undefined) {
      let fav = [...user.favorites];

      if (fav.includes(id)) {
        fav = fav.filter((favorite) => favorite !== id);
        console.log('Removeu ' + JSON.stringify(fav));
      } else {
        fav.push(id);
        console.log('Adicionou ' + JSON.stringify(fav));
      }

      console.log('ID do usuário ' + user.id);
      const userRef = doc(db, 'users', user.id);

      updateDoc(userRef, {
        favorites: fav,
      })
        .then(async () => {
          const firebaseUser = await getDoc(doc(db, 'users', user.id));
          let auxUser = firebaseUser.data();
          auxUser['id'] = user.id;
          setUser(auxUser);
        })
        .catch((error) => {
          alert('Erro ao atualizar favoritos!');
        });
    }
  };

  return (
    <UsersContext.Provider
      value={{
        authenticated: authenticated,
        authUser: authUser,
        logout: logout,
        isFavorite: isFavorite,
        user: user,
        updateFavorite: updateFavorite,
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
};

export default Auth;
