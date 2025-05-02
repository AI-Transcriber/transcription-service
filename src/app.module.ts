import { Module } from '@nestjs/common';
import { TranscriptionModule } from './transcription/transcription.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TranscriptionModule,ConfigModule.forRoot({
    envFilePath: '.env.development',isGlobal:true,
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
