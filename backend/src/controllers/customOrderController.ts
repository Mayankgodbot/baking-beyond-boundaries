import { Request, Response } from 'express';
import { CustomOrder } from '../models/CustomOrder';

export const createCustomOrder = async (req: Request, res: Response) => {
  try {
    const order = await CustomOrder.create({
      ...req.body,
      status: 'pending',
    });
    res.status(201).json({ message: 'Order submitted successfully', order });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create custom order' });
  }
};

export const getAllCustomOrders = async (_req: Request, res: Response) => {
  try {
    const orders = await CustomOrder.findAll({
      order: [['createdAt', 'DESC']],
    });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
};

export const getCustomOrderById = async (req: Request, res: Response) => {
  try {
    const order = await CustomOrder.findByPk(req.params.id);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch order' });
  }
};

export const updateCustomOrderStatus = async (req: Request, res: Response) => {
  try {
    const order = await CustomOrder.findByPk(req.params.id);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    await order.update({ status: req.body.status });
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update order status' });
  }
};

export const deleteCustomOrder = async (req: Request, res: Response) => {
  try {
    const order = await CustomOrder.findByPk(req.params.id);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    await order.destroy();
    res.json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete order' });
  }
};