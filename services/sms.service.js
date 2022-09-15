const twilio = require('twilio');

const { TWILIO_ACCOUNT_SID, TWILIO_SERVICE_SID, TWILIO_AUTH_TOKEN } = require('../configs/config');

const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

module.exports = {
  sendSMS: async (phone, body) => {
    try {
      console.log(`SMS start sending | phone: ${phone} | sms message: ${body}`);

      const info = await client.messages.create({
        body,
        messagingServiceSid: TWILIO_SERVICE_SID,
        to: phone,
      });

      console.log(`SMS was sended | sms sid: ${info.sid} | sms status: ${info.status}`);
    } catch (e) {
      console.log(e.message);
    }
  }
};
