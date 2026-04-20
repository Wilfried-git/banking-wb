import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// On étend la stratégie 'jwt' que nous avons configurée précédemment
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') { }