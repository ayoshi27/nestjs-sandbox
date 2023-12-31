import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    console.log('role guard');
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    console.log('roles: ', roles);
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    // const user = request.user;
    // console.log('request: ', request);

    // return matchRoles(roles, user.roles);
    return false;
  }
}
