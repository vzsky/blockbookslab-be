import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { VerifyLoginDto } from 'src/dto/verifyLogin.dto';
import { Public } from 'src/helper/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Get('test/:address')
  async test(@Param() params) {
    console.log({
      env: process.env.NODE_ENV,
      msg: 'up and running',
    });
    return await this.authService.testCreateUser(params.address);
  }

  @Public()
  @Get('nonce')
  async getNonce() {
    return await this.authService.getNonce();
  }

  @Public()
  @Post('verify')
  async postVerify(@Body() req: VerifyLoginDto) {
    return await this.authService.verify(req);
  }
}

// @Get('notify')
// async notify(@Req() req: Request, @Res() res: Response) {
//   res.json(await this.authService.sendNotification());
// }
