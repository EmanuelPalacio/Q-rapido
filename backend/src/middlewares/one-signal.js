const OneSignal = require('@onesignal/node-onesignal');
const { ONESIGNAL_API_KEY } = require('../config/globals');

const ONESIGNAL_APP_ID = '560e5ab2-9ceb-4379-8cef-545851f0b9e9';

const tokenProvider = {
  getToken() {
      return ONESIGNAL_API_KEY;
  }
};

const configuration = OneSignal.createConfiguration({
  authMethods: {
    app_key: {
      tokenProvider: tokenProvider,
    }
  }
});

const client = new OneSignal.DefaultApi(configuration);

const notification = new OneSignal.Notification();
notification.template_id = 'b1c836f8-bef5-4615-88c6-7f525cb57265';
notification.priority = 1;
notification.include_player_ids = ['eee47dab-b232-430a-8203-242191c3f344'];
// notification.included_segments = ['Subscribed Users']; 
notification.app_id = ONESIGNAL_APP_ID;
notification.contents = {
  en: '¡Su pedido está listo! 😍 Que lo disfrute',
  es: '¡Su pedido está listo! 😍 Que lo disfrute',
}


const crearNotificacion =  async (AppId) => {

  const {id} = await client.createNotification(notification);
 
  
  const response = await client.getNotification(AppId || ONESIGNAL_APP_ID,id);
  response && console.log("Notificación enviada")
  return response;

}


module.exports = {
  crearNotificacion
}