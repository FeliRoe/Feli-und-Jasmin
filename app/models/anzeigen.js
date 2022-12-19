import { INTEGER, STRING } from 'sequelize';
import { define } from '../util/database';

const Anzeigen = define('Anzeigen',{
  id: {
    type: INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  createdOn: {
    type: INTEGER,
    allowNull: false,
  },
  createdBy: {
    type: STRING,
    allowNull: false,
  },
  softwareVersion: {
    type: STRING,
    allowNull: true
  },
  customer: {
    type: STRING,
    allowNull: true},
    type: {
      type: STRING,
      allowNull: false,
    },
    address: {
      type: STRING,
      allowNull: false,
    },
    postal: {
      type: INTEGER,
      allowNull: false,
    },
    city: {
      type: STRING,
      allowNull: false,
    },
    size: {
      type: INTEGER,
      allowNull: false,
    },
    comment: {
      type: STRING,
      allowNull: false,
    },
    shortHand: {

      type: STRING,
      allowNull: false
    }
});



export default Anzeigen;
