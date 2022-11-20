module.exports = class WordFilter {
  constructor (options = { words }) {
    if (!options.words) throw new Error('Please provide words!');
    if (!Array.isArray(options.words)) throw new TypeError('INVALID_COMMAND_TYPE: words option must be an array.');
    this.wordsAll = options.words;
    this.isCheck = function (message) {
      if (!message) throw new TypeError('INVALID_MESSAGE: message option must be a string.');
      if (typeof message !== 'string') throw new TypeError('INVALID_COMMAND_TYPE: message option must be a string.');
      if ((this.wordsAll).some(kado => new RegExp("(\\b)+(" + kado + ")+(\\b)", "gui").test(message))) return true;
      return false;
    };
  }
}