import Deal from '../infra/typeorm/schemas/Deal';

import ICreateDealDTO from '../dtos/ICreateDealDTO';

export default interface IDealsRepository {
  create(deal: ICreateDealDTO): Promise<Deal>;
  findByOrgName(org_name: string): Promise<Deal[] | undefined>;
  findAll(): Promise<Deal[]>;
  dealsByDate(): Promise<any>;
}
