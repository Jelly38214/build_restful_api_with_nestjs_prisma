import { INestApplication, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  /**
   * @description The  `enableShutdownHooks` definition is needed to ensure your application shuts down gracefully. More information is available in the NestJS docs about prism
   * @param app 
   */
  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
