import { useEffect, useState } from "react"
import React from 'react'
import {useNavigate, useParams} from "react-router-dom"
import {getDoc, updateDoc, doc} from "firebase/firestore"
import { db } from "../firebaseConfig/firebase"


function Edit() {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [year, setYear] = useState("")
  const [genre, setGenre] = useState("")

  const navigate = useNavigate()
  const {id} = useParams()

  const update =async (e)=>{
    e.preventDefault()
    const libro = doc(db, "libros", id)
    const data = {
      Title: title,
      Author: author,
      Year: year,
      Genre: genre,}
      await updateDoc(libro, data)
      navigate('/')
  }

  const getLibroById = async (id)=>{
    const libro = await getDoc(doc(db, "libros", id))
    if(libro.exists()){
      console.log(libro.data());
      setTitle(libro.data().title)
      setAuthor(libro.data().author)
      setYear(libro.data().year)
      setGenre(libro.data().genre)
    }else{
      console.log("el producto no existe")
    }
  }

  useEffect(()=>{
    getLibroById(id)
  },[])
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Editar Libro:</h1>
            <form onSubmit={update}>
              <div className="mb-3">
                <label for="title" className="form-label">
                  Título
                </label>
                <input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label for="author" className="form-label">
                  Autor
                </label>
                <input
                  id="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label for="year" className="form-label">
                  Año
                </label>
                <input
                  id="year"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  type="number"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label for="genre" className="form-label">
                  Género
                </label>
                <input
                  id="genre"
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  type="text"
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-primary">Editar</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Edit