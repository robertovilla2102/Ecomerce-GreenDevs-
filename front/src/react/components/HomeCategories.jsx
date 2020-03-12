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
    <div style={{ marginTop: "5%", marginBottom: "5%" }}>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          {categories.map(cat => {
            return (
              <div
                key={cat.id}
                className="img-thumbnail"
                style={styleDivCAtegory}
              >
                <Link
                  to={`/products/categories/${cat.id}`}
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
