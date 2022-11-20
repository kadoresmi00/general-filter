const swearEn = require('../utils/swearEn.json');
const swearTr = require('../utils/swearTr.json');
const swearFr = require('../utils/swearFr.json');
module.exports = class SwearFilter {
  constructor (options = { language }) {
    if (!options.language) throw new Error('Please provide a language!');
    if (typeof options.language !== 'string') throw new TypeError('INVALID_COMMAND_TYPE: language option must be a string.');
    if (options.language.toLowerCase() !== "tr" && options.language.toLowerCase() !== "en" && options.language.toLowerCase() !== "fr") throw new Error('Please provide a valid language! Valid languages: tr, en, fr');
    this.options = options;
    this.isCheck = function (message) {
      if (!message) throw new TypeError('INVALID_MESSAGE: message option must be a string.');
      if (options.language.toLowerCase() === "tr") {
        if ((swearTr).some(kado => new RegExp("(\\b)+(" + kado + ")+(\\b)", "gui").test(message))) return true;
        return false;
      } else if (options.language.toLowerCase() === "en") {
        if ((swearEn).some(kado => new RegExp("(\\b)+(" + kado + ")+(\\b)", "gui").test(message))) return true;
        return false;
      } else if(options.language.toLowerCase() === "fr") {
        if ((swearFr).some(kado => new RegExp("(\\b)+(" + kado + ")+(\\b)", "gui").test(message))) return true;
        return false;
      }
    };
  }
}