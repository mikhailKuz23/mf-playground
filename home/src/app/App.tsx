import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  console.log("render remote");

  useEffect(() => {
    return () => {
      console.log("unmount remote");
    };
  }, []);

  return (
    <>
      <button
        onClick={() => {
          navigate("create");
        }}
      >
        go to create route
      </button>
      <button
        onClick={() => {
          navigate("");
        }}
      >
        go to home
      </button>
      <Routes>
        <Route path="/" element={<div>home page</div>} />
        <Route path="create" element={<div>form page</div>} />
      </Routes>
    </>
  );
};

export default App;
