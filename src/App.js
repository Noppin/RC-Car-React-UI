import React, {createContext} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Content } from "./Content";
import {InfoSection} from "./InfoSection"
import { ActionSection } from "./ActionSection";
export const AppContext = createContext();
function App() {
  return (
   <AppContext.Provider value = {AppContext}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={
        <main id="landing-page">
    <div className="container content">
      <Content/>
    </div>
    </main>
      }/>
      <Route path="/manPage" element={
        <section id="project-page">
        <InfoSection/>
        <ActionSection/>
      </section>
      }/>

    </Routes>
    </BrowserRouter>
   </AppContext.Provider>
  );
}

export default App;
