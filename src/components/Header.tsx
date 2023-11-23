import React from "react"

type Props = {
    activeSection: "food" | "beverages" | "cards";
    handleSectionClick: (section: "food" | "beverages" | "cards") => void;
}

export const Header: React.FC<Props> = ({ activeSection, handleSectionClick }) => {
    return (
        <header className="container text-center p-5 mb-5">
            <p className="text-4xl border-4 border-red-400 font-bold mb-3">
                MENU'
            </p>
            <img src="/clan.png"/> {/** immagine*/}
            <p className="text-l font-semibold my-4">
                Clan Agorà / Noviziato Cassiopea Iglesias 6
            </p>
            <div>
                <button className={`text-xl font-semibold mr-5 border-red-400 ${activeSection === "food" ? "border-b-2" : ""}`}
                    onClick={() => handleSectionClick("food")}>
                    Mangiare
                </button>
                <button className={`text-xl font-semibold mr-5 border-red-400 ${activeSection === "beverages" ? "border-b-2" : ""}`}
                    onClick={() => handleSectionClick("beverages")}>
                    Bere
                </button>
                <button className={`text-xl font-semibold border-red-400 ${activeSection === "cards" ? "border-b-2" : ""}`}
                    onClick={() => handleSectionClick("cards")}>
                    Tessere
                </button>
            </div>
        </header>
    )
}
