import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { UserStatusService } from './user-status.service';
import { kafkaModuleFactory } from '../kafka';

@Module({
  imports: [HttpModule, ConfigModule, kafkaModuleFactory()],
  providers: [UserStatusService],
  exports: [UserStatusService]
})
export class UserStatusModule {}
