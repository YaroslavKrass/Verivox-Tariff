const { MONTHS } = require("../../common/constants/simple-constants.const");
const { CENT_MODIFIER, TARIFF_TYPE } = require("../../common/constants/tariffs.const");
const { logger } = require("../../common/logger/logger");

class TariffHelper {
    static tariffsMap = new Map([
        [TARIFF_TYPE.basicTariff, (tariff, consumption) => this.calcBasicTariff(tariff, consumption)],
        [TARIFF_TYPE.packagedTariff, (tariff, consumption) => this.calcPackagedTariff(tariff, consumption)]
      ]);
 
    static getTariffCalculationMap(tariffType) {
        return this.tariffsMap.get(tariffType);
    }

    static calcBasicTariff(tariff, consumption) {
        try {
            const annualCost =
                MONTHS * tariff.baseCost +
                consumption * (tariff.additionalKwhCost * CENT_MODIFIER); 
            return annualCost;
        } catch (error) {
            logger.error(error, "Error while calculating basic tariff");
        }
    };
    
    static calcPackagedTariff(tariff, consumption) {
        try {
            const annualCost =
                consumption <= tariff.includedKwh ?
                tariff.baseCost :
                calcOverspentPackagedTariff(tariff, consumption);
            return annualCost;
        } catch (error) {
            logger.error(error, "Error while calculating packaged tariff");
        }
    };

    static calcOverspentPackagedTariff(tariff, consumption) {
        try {
            const annualCost =
                (consumption - tariff.includedKwh) *
                (tariff.additionalKwhCost * CENT_MODIFIER) +
                tariff.baseCost;
            return annualCost;
        } catch (error) {
            logger.error(error, "Error while calculating overspent packaged tariff");
        }
    };
}

module.exports = TariffHelper;