const { calcTariff } = require("../service");

const tariffs = [
    { annualCost: 236, name: "Product A" },
    { annualCost: 800, name: "Product B" }
];

describe("Test tariff calculation", () => {
    test("Should calculate zero-border value", async() => {
        const zeroBorderTariffs = [
            { annualCost: 60, name: "Product A" },
            { annualCost: 800, name: "Product B" }
        ];

        expect(await calcTariff(0)).toEqual(zeroBorderTariffs);
    });

    test("Should calculate top-border value", async() => {
        const topBorderTariffs = [
            { annualCost: 1160, name: "Product A" },
            { annualCost: 1100, name: "Product B" }
        ];

        expect(await calcTariff(5000)).toEqual(topBorderTariffs);
    });

    test("Should calculate regular value", async() => {
        expect(await calcTariff(800)).toEqual(tariffs);
    });
});
