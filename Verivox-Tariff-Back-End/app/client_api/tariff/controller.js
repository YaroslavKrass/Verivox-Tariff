
const TariffService = require('./service');
const { errorMessages } = require("../../common/constants/errors.const");

class TariffController {
  static getTariffs() {
        return async (req, res) => {
            try {
                const { consumption } = req.query;
                const tariff = await TariffService.calcTariff(consumption);

                res.status(200).json({
                    success: true,
                    consumption: tariff
                });
            } catch (error) {
                logger.error(error, "Error while calculating tariffs");
                res.status(400).json({
                    success: false,
                    message: errorMessages.INTERNAL_ERROR
                });
            }
        }
    }
}

module.exports = TariffController;