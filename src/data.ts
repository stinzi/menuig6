import { MenuItem } from "./types";

export const menuData: Record<'beverages' | 'food' | 'cards', MenuItem[]> = {
    "beverages": [
        {
            name: "Caffe",
            description: "normale e decaffeinato",
            cost: 1,
        },
        {
            name: "Ginseng",
            cost: 1.50,
        },
        {
            name: "Succhi",
            cost: 2,
        },
        {
            name: "Té e tisane",
            description: "(calde)",
            cost: 1.50,
        },
        {
            name: "Bibite",
            description: "cocacola, estathe",
            cost: 2,
        },
        {
            name: "Amari e Liquori",
            description: "acqua vite, mirto, montenegro",
            cost: 2,
        }
    ],

    "food": [
        {
            name: "Dolci",
            description: "torta, crostate, brownies",
            cost: 1.50,
        },
        {
            name: "Ciambelline",
            description: "(con marmellata)",
            cost: 1,
        },
        {
            name: "Pabassine",
            cost: 2,
        },
        {
            name: "Salato",
            description: "pizzette, torte salate",
            cost: 1.50,
        },
        {
            name: "Tramezzini",
            description: "salame, pomodoro e maionese",
            cost: 1.50,
        },
        {
            name: "Waffle",
            description: "marmellata, nutella",
            cost: 3,
        },
        {
            name: "Biscotti",
            description: "frollini e frollini con marmellata",
            cost: 0.50,
        },
    ],

    "cards": [
        {
            name: "Tessera S",
            description: "10 slot da 0.50cent",
            cost: 5,
        },
        {
            name: "Tessera L",
            description: "20 slot da 0.50cent ",
            cost: 10,
        },
    ]
}