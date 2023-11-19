import { MenuItem } from "./types";

export const menuData: Record<'beverages' | 'food', MenuItem[]> = {
    "beverages": [
        {
            name: "Caffe",
            cost: 1.3
        },
        {
            name: "Cappuccino",
            cost: 2
        },
        {
            name: "CoCa Cola",
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
            name: "Torta",
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