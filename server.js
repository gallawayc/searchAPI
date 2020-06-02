import express from 'express';
import { getACsuggestions } from './core/autoComplete';
import { getWords } from './data/getTransformWordList.js';

const app = express();
exports.appPromise = new Promise(async function (resolve, reject) {
  const words = await getWords();
  app.get('/autoComplete/:text', async (req, res) => {
    try {
      const { text } = req.params;
      const autoCompleteSuggestions = getACsuggestions(words, text);
      res.send(autoCompleteSuggestions);
    } catch (err) {
      console.log(err);
      res.status(500).send(err.toString());
    }
  });
  resolve(app);
});
