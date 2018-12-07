import { createExpressServer } from 'routing-controllers';
import { join } from 'path';
import { createDBConnection } from '../common/db';

export class Application {

  public get controllers() {
    return [
      join(__dirname, './controllers/*')
    ];
  }

  public get interceptors() {
    return [];
  }

  public get middlewares() {
    return [];
  }

  private async createApp(): Promise<any> {
    await createDBConnection();
    return await createExpressServer({
      controllers: this.controllers,
      middlewares: this.middlewares,
      interceptors: this.interceptors,
    });
  }

  public async start(port: number) {
    const app = await this.createApp();
    return app.listen(port);
  }
}
