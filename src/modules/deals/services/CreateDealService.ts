import { injectable, inject } from 'tsyringe';
import jsonxml from 'jsontoxml'
import axios from 'axios'

import IDealsRepository from '../repositories/IDealsRepository';
//import AppError from '../../../shared/errors/AppError';

@injectable()
class CreateOrderService {
  constructor(
    @inject('DealsRepository')
    private dealRepository: IDealsRepository,
  ) {}

  public async execute(deal: any): Promise<any> {
    const xml = jsonxml(
      {
        pedido: [
          {
            name: 'cliente',
            children: [
              { name: 'nome', text: deal.org_name || 'RSTech' },
              { name: 'cpf_cnpj', text: '273.792.620-33' },
              { name: 'ie', text: '137187-58' },
              { name: 'endereco', text: 'Rua Mario Prado' },
              { name: 'numero', text: '621' },
              { name: 'bairro', text: 'Ipanema' },
              { name: 'cep', text: '46430000' },
              { name: 'cidade', text: 'Guanambi' },
              { name: 'uf', text: 'BA' },
            ],
          },
          {
            name: 'volumes',
            children: [
              {
                name: 'volume',
                children: [{ name: 'servico', text: 'Pac' }],
              },
            ],
          },
          {
            name: 'itens',
            children: [
              {
                name: 'item',
                children: [
                  { name: 'codigo', text: 1 },
                  { name: 'descricao', text: 'deal' },
                  { name: 'qtde', text: 1 },
                  { name: 'vlr_unit', text: deal.value || 0 },
                ],
              },
            ],
          },
          {
            name: 'parcelas',
            children: [
              {
                name: 'parcela',
                children: [{ name: 'vlr', text: deal.value || 0 }],
              },
            ],
          },
        ],
      },
    );

    const orderData = await axios.post(
    `${process.env.BLING_URL}/pedido/json/&apikey=${process.env.BLING_KEY}&xml=${xml}`
    )

    if (orderData.data.retorno.erros) {
      return;
    }

    const { pedido } = orderData.data.retorno.pedidos[0];

    pedido.id_pedido = pedido.idPedido;
    pedido.numero = Number(pedido.numero);
    pedido.value = deal.value;
    pedido.org_name = deal.org_name;

    await this.dealRepository.create(pedido);

    return pedido;
  }
}

export default CreateOrderService;
