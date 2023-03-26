import { useState } from "react";
import { useNavigate } from "react-router-dom";
import formImage from "../public/person.png";

export default function MyForm() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://mern-project-backend-4jr6.onrender.com/api/post", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
       return response.json()
      })
      .then((data) => {
        console.log(data);
        navigate(`/home/${data._id}`); // Utilisation de useNavigate
      })
      .catch((error) =>
        console.error("Erreur lors de la soumission du formulaire :", error)
      );
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="text">
        <h1>Bienvenue</h1>
        <h3>
          Veuillez renseigner vos identifiants dans les champs de saisie afin
          d'être enregistré dans notre base de données
        </h3>
      </div>
      <div className="form-box">
        <div className="form-box--image">
          <img src={formImage} alt="" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <label>Nom : </label>
            <br />
            <input type="text" name="nom" onChange={handleInputChange} />
            <br />

            <label>Prenom : </label>
            <br />
            <input type="text" name="prenom" onChange={handleInputChange} />
            <br />

            <label>Email : </label>
            <br />
            <input type="email" name="email" onChange={handleInputChange} />
            <br />
            <label>Age : </label>
            <br />
            <input type="text" name="age" onChange={handleInputChange} />
            <br />
            <label>Job : </label>
            <br />
            <input type="text" name="job" onChange={handleInputChange} />
            <br />
            <label>Localistion : </label>
            <br />
            <input
              type="text"
              name="localisation"
              onChange={handleInputChange}
            />
            <br />
            <br />
            <button type="submit">S'enregistré</button>
          </div>
        </form>
      </div>
    </>
  );
}
