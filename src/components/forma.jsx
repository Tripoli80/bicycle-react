import { useState } from "react";
import { Button } from "./button";
import "./forma.css";
import { checkFormData } from "../services";
import { NotificationManager } from "../util";

const defaultForma = {
  name: "",
  color: "",
  price: "",
  type: "",
  wheel_size: "",
  id: "",
  description: "",
  status: "available",
};

export const Forma = ({ onAdd }) => {
  const [forma, setForma] = useState({ ...defaultForma });
 

  const handleChange = (event) => {
    const { id, value } = event.target;
    setForma({ ...forma, [id]: value });
  };

  const handleSave = () => {
    if (checkFormData(forma) === true)
      onAdd(forma)
        .then(() => {
          setForma(defaultForma);
          NotificationManager.success("Bike was added");
        })
        .catch((error) => {
          NotificationManager.error(error);
          console.log(error);
        });
    else {
      NotificationManager.error(checkFormData(forma).error);
    }
  };
  const handleClear = () => {
    setForma(defaultForma);
  };
  const checkValue = (value, type = "string") => {
    if (type === "number") {
      return +value < 0 ? "forma__textField texterror" : "forma__textField";
    }
    return value.length > 0 && value.length < 5
      ? "forma__textField texterror"
      : "forma__textField";
  };
  return (
    <div>
      <form className="forma">
        <div className="forma__head">
          <div className="forma__colum">
            <input
              className={checkValue(forma.name)}
              id="name"
              type="text"
              placeholder="Name"
              value={forma.name}
              onChange={handleChange}
            />
            <input
              className={checkValue(forma.color)}
              id="color"
              type="text"
              placeholder="Color"
              value={forma.color}
              onChange={handleChange}
            />
            <input
              className={checkValue(forma.price, "number")}
              id="price"
              type="number"
              placeholder="Price"
              value={forma.price}
              onChange={handleChange}
            />
          </div>
          <div className="forma__colum">
            <input
              className={checkValue(forma.type)}
              id="type"
              type="text"
              placeholder="Type"
              value={forma.type}
              onChange={handleChange}
            />
            <input
              className={checkValue(forma.wheel_size, "number")}
              id="wheel_size"
              type="number"
              placeholder="Wheel size"
              value={forma.wheel_size}
              onChange={handleChange}
            />
            <input
              className={checkValue(forma.id)}
              id="id"
              type="text"
              placeholder="ID (slug): ХХХХХХХХХХХХХ"
              value={forma.id}
              onChange={handleChange}
            />
          </div>
        </div>
        <textarea
          className={checkValue(forma.description) + " forma__textDescription"}
          id="description"
          //   rows={4} // Высота в строках
          //   cols={50} // Ширина в символах
          placeholder="Description"
          value={forma.description}
          onChange={handleChange}
        />
      </form>
      <div className="button-area">
        <Button text="SAVE" onClick={handleSave} />
        <Button text="CLEAR" onClick={handleClear} />
      </div>
    </div>
  );
};
