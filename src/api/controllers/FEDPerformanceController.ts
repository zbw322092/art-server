import { JsonController, Get } from 'routing-controllers';

@JsonController('/test')
export class TestController {

  @Get('/data')
  public async getTestData() {
    return { name: 'bw' };
  }
}
