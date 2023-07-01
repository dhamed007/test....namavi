import { Injectable } from '@nestjs/common';
import { Centrifuge } from 'centrifuge';

@Injectable()
export class CentrifugoService {
  private centrifuge: Centrifuge;

  constructor() {
    const centrifugeOptions = {
      // debug: true,
      // insecure: true,
    };
    this.centrifuge = new Centrifuge('http://localhost:8000/connection/websocket');
    const centrifuge = new Centrifuge('http://localhost:8000/connection/websocket');
    
    this.centrifuge.connect();
  }

  async connect(): Promise<void> {
    await this.centrifuge.connect();
  }

  async disconnect(): Promise<void> {
    await this.centrifuge.disconnect();
  }

  // async subscribe(channel: string, callback: (message: any) => void): Promise<void> {
  //   const subscription = await this.centrifuge.subscribe(channel);
  //   subscription.on('publish', (message) => {
  //     callback(message.data);
  //   });
  // }

  // async unsubscribe(channel: string): Promise<void> {
  //   await this.centrifuge.unsubscribe(channel);
  // }

  async publish(channel: string, data: any): Promise<void> {
    await this.centrifuge.publish(channel, data);
  }
}
