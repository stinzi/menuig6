import { useCallback, useState } from "react";
import { Header } from "./components/Header";
import { MenuItem } from "./components/MenuItem";
import { menuData } from "./data";
import "./index.css";

function App() {
  const [menuSection, setMenuSection] = useState<"food" | "beverages" | "cards" >("beverages");

  const handleMenuSectionChange = useCallback((section: "food" | "beverages" | "cards") => {
    setMenuSection(section);
  }, [setMenuSection]);

  return (
    <div className="container max-w-md mx-auto">
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
      <h2 className="text-black-400 text-xl text-center m-4 font-semibold" >
                        I nostri viaggi:

      </h2>
      <div className="flex flex-col gap-3">  {/** contenitore*/}
        <img src="/monte.png"/> {/** immagine*/}
        <img src="/vulcano.png" /> {/** immagine*/}
        <img src="/aereo.png" /> {/** immagine*/}
        <img src="/luna.png" className="w-full"/>
      </div>
    </div>
  );
}

export default App;
