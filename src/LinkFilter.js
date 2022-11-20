module.exports = class LinkFilter {
  constructor (options = { all }) {
    if (!options.all) options.all = true
    let regex = {
      all: /(https:\/\/)?(www\.)?(reddit\.com|discord\.gg|discord\.me|discordapp\.com\/invite|discord\.com\/invite|youtube\.com|twitch\.tv|twitter\.com|instagram\.com|facebook\.com|tiktok\.com|tumblr\.com|pinterest\.com)\/([a-z0-9-.]+)?/i,
      all2: /(http[s]?:\/\/)(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/gi
    }
    this.options = options;
    this.isCheck = function (message) {
      if (!message) throw new TypeError('INVALID_MESSAGE: message option must be a string.');
      if (typeof message !== 'string') throw new TypeError('INVALID_COMMAND_TYPE: message option must be a string.');
      if (regex.all.test(message) || regex.all2.test(message)) return true;
      return false;
    };
  }
}