// import { Test, TestingModule } from '@nestjs/testing';
// import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';

// import { Repository } from 'typeorm';
// import { OrderTrack } from '../entities/order.entity';
// import { OrderModel } from '../models/order.model';
// import { OrderRepository } from './order.repository';

// const orderArray = [
//     new OrderModel(2, 'jey', 'bread', '05-11-2021', 100),
//     new OrderModel(3, 'jey two', 'bread two', '06-11-2021', 150)
// ]

// describe('FetchOrderService', () => {
//     let repository: OrderRepository;
//     let repo: Repository<OrderTrack>;

//     beforeEach(async () => {
//         const module: TestingModule = await Test.createTestingModule({
//             providers: [
//                 OrderRepository,
//                 {
//                     provide: getRepositoryToken(OrderTrack),
//                     useValue: {
//                         find: jest.fn().mockResolvedValue(orderArray),

//                     },
//                 },
//             ],
//         }).compile();

//         repository = module.get<OrderRepository>(OrderRepository);
//         repo = module.get<Repository<OrderTrack>>(getRepositoryToken(OrderTrack));
//     });


//     it('should be defined', () => {
//         expect(repository).toBeDefined();
//     });
//     describe('fetchOrders', () => {
//         it('should get a order Array', async () => {
//             jest.spyOn(repo, 'find');
//             const order = await repository.fetchOrders()
//             expect(order).toEqual(orderArray);

//         });
//     });

// });
