const { MONTHS } = require("../../common/constants/simple-constants.const");
const { CENT_MODIFIER, TARIFF_TYPE } = require("../../common/constants/tariffs.const");

class TariffHelper {
    static tariffsMap = new Map([
        [TARIFF_TYPE.basicTariff, (tariff, consumption) => this.calcBasicTariff(tariff, consumption)],
        [TARIFF_TYPE.packagedTariff, (tariff, consumption) => this.calcPackagedTariff(tariff, consumption)]
      ]);
 
    static getTariffCalculationMap(tariffType) {
        return this.tariffsMap.get(tariffType);
    }

    static calcBasicTariff(tariff, consumption) {
        return MONTHS * tariff.baseCost + consumption * (tariff.additionalKwhCost * CENT_MODIFIER); 
    };
    
    static calcPackagedTariff(tariff, consumption) {
        return consumption <= tariff.includedKwh ?
            tariff.baseCost : this.calcOverpricePackagedTariff(tariff, consumption);
    };

    static calcOverpricePackagedTariff(tariff, consumption) {
        return (consumption - tariff.includedKwh) * (tariff.additionalKwhCost * CENT_MODIFIER) + tariff.baseCost;
    };
}

module.exports = TariffHelper;