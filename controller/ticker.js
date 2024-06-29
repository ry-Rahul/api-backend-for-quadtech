import Ticker from "../models/dataModel.js";

const getTickerData = async (req, res) => {
  try {
    const data = await Ticker.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getTickerData };
