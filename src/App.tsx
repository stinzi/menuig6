import { useCallback, useState } from "react";
import { Header } from "./components/Header";
import { MenuItem } from "./components/MenuItem";
import { menuData } from "./data";
import "./index.css";

function App() {
  const [menuSection, setMenuSection] = useState<"food" | "beverages" | "cards">("beverages");

  const handleMenuSectionChange = useCallback((section: "food" | "beverages" | "cards") => {
    setMenuSection(section);
  }, [setMenuSection]);

  return (
    <div className="container max-w-md mx-auto p-5">
      <Header activeSection={menuSection} handleSectionClick={handleMenuSectionChange} />
      <>
        {menuSection === "food" && (
          <div className="cibo">
            {menuData.food.map((item) => (
              <MenuItem
                {...item}
              />
            ))}
          </div>
        )}
        {menuSection === "beverages" && (
          <div className="bere">
            {menuData.beverages.map((item) => (
              <MenuItem
                {...item}
              />
            ))}
          </div>
        )}
        {menuSection === "cards" && (
          <div className="carte">
            {menuData.cards.map((item) => (
              <MenuItem
                {...item}
              />
            ))}
          </div>
        )}
      </>
      <div className="flex flex-col gap-3 mt-6">  {/** contenitore*/}
        <h2 className="font-bold text-black-400 text-xl text-center mb-3" >
          I nostri viaggi
        </h2>
        <img src="/monte.png" alt="clan in montagna" /> {/** immagine*/}
        <img src="/vulcano.png" alt="clan sul vulcano" /> {/** immagine*/}
        <img src="/aereo.png" alt="clan sull'aereo" /> {/** immagine*/}
        <img src="/luna.png" alt="clan sulla luna" className="w-full" />
      </div>
    </div>
  );
}

export default App;
