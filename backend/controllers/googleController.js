// Imports the Google Cloud client library
const {Translate} = require('@google-cloud/translate').v2;

// Creates a client
const translate = new Translate({projectId: 'consoleavinash'});
console.log('Translation11s:');
/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
// const text = 'The text to translate, e.g. Hello, world!';
// const target = 'The target language, e.g. ru';

//exports.translateText() = async (req, res, next){
exports.translateText = async (req, res, next) => {  
  // Translates the text into the target language. "text" can be a string for
  // translating a single piece of text, or an array of strings for translating
  // multiple texts.
  // let text="Test Apple";
  // let target="ru";

  // let [translations] = await translate.translate(text, target);
  // translations = Array.isArray(translations) ? translations : [translations];
  // console.log('Translations:');
  // translations.forEach((translation, i) => {
  //   console.log(`${text[i]} => (${target}) ${translation}`);
  // });

  // The text to translate
  const text = 'Hello, world!';

  // The target language
  const target = 'ru';

  // Translates some text into Russian
  const [translation] = await translate.translate(text, target);
  console.log(`Text: ${text}`);
  console.log(`Translation: ${translation}`);

}

//exports.translateText();