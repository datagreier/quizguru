// api/notion-proxy.js
const axios = require('axios');

module.exports = async (req, res) => {
  try {
    const notionUrl = "https://api.notion.com/v1/databases/YOUR_DATABASE_ID/query";
    const apiKey = "YOUR_NOTION_SECRET_API_KEY";
    
    const response = await axios.post(
      notionUrl,
      {},
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Notion-Version": "2022-06-28",
          "Content-Type": "application/json",
        },
      }
    );
    
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error accessing Notion API: ", error.response.data);
    res.status(error.response.status).json(error.response.data);
  }
};
