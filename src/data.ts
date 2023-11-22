import { MenuItem } from "./types";

export const menuData: Record<'beverages' | 'food', MenuItem[]> = {
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
            description: "",
            cost: 2,
        },
        {
            name: "Té e tisane",
            description: "(calde)",
            cost: 1.50,
        },
        {
            name: "Bibite",
            description: "cocacola,estathe",
            cost: 2,
        },
        {
            name: "Amari e Liquori",
            description: "quali",
            cost: 3,
        }
        ],
    
    "food":[

        {
            name: "Dolci",
            description: "torta,crostate,brownies",
            cost: 1.50,
        },
        {
            name: "Pabassine",
            cost: 2,
        },
        {
            name: "Salato",
            description: "pizzette,torte salate",
            cost: 1.50 ,
        },
        {
            name: "Waffle",
            description: "marmellata,nutella",
            cost: 3 , 
        },
        {
            name: "Biscotti",
            description: "frollini e frollini con marmellata",
            cost: 0.50 ,
        },

    ]
}