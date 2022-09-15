const { smsActionEnum } = require('../constants');

module.exports = {
  [smsActionEnum.WELCOME]: (name) => {
    return `${name}, welcome on our platform!`;
  },

  [smsActionEnum.LOGIN]: (name) => {
    return `${name}, welcome again!`;
  },
};
