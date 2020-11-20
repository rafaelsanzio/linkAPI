import { injectable, inject } from 'tsyringe';

import Deal from '../infra/typeorm/schemas/Deal';

import IDealsRepository from '../repositories/IDealsRepository';

@injectable()
class FindDealsSortByDateService {
  constructor(
    @inject('DealsRepository')
    private dealRepository: IDealsRepository,
  ) {}

  public async execute(): Promise<Deal[]> {
    const deals = await this.dealRepository.dealsByDate();
    return deals;
  }
}

export default FindDealsSortByDateService;
