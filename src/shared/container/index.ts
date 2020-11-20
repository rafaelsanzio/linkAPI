import { container } from 'tsyringe';

import IDealsRepository from '../../modules/deals/repositories/IDealsRepository';
import DealsRepository from '../../modules/deals/infra/typeorm/repositories/DealsRepository';

container.registerSingleton<IDealsRepository>(
  'DealsRepository',
  DealsRepository,
);
