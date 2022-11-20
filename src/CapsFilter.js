module.exports = class CapsFilter {
  constructor (options = { percentAge }) {
    this.percentAge = options.percentAge || 70;
    this.options = options;
    this.isCheck = function (message) {
      if (!message) throw new TypeError('INVALID_MESSAGE: message option must be a string.');
      if (typeof message !== 'string') throw new TypeError('INVALID_COMMAND_TYPE: message option must be a string.');
      if (message.length > 5) {
        let kado = ((message.match(/[A-ZĞÇÖIÜ]/gm) || []).length);
        if (kado > message.length / 100 * this.percentAge) return true;
        return false;
      };
    }
  }
}