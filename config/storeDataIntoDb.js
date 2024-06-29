import Ticker from "../models/dataModel.js";

const fetchData = async () => {
  try {
    const response = await fetch("https://api.wazirx.com/api/v2/tickers");
    const data = await response.json();
    const topTenData = Object.values(data)
      .sort((a, b) => b.baseVolume - a.baseVolume)
      .slice(0, 10);
    return topTenData;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const fetchAndStoreData = async () => {
  try {
    const data = await fetchData();
    await Ticker.deleteMany();
    data.forEach(async (item) => {
      const ticker = new Ticker({
        name: item.name,
        last: item.last,
        buy: item.buy,
        sell: item.sell,
        volume: item.volume,
        base_unit: item.base_unit,
      });
      await ticker.save();
    });
  } catch (error) {
    console.error(error);
  }
};

fetchAndStoreData();
export { fetchData };
