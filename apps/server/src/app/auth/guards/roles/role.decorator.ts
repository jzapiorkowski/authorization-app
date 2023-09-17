import { ROLES_KEY } from '../../../../constants';
import { ROLE } from '@authorization-app/libs';
import { SetMetadata } from '@nestjs/common';

export const Roles = (...roles: ROLE[]) => SetMetadata(ROLES_KEY, roles);
