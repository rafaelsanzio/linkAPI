import { injectable, inject } from 'tsyringe';

import Deal from '../infra/typeorm/schemas/Deal';

import IDealsRepository from '../repositories/IDealsRepository';

@injectable()
class GetOrdersSortByValueService {
  constructor(
    @inject('DealsRepository')
    private dealRepository: IDealsRepository,
  ) {}

  public async execute(): Promise<Deal[]> {
    const deals = await this.dealRepository.findAll();

    return deals;
  }
}

export default GetOrdersSortByValueService;
