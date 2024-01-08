import { useEffect, useState } from "react";
import { Product } from "../../components/product";
import "./main.css";
import { Forma } from "../../components/forma";
import { Stat } from "../../components/stat";
import * as API from "../../API/index.js";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { NotificationManager } from "../../util/index.js";

// const products = [
//   {
//     id: 1,
//     name: "Product 1",
//     price: 100,
//     description: "Product 1 description",
//     status: "available",
//     color: "red",
//   },
//   {
//     id: 3,
//     name: "Product 3",
//     price: 100,
//     description: "Product 1 description",
//     status: "busy",
//     color: "red",
//   },
//   {
//     id: 44,
//     name: "Product 44",
//     price: 100,
//     description: "Product 1 description",
//     status: "unavailable",
//     color: "blue",
//   },
// ];
export const Mainpage = () => {
  const [productList, setProductList] = useState();
  useEffect(() => {
    API.getBick().then((data) => {
      setProductList(data);
    });
  }, []);

  const onDelete = async (id) => {
    await API.removeBickById(id);
    API.getBick()
      .then((data) => {
        setProductList(data);
        NotificationManager.success("Bike was deleted");
      })
      .catch((error) => {
        NotificationManager.error(error);
      });
  };
  const onChangeStatus = async (id, status) => {
    await API.updateBickById(id, status);
    API.getBick().then((data) => {
      setProductList(data);
    });
  };
  const onAdd = async (product) => {
    await API.addBick(product);
    API.getBick().then((data) => {
      setProductList(data);
    });
  };
  return (
    <div className="mainpage">
      <div className="mainpage__about">
        {productList
          ? productList.map((product) => {
              return (
                <Product
                  key={product.id}
                  product={product}
                  onDelete={onDelete}
                  onChangeStatus={onChangeStatus}
                />
              );
            })
          : null}
      </div>
      <div className="product__new">
        <Forma onAdd={onAdd} />
        <Stat productList={productList ? productList : []} />
      </div>
      <ToastContainer />
    </div>
  );
};
