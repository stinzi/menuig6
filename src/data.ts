import { MenuItem } from "./types";

export const menuData: Record<'beverages' | 'food', MenuItem[]> = {
    "beverages": [
        {
            name: "Caffe",
            description: "normale e decaffeinato",
            cost: 1.50,
        },
        {
            name: "ginseng",
            cost: 1.50,
        },
        {
            name: "succhi",
            description: "",
            cost: 2,
        },
        {
            name: "té e tisane",
            description: "(calde)",
            cost: 1.50,
        },
        {
            name: "bibite",
            description: "cocacola,estathe",
            cost: 2,
        },
        {
            name: "amari e liquori",
            description: "quali",
            cost: 3,
        }
        ],
    
    "food":[
        {
            name: "Pizza",
            description: "pizza margherita",
            cost: 2,
        },
        {
            name: "Dolci",
            description: "torta,crostate,brownies",
            cost: 5,
        },
        {
            name: "biscotti",
            description: "es..",
            cost: 4,
        },
        {
            name: "Salato",
            description: "pizzette,torte salate",
            cost: 2,
        },
        {
            name: "pancake",
            description: "marmellata,nutella",
            cost: 3 
        },
    ]
}