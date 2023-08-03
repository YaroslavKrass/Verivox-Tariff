const WebService = require('../web/service');
const TariffHelper = require("./helper");

class TariffService {
    static async calcTariff(consumption) {
        const tariffs = await WebService.getPrividerTariffs();
        const calculatedAnnualCosts = tariffs.map(
            ({ type, name, ...tariffData }) => {
                const annualCost = TariffHelper.getTariffCalculationMap(type)(tariffData, consumption);
   
                return { name, annualCost };
            }
        );

        return calculatedAnnualCosts;
    }
}

module.exports = TariffService;