import axios from "axios";
import { CryptoData } from "../types/crypto";

const api = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
});

export const getCryptoData = async (): Promise<CryptoData[]> => {
  const response = await api.get("/coins/markets", {
    params: {
      vs_currency: "usd",
      order: "market_cap_desc",
      per_page: 20,
      page: 1,
      sparkline: true,
    },
  });
  return response.data;
};

export const getCryptoHistory = async (id: string, days: number = 7) => {
  const response = await api.get(`/coins/${id}/market_chart`, {
    params: {
      vs_currency: "usd",
      days,
    },
  });
  return response.data.prices.map((price: any) => price[1]);
};
