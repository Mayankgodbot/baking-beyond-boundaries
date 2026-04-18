import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';

interface CustomOrderAttributes {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  cakeSize: string;
  flavors: string;
  filling: string;
  theme: string;
  colors: string;
  designDescription: string;
  referenceImage: string;
  eventDate: string;
  eventType: string;
  pickupTime: string;
  notes: string;
  status: string;
  totalPrice: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface CustomOrderCreationAttributes extends Optional<CustomOrderAttributes, 'id'> {}

export class CustomOrder extends Model<CustomOrderAttributes, CustomOrderCreationAttributes> implements CustomOrderAttributes {
  declare id: string;
  declare firstName: string;
  declare lastName: string;
  declare email: string;
  declare phone: string;
  declare cakeSize: string;
  declare flavors: string;
  declare filling: string;
  declare theme: string;
  declare colors: string;
  declare designDescription: string;
  declare referenceImage: string;
  declare eventDate: string;
  declare eventType: string;
  declare pickupTime: string;
  declare notes: string;
  declare status: string;
  declare totalPrice: number;
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

CustomOrder.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cakeSize: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flavors: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    filling: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    theme: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    colors: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    designDescription: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    referenceImage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    eventDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    eventType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pickupTime: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'pending',
    },
    totalPrice: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0,
    },
  },
  {
    sequelize,
    tableName: 'custom_orders',
    timestamps: true,
  }
);