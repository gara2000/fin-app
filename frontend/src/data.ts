import { Item } from "./app/shared/models/item";

export const assets: Item[] = [
    {
        name: "Scolarship",
        type: "asset",
        currValue: 1200
    },
    {
        name: "Last Month Net",
        type: "asset",
        currValue: 100
    }
]

export const liabilities: Item[] = [
    {
        name: "Rent",
        type: "liability",
        currValue: 450
    },
    {
        name: "Savings",
        type: "liability",
        currValue: 200
    },
    {
        name: "Investment",
        type: "liability",
        currValue: 400
    }
]