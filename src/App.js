import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./Page/Create";
import Event from "./Page/Event";
import Home from "./Page/Home";

function App() {
  const [data, setData] = useState({});
  const [data2, setData2] = useState({});
  const [data3, setData3] = useState({});
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/create"
          element={
            <Create
              setData={setData}
              setData2={setData2}
              setData3={setData3}
            ></Create>
          }
        ></Route>
        <Route
          path="/event"
          element={<Event data={data} data2={data2} data3={data3}></Event>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
