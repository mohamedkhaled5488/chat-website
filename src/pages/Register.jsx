import React from 'react'
import { useState } from "react";
import add from '../img/add.png'
import { Link , useNavigate} from 'react-router-dom'
import {auth,db,storage} from '../firebase'
import { createUserWithEmailAndPassword ,updateProfile } from "firebase/auth";
import { ref,uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";



export const Register = () => {
  const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
      setLoading(true);
      e.preventDefault();
      const displayName = e.target[0].value;
      const email = e.target[1].value;
      const password = e.target[2].value;
      const file = e.target[3].files[0];
  
      try {
        //Create user
        const res = await createUserWithEmailAndPassword(auth, email, password);
  
        //Create a unique image name
        const date = new Date().getTime();
        const storageRef = ref(storage, `${displayName + date}`);
  
        await uploadBytesResumable(storageRef, file).then(() => {
          getDownloadURL(storageRef).then(async (downloadURL) => {
            try {
              //Update profile
              await updateProfile(res.user, {
                displayName,
                photoURL: downloadURL,
              });
              //create user on firestore
              await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                displayName,
                email,
                photoURL: downloadURL,
              });
  
              //create empty user chats on firestore
              await setDoc(doc(db, "userChats", res.user.uid), {});
              navigate("/");
            } catch (err) {
              console.log(err);
              setErr(true);
              setLoading(false);
            }
          });
        });
      } catch (err) {
        setErr(true);
        setLoading(false);
      }
    };
  

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Hiloo Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="display name" />
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
         

         {err&&<span style={{color:'red'}}>somthing went wrong try to change the email</span>}
        </form>
        <p>
          You do have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  )
}
