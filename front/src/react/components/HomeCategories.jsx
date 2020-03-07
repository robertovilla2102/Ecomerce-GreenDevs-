import React from "react";
import { Link } from "react-router-dom";

//importando css
import {
  styleImgCategory,
  styleDivCAtegory,
  styleH
} from "../css/estilosComunes";

export default ({ categories }) => {
  return (
    <div style={{ marginBottom: "0" }}>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          {categories.map(cat => {
            return (
              <div className="img-thumbnail" style={styleDivCAtegory}>
                <Link
                  to={`/products/categories/${cat.categoryId}`}
                  className="col-xs-4"
                >
                  <img
                    src={cat.imgCategory}
                    alt="img-cactus"
                    style={styleImgCategory}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
