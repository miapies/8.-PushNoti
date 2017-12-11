import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal';
import { Platform } from 'ionic-angular/platform/platform';

@Injectable()
export class PushnotificationProvider {

  constructor(private oneSignal: OneSignal,
    private platform: Platform) {
    console.log('Hello PushnotificationProvider Provider');
  }


  init_notifications() {

    if (this.platform.is('cordova')) {

      this.oneSignal.startInit('8f692374-65ff-4bf5-8af1-9cf39c3e0e22', '117196429035');

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

      this.oneSignal.handleNotificationReceived().subscribe(() => {
        // do something when notification is received
        console.log('Notificación recibida');
      });

      this.oneSignal.handleNotificationOpened().subscribe(() => {
        // do something when a notification is opened
        console.log('Notificación abierta');
      });

      this.oneSignal.endInit();

    } else {
      console.log('OneSignal no funciona en Chrome');
    }
  }
}
