import React, {createContext, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

export const ElementContext = createContext();

const RootComponent = () => {
    const [elementCount, setElementCount] = useState(0);
    console.log("-------------------- Render Root Component");
    return (
        <ElementContext.Provider value={{elementCount, setElementCount}}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ElementContext.Provider>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
      <RootComponent />
  // </React.StrictMode>
);

