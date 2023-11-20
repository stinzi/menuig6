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
            description: "",
            cost: 1.50,
        },
        {
            name: "bibite",
            description: "cocacola,",
            cost: 2
        },
    ],
    "food": [
        {
            name: "Pizza",
            description: "pizza margherita",
            cost: 2,
        },
        {
            name: "Torte",
            description: "torta di mele",
            cost: 5,
        },
        {
            name: "Panino",
            description: "panino con mortadella",
            cost: 4,
        },
        {
            name: "frutta",
            description: "mele,pere",
            cost: 2,
        }
    ]
}