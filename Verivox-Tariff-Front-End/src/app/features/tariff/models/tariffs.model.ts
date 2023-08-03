export interface TariffResp {
  success: boolean;
  consumption: Tariff[];
}

export interface Tariff {
  name: string;
  annualCost: number;
}
