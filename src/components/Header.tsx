import React from "react"

type Props = {
    activeSection: "food" | "beverages" | "cards";
    handleSectionClick: (section: "food" | "beverages" | "cards") => void;
}

export const Header: React.FC<Props> = ({ activeSection, handleSectionClick }) => {
    return (
        <header className="container text-center mb-8">
            <p className="text-4xl border-4 border-red-600 font-bold mb-3 py-2">
                MENU'
            </p>
            <img src="/clan.png" alt="clan in val codera" /> {/** immagine*/}
            <p className="text-l font-semibold my-4">
                Clan Agorà / Noviziato Cassiopea Iglesias 6
            </p>
            <div>
                <button className={`text-xl font-semibold mr-5 border-red-600 ${activeSection === "food" ? "border-b-4" : ""}`}
                    onClick={() => handleSectionClick("food")}>
                    Cibo
                </button>
                <button className={`text-xl font-semibold mr-5 border-red-600 ${activeSection === "beverages" ? "border-b-4" : ""}`}
                    onClick={() => handleSectionClick("beverages")}>
                    Bevande
                </button>
                <button className={`text-xl font-semibold border-red-600 ${activeSection === "cards" ? "border-b-4" : ""}`}
                    onClick={() => handleSectionClick("cards")}>
                    Tessere
                </button>
            </div>
        </header>
    )
}
