import Expo from 'expo-server-sdk'

class ExpoClient {
  engine: any

  constructor() {
    this.engine = new Expo()
  }

  isExpoPushToken(token) {
    return Expo.isExpoPushToken(token)
  }

  filterBindingsForExpo(bindings) {
    return bindings.filter((binding) => this.isExpoPushToken(binding.address))
  }

  sendNotification(bindings:any, title: string, subtitle: string, message: string, action: string) {
    return new Promise(async (resolve, reject) => {
      const filteredBindings = this.filterBindingsForExpo(bindings)
      const messages = []

      console.log('before messages')

      filteredBindings.forEach((binding) => {
        messages.push({
          to: binding.address,
          sound: 'default',
          title,
          subtitle,
          body: message,
          data: {
            action,
            title,
            subtitle,
            message,
          },
        })
      })

      console.log('after messages', messages)

      let chunks = this.engine.chunkPushNotifications(messages)
      let tickets = []

      console.log('before chunks')

      // Send the chunks to the Expo push notification service. There are
      // different strategies you could use. A simple one is to send one chunk at a
      // time, which nicely spreads the load out over time:
      for (let chunk of chunks) {
        try {
          let ticketChunk = await this.engine.sendPushNotificationsAsync(chunk);
          console.log(ticketChunk);
          tickets.push(...ticketChunk);
          // NOTE: If a ticket contains an error code in ticket.details.error, you
          // must handle it appropriately. The error codes are listed in the Expo
          // documentation:
          // https://docs.expo.io/versions/latest/guides/push-notifications#response-format
        } catch (error) {
          console.error(error);
        }
      }

      console.log('after chunks')

      let receiptIds = [];
      for (let ticket of tickets) {
        // NOTE: Not all tickets have IDs; for example, tickets for notifications
        // that could not be enqueued will have error information and no receipt ID.
        if (ticket.id) {
          receiptIds.push(ticket.id);
        }
      }

      resolve(receiptIds)
    })
  }

  async logReceipts(receiptIds) {
    let receiptIdChunks = this.engine.chunkPushNotificationReceiptIds(receiptIds);
    // Like sending notifications, there are different strategies you could use
    // to retrieve batches of receipts from the Expo service.
    for (let chunk of receiptIdChunks) {
      try {
        let receipts = await this.engine.getPushNotificationReceiptsAsync(chunk);
        console.log(receipts);

        // The receipts specify whether Apple or Google successfully received the
        // notification and information about an error, if one occurred.
        for (let receipt of receipts) {
          if (receipt.status === 'ok') {
            continue;
          } else if (receipt.status === 'error') {
            console.error(`There was an error sending a notification: ${receipt.message}`);
            throw `There was an error sending a notification: ${receipt.message}`
            if (receipt.details && receipt.details.error) {
              // The error codes are listed in the Expo documentation:
              // https://docs.expo.io/versions/latest/guides/push-notifications#response-format
              // You must handle the errors appropriately.
              console.error(`The error code is ${receipt.details.error}`);
              throw `The error code is ${receipt.details.error}`;
            }
          }
        }
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  }
}

export default ExpoClient
