import { AdvancedConsoleLogger, getMongoRepository, MongoRepository } from 'typeorm';

import IDealsRepository from '../../../repositories/IDealsRepository';

import ICreateDealDTO from '../../../dtos/ICreateDealDTO';

import Deal from '../schemas/Deal';


class DealsRepository implements IDealsRepository {
  private ormRepository: MongoRepository<Deal>;

  constructor() {
    this.ormRepository = getMongoRepository(Deal);
  }

  public async create({ numero, id_pedido, value, org_name }: ICreateDealDTO): Promise<Deal> {
    const deal = this.ormRepository.create({
      numero, id_pedido, value, org_name
    });

    await this.ormRepository.save(deal);

    return deal;
  }

  public async findAll(): Promise<Deal[]> {
    const findDeals = await this.ormRepository.find();

    return findDeals;
  }

  public async findByOrgName(org_name: string): Promise<Deal[] | undefined> {
    const findDeals = await this.ormRepository.find({
      where: { org_name },
    });

    return findDeals;
  }

  public async dealsByDate(): Promise<any> {
    const orders = this.ormRepository.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: '%d/%m/%Y', date: '$created_at' } },
          total: {$sum: '$value'},
        },
      },
    ]);

    let deals ={}
    for await (const doc of orders) {
      deals = doc;
    }

    return deals;
  }
}

export default DealsRepository;
