import { AuthGuard } from '@nestjs/passport';

export class JwtAuthGuard extends AuthGuard('jwt') {
  // JwtAuthGuard is alias for the 'AuthGuard' in this example
}
