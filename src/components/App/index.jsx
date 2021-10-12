import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Mainsection from "../MainSection";
import "./_.scss";

export function App(params) {
  return (
    <div className="app">
      <Header />
      <Mainsection />
      <Footer />
    </div>
  );
}
export default App;
