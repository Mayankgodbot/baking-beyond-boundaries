import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';

interface ContactAttributes {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface ContactCreationAttributes extends Optional<ContactAttributes, 'id'> {}

export class Contact extends Model<ContactAttributes, ContactCreationAttributes> implements ContactAttributes {
  declare id: string;
  declare name: string;
  declare email: string;
  declare phone: string;
  declare subject: string;
  declare message: string;
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

Contact.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'contacts',
    timestamps: true,
  }
);