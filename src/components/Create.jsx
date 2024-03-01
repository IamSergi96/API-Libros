import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";

function Create() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");

  const navigate = useNavigate();

  const librosCollection = collection(db, "libros");

  const nuevoLibro = async (e) => {
    e.preventDefault();
    await addDoc(librosCollection, {
      Title: title,
      Author: author,
      Year: year,
      Genre: genre,
    });
    alert("Libro creado correctamente")
    navigate("/");
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Crear Libro:</h1>
            <form onSubmit={nuevoLibro}>
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
              <button type="submit" className="btn btn-primary">Guardar</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Create;
