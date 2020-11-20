import { Request, Response } from 'express';
import { container } from 'tsyringe';
import axios from 'axios'

import CreateDealService from '../../../services/CreateDealService';
import FindDealsSortByDateService from '../../../services/FindDealsSortByDateService';
import FindAllDealsService from '../../../services/FindAllDealsService';
import AppError from '../../../../../shared/errors/AppError';

export default class DealsController {
  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const dealsWon = await axios.get(
        `${process.env.PIPEDRIVE_URL}/deals?status=won&start=0&api_token=${process.env.PIPEDRIVE_TOKEN}`
      );
      if (!dealsWon) {
        throw new AppError('Error getting deals Won!')
      }

      const { data } = dealsWon.data;

      const createDeals = container.resolve(CreateDealService);
      const findDealsSortByDateService = container.resolve(FindDealsSortByDateService);

      const deals = await data.map(async (deal: any) => {
        const dealOrdered = {
          id_pedido: deal.id,
          org_name: deal.org_name,
          value: deal.value,
        }

        await createDeals.execute(dealOrdered);
      });

      await Promise.all(deals)

      const dealsGroup = await findDealsSortByDateService.execute();

      return response.status(200).json(dealsGroup);
    } catch (err) {
      throw new AppError(err.message);
    }
  }

  public async findClient(request: Request, response: Response): Promise<Response> {
    try {
      const { org_name, numero, id_pedido } = request.query;

      const findAllDealsService = container.resolve(FindAllDealsService);

      let deals = await findAllDealsService.execute();

      if (org_name) {
        deals = deals.filter(deal => deal.org_name === org_name);
      }
      if (numero) {
        deals = deals.filter(deal => deal.numero === Number(numero));
      }
      if (id_pedido) {
        deals = deals.filter(deal => deal.id_pedido === Number(id_pedido));
      }

      return response.status(200).json(deals);
    } catch (err) {
      return response.status(400).json(err.message);
    }
  }
}
