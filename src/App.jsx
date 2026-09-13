import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./componenets/Card";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(
    function () {
      getData();
    },
    [page]
  );

  const getData = async () => {
    console.log(page);
    const { data } = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=18`
    );
    setUserData(data);
    console.log(data);
  };

  let printuserData = " No User Available";

  if (userData.length > 0) {
    printuserData = userData.map(function (elem, idx) {
      return <Card elem={elem} />;
    });
  }

  return (
    <div className="App">
      <div className="flex flex-wrap gap-5 bg-black p-3 justify-between">
        {printuserData}
      </div>
      <div className="flex justify-center gap-5 bg-black">
        <button
          className="bg-amber-500 text-black ronded px-4 font-semibold"
          onClick={() => {
            if (page > 1) {
              setPage(page - 1);
              console.log(page);
            }
          }}
        >
          PREV
        </button>
        <h4 className="text-white">Page {page}</h4>
        <button
          onClick={() => {
            setPage(page + 1);
            console.log(page);
          }}
          className="bg-amber-500 text-black ronded px-4 font-semibold"
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default App;
