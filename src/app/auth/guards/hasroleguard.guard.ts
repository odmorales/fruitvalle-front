import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


export const canActivateChild: CanActivateChildFn =
    (route) => {

      //services
      const authServie = inject(AuthService);
      const userRoles =  authServie.userRoles;
      const router = inject(Router);

      //logica
      const requiredRoles = (route as any).data.roles as string[];

      if (!Array.isArray(requiredRoles)) { return false; }
      const hasAccess = requiredRoles.some(role => userRoles.includes(role));

      (!hasAccess) ? router.navigate(['modules']) : hasAccess;

      return hasAccess;
    };
