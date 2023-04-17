import { Router } from 'express';

const ordersRouter = Router();

ordersRouter.get('/', (req, res) => {
  res.json({ msg: 'GET all orders' });
});
ordersRouter.post('/', (req, res) => {
  res.json({ msg: 'POST orders' });
});
ordersRouter.get('/:id', (req, res) => {
  res.json({ msg: 'GET single orders' });
});
ordersRouter.put('/:id', (req, res) => {
  res.json({ msg: 'PUT single orders' });
});
ordersRouter.delete('/:id', (req, res) => {
  res.json({ msg: 'DEL single orders' });
});

export default ordersRouter;
