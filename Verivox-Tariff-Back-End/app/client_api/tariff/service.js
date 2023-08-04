const WebService = require('../web/service');
const TariffHelper = require("./helper");
const { logger } = require("../../common/logger/logger");

class TariffService {
    static async calcTariff(consumption) {
        try {
            const tariffs = await WebService.getProviderTariffs();
            const calculatedAnnualCosts = tariffs.map(
                ({ type, name, ...tariffData }) => {
                    const annualCost = TariffHelper.getTariffCalculationMap(type)(tariffData, consumption);
    
                    return { name, annualCost };
                }
            );

            return calculatedAnnualCosts;
        } catch (error) {
            logger.error(error, "Failed to calculate tariffs");
        }
    }
}

module.exports = TariffService;