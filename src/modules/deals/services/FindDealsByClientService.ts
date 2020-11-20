import { injectable, inject } from 'tsyringe';

import Deal from '../infra/typeorm/schemas/Deal';

import IDealsRepository from '../repositories/IDealsRepository';

import AppError from '../../../shared/errors/AppError';

@injectable()
class FindDealsSortByClientService {
  constructor(
    @inject('DealsRepository')
    private dealRepository: IDealsRepository,
  ) {}

  public async execute(org_name: string): Promise<Deal[] | undefined> {
    const deals = await this.dealRepository.findByOrgName(org_name);

    return deals;
  }
}

export default FindDealsSortByClientService;
