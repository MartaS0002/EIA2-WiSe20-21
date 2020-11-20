namespace L04_Hexenkessel {

    export interface Item {
        name: string;
        price: number;
    }

    export interface Data {
        [category: string]: Item[];
    }

    export let data: Data = {
        Zutaten: [
            { name: "Spinnenbeine", price: 50 },
            { name: "Flussgras", price: 5 },
            { name: "Krötenaugen", price: 40 },
            { name: "Glibberwürmer", price: 20 },
            { name: "Schlangenschuppen", price: 65 },
            { name: "Einhornblut", price: 100 }
        ]
    };
}
