import React, { useState, useEffect } from "react";
import axios from "axios";

const HomePage = () => {
  const [cateloryList, setCateloryList] = useState([]);
  const [choseNumber, setChoseNumber] = useState("");
  const [choseCatelory, setChoseCatelory] = useState("");
  const [choseLevel, setChoseLevel] = useState("");

  const level = [
    { id: 0, level: "easy" },
    { id: 1, level: "medium" },
    { id: 2, level: "hard" },
  ];

  const loadCatelory = () => {
    axios
      .get("http://localhost:3000/api/v1/category")
      .then((res) => {
        console.log(res.data);
        setCateloryList(res.data.categories);
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const info: any = {
      Number: choseNumber,
      Catelory: choseCatelory,
      Difficulty: choseLevel,
    };
    localStorage.setItem("infor", JSON.stringify(info));
  };

  useEffect(() => {
    loadCatelory();
  }, []);

  return (
    <div className="container w-50">
      <h3>Setup Quizz</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Number of question</label>
          <input
            type="number"
            className="form-control"
            value={choseNumber}
            onChange={(e) => setChoseNumber(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <select
            className="form-select"
            value={choseCatelory}
            onChange={(e) => setChoseCatelory(e.target.value)}
          >
            <option value="">Open this select menu</option>
            {cateloryList?.map((e: any, i: any) => (
              <option value={e.category_id} key={i}>
                {e.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Difficulty</label>
          <select
            className="form-select"
            aria-label="Default select example"
            value={choseLevel} // Sử dụng value ở đây
            onChange={(e) => setChoseLevel(e.target.value)}
          >
            <option value="">Open this select menu</option>
            {level?.map((e, i) => (
              <option value={e.level} key={i}>
                {e.level}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-warning w-100">
          Start
        </button>
      </form>
    </div>
  );
};

export default HomePage;
