import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  collection,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const mySwal = withReactContent(Swal);

function Show() {
  const [libros, setLibros] = useState([]);
  const librosCollection = collection(db, "libros");

  //mostrar los libros
  const getLibros = async () => {
    const data = await getDocs(librosCollection);
    // console.log(data.docs);
    setLibros(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  
  };

  //eliminar libro
  const deleteLibro = async (id) => {
    const libro = doc(db, "libros", id);
    await deleteDoc(libro);
    getLibros();
    alert("Libro eliminado correctamente")
  };

  useEffect(() => {
    getLibros();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-grid gap-2">
              <Link to="/create" className="btn btn-secondary mt-2 mb-2">
                Create
              </Link>
            </div>
            <table className="table table-dark table-hover">
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Autor</th>
                  <th>Año</th>
                  <th>Género</th>
                </tr>
              </thead>
              <tbody>
                {libros.map((libro) => (
                  <tr key={libro.id}>
                    <td>{libro.Title}</td>
                    <td>{libro.Author}</td>
                    <td>{libro.Year}</td>
                    <td>{libro.Genre}</td>
                    <td>
                      <Link to={`/edit/${libro.id}`} className="btn btn-light"><i className="fa-solid fa-pen-to-square"></i>
                        
                      </Link>
                      <button
                        onClick={() => {
                          deleteLibro(libro.id);
                        }}
                        className="btn btn-danger"
                      ><i className="fa-solid fa-trash"></i>
                        
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Show;
