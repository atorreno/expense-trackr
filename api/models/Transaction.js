/**
* Transaction.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    transactionID: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true
    },
    transactionTypeCode: {
      type: 'string',
      enum: ['expense', 'bill', 'income'],
      required: true
    },
    transactionDate: {
      type: 'datetime',
      required: true
    },
    vendorID: {
      type: 'integer'
    },
    paymentType:{
      type: 'string',
      enum: ['credit', 'debit', 'cash']
    },
    amount: {
      type: 'float',
      required: true
    },
    note: {
      type: 'string',
      size: 255
    }
  }
};

