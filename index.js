const express = require("express");
require("dotenv").config();

const app = express();

const PORT = process.env.port || 4500

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const userInput = process.argv[2] || "Hello World"

async function main() {
    try {
      const chatCompletion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: userInput }],
      });
      console.log(chatCompletion.data.choices[0].message);
    } catch (error) {
      console.error("Error:", error);
    }
  }

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);

})
main()