import { Router } from 'express';

import dealsRouter from '../../../../modules/deals/infra/http/routes/deals.routes';

const routes = Router();

routes.use('/v1/deals', dealsRouter);

routes.get('/v1/info', (request, response) => {
  response.status(200).json({
    api: 'LinkAPI Technical',
    repository: 'https://github.com/rafaelsanzio/linkAPI',
    endpoints: [
      {
        route: '[GET] /v1/deals',
        description: 'Retorna os dados do banco agrupados por data e valor',
      },
      {
        route: '[GET] /v1/deals/find',
        params: 'org_name, id_pedido, numero',
        description: 'Retorna todos os dados armazenados',
      },
    ],
  });
});

export default routes;
