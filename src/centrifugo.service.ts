import { Injectable } from '@nestjs/common';
import { Centrifuge, TransportEndpoint } from 'centrifuge';

@Injectable()
export class CentrifugoService {
  private centrifuge: Centrifuge;

  constructor() {
    const centrifugeOptions = {
      // debug: true,
      // insecure: true,
    };

    const centrifugeUrl = 'ws://localhost:8000/connection/websocket';
    this.centrifuge = new Centrifuge(centrifugeUrl, centrifugeOptions);
    
    this.centrifuge.connect();
    
  
    
  }

  async connect(): Promise<void> {
    await this.centrifuge.connect();
  }

  async disconnect(): Promise<void> {
    await this.centrifuge.disconnect();
  }

  async publish(channel: string, data: any): Promise<void> {
    await this.centrifuge.publish(channel, data);
  }
}
