import { useState } from 'react'

function CardForm ({ addCity }) {

  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    imgURL: "",
    isVisited: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const city = {
      id: Math.random(),
      title: formData.title,
      imgURL: formData.imgURL,
      desc: formData.desc,
      isVisited: formData.isVisited,
    };

    addCity(city);

    setFormData({
      title: "",
      desc: "",
      imgURL: "",
      isVisited: false,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-zinc-950 rounded-lg p-5 flex flex-col gap-3 w-80 mb-10 bg-zinc-800 text-white"
    >
      <div className="flex flex-col">
        <label htmlFor="title">Nome Città</label>
        <input
          type="text"
          name="title"
          id="title"
          className="bg-neutral-600 text-white px-3 py-2 rounded border border-neutral-500"
          value={formData.title}
          onChange={handleInputChange}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="desc">Descrizione</label>
        <textarea
          name="desc"
          id="desc"
          className="bg-neutral-600 text-white px-3 py-2 rounded border border-neutral-500"
          value={formData.desc}
          onChange={handleInputChange}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="imgURL">Immagine (URL)</label>
        <input
          type="text"
          name="imgURL"
          id="imgURL"
          className="bg-neutral-600 text-white px-3 py-2 rounded border border-neutral-500"
          value={formData.imgURL}
          onChange={handleInputChange}
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="isVisited"
          id="isVisited"
          className="accent-green-500"
          checked={formData.isVisited}
          onChange={handleInputChange}
        />
        <label htmlFor="isVisited">Visitata?</label>
      </div>

      <button
        className="bg-zinc-950 text-white font-medium py-2 rounded hover:bg-zinc-700 transition"
        type="submit"
      >
        Aggiungi Card
      </button>
    </form>
  );
}

export default CardForm;
