import React, { useState } from "react";
import axios from "axios";

export default function tambah() {
  const [state, setstate] = useState({
    name: "",
    image: "",
  });
  const kirim = () => {
    const formData = new FormData();
    formData.append("name", state.name);
    formData.append("image", state.image);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    axios
      .post("http://localhost:4000/api/supplier", config, formData, config)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <input type="text" onChange={(e) => setstate({ ...state, name: e.target.value })} />
      <input
        type="file"
        onChange={(e) => {
          setstate({ ...state, image: e.target.files[0] });
          console.log(e.target.files[0]);
        }}
      />
      <button onClick={kirim}>Kirim</button>
    </div>
  );
}
