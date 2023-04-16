import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "./routes/AppRouter";
import { BrowserRouter } from "react-router-dom";
import Layout from "./comonents/layout/Layout";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className=" flex flex-row bg-gray-300  ">
        <Layout />
        <div className="flex flex-col  w-screen">
          <AppRouter />
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
