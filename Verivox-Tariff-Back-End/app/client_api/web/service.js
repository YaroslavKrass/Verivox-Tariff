const fs = require("fs/promises");
const { errorMessages } = require("../../common/constants/errors.const");

class WebService {
    static async getProviderTariffs() {
        try {
            const tariffs = await fs.readFile("./tariffs-data.json");
    
            return JSON.parse(tariffs);
        } catch (error) {
            throw new Error(errorMessages.PROVIDER_ERROR);
        }
    }
}

module.exports = WebService;