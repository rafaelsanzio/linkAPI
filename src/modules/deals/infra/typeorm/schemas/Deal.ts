import {
  ObjectID,
  Entity,
  Column,
  CreateDateColumn,
  ObjectIdColumn,
} from 'typeorm';

@Entity('deal')
class Deal {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  numero: Number;

  @Column()
  id_pedido: Number;

  @Column()
  value: Number;

  @Column()
  org_name: String;

  @CreateDateColumn()
  created_at: Date;
}

export default Deal;
