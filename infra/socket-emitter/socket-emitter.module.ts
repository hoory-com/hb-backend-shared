import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SocketEmitter } from './socket-emitter';
import { SOCKET_EMITTER_CONFIG } from './constants';
import { SocketEmitterConfig } from './types';

@Module({})
export class SocketEmitterModule {
  static forRootAsync(config: SocketEmitterConfig): DynamicModule {
    return {
      module: SocketEmitterModule,
      imports: [ConfigModule],
      providers: [
        {
          provide: SOCKET_EMITTER_CONFIG,
          useFactory: (configService: ConfigService) => ({
            redisUrl: configService.get(config.redisUrlConfigKey)
          }),
          inject: [ConfigService]
        },
        SocketEmitter
      ],
      exports: [SocketEmitter]
    };
  }
}
