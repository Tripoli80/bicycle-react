import { useState } from "react";
import "./product.css";
export const Product = ({ product, onDelete, onChangeStatus }) => {
  const [selectedStatus, setSelectedStatus] = useState(
    product.status === "available"
      ? "available"
      : product.status === "busy"
      ? "busy"
      : "unavailable"
  ); // Состояние для хранения выбранного статуса

  const handleStatusChange = (event) => {
    product.status = event.target.value; // Изменяем статус продукта
    onChangeStatus(product.id, event.target.value); // Обработчик изменения статуса
    setSelectedStatus(event.target.value);
  };
  const handleProductDel = (e) => {
    onDelete(product.id);
  };
  const currentClass =
    product.status === "busy"
      ? "product product__busy"
      : product.status === "unavailable"
      ? "product product_unavailable"
      : "product";
  const price = (+product.price).toFixed(2);
  const type = product.type ? product.type : "";
  return (
    <div className={currentClass} key={product.id}>
      <div className="product__about">
        <h2 className="product__title">
          <span className="product__titleName">
            {product.name.toUpperCase()}
          </span>{" "}
          - {type.toUpperCase()} ({product.color})
        </h2>
        <p className="product__id">ID: {product.id}</p>
        <div className="status_dropdown_container">
          <label htmlFor="statusDropdown" className="product__statusLable">
            STATUS:
          </label>
          <span className="myarrow" />
          <select
            className="product__status"
            id="statusDropdown"
            value={selectedStatus}
            onChange={handleStatusChange}
          >
            <option value="available">available</option>
            <option value="busy">busy</option>
            <option value="unavailable">unavailable</option>
          </select>
        </div>
      </div>

      <div className="product__price">{price} UAH/hr.</div>
      <div className="product__closed" onClick={handleProductDel}></div>
    </div>
  );
};
