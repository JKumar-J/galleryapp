import React from "react";

const Card = (props) => {
  console.log(props);
  return (
    <>
      <a href={props.elem.url}>
        <div>
          <div className="h-40 w-44 bg-white overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src={props.elem.download_url}
            ></img>
          </div>
          <h2 className="text-white">{props.elem.author}</h2>
        </div>
      </a>
    </>
  );
};

export default Card;
