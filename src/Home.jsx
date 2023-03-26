import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Home() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://mern-project-backend-4jr6.onrender.com/api/getOne/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) =>
        console.error(
          "Erreur lors de la récupération de l'utilisateur :",
          error
        )
      );
  }, [id]);

  const DeleteUsers = () => {
    fetch(`https://mern-project-backend-4jr6.onrender.com/api/delete/${id}`, {
      method: "DELETE",
    }).then((response) => {
      return response.json()
    }).then((data) => {
      console.log(data);
      navigate(`/`); // Utilisation de useNavigate
    })
  };

  return (
    <>
      <h2>Informations de l'utilisateur</h2>
      <p>Nom: {user.nom}</p>
      <p>Prénom: {user.prenom}</p>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      <p>Job: {user.job}</p>
      <p>Localisation: {user.localisation}</p>
      <br />
      <br />
      <Link to="/">
        <button>Retour au menu</button>
      </Link>
      <br />
      <br />
      <button onClick={DeleteUsers}>Supprimer mon compte</button>
    </>
  );
}
