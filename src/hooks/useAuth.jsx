import { browserLocalPersistence, createUserWithEmailAndPassword, onAuthStateChanged, setPersistence, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../services'
import { useEffect, useState } from 'react';


setPersistence(auth, browserLocalPersistence)

export const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Validación del user.
    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        },
            (error) => setLoading(error)
        );
        return() => unsuscribe();
    }, []);


    const signup = async (email, password) => {
        try {
            userCreated = await createUserWithEmailAndPassword(auth, email, password);
            return userCreated;
        }
        catch (error) {
            throw new Error(error);
        }
    }

    const login = async (email, password) => {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            return user;
        } catch (error) {
            throw new Error(error);
        }
    }

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            throw error;
        }
    }


    return { signup, login , logout , user , loading };
}

