import React from "react";
import stylesSheet from "../app.module.css";

const Name = () => {
  return (
    <div className={`${stylesSheet.container} ${stylesSheet.name} `}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
      culpa quod quam reiciendis nemo doloribus beatae perferendis explicabo
      alias deleniti, rerum iure exercitationem ab necessitatibus, sint dolorum
      corporis, inventore magni.
    </div>
  );
};

export default Name;
