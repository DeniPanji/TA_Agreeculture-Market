// const nconf = require('nconf');
// const rp = require('request-promise');
const model = require('./command_model');
const command = require('./command');
// const query = require('../queries/query');
// const wrapper = require('../../../../helpers/utils/wrapper');
// const config = require('../../../../infra/configs/global_config');
const validate = require('validate.js');
// const logger = require('../../../../helpers/utils/logger');
// const SNS = require('../../../../helpers/components/aws-sns/sns');
// const Emitter = require('../../../../helpers/events/event_emitter');
// const EventPublisher = require('../../../../helpers/events/event_publisher');

class Wishlist{

  async addNewWishlist(payload){
    const data = [payload];
    let view = model.generalWishlist();
    view = data.reduce((accumulator, value) => {
      if(!validate.isEmpty(value.id)){accumulator.id = value.id;}
      if(!validate.isEmpty(value.buyerId)){accumulator.buyerId = value.buyerId;}
      if(!validate.isEmpty(value.productId)){accumulator.productId = value.productId;}
      if(!validate.isEmpty(value.barang)){accumulator.barang = value.barang;}
      return accumulator;
    }, view);
    const document = view;
    const result = await command.insertOneWishlist(document);
    return result;
  }

  async updateWishlist(params, payload){
    const data = [payload];
    let view = model.generalWishlist();
    view = data.reduce((accumulator, value) => {
      if(!validate.isEmpty(value.id)){accumulator.id = value.id;}
      if(!validate.isEmpty(value.buyerId)){accumulator.buyerId = value.buyerId;}
      if(!validate.isEmpty(value.productId)){accumulator.productId = value.productId;}
      if(!validate.isEmpty(value.barang)){accumulator.barang = value.barang;}
      return accumulator;
    }, view);
    const document = view;
    const result = await command.updateOneWishlist(params, document);
    return result;
  }

  async deleteWishlist(params){
    const result = await command.deleteOneWishlist(params);
    return result;
  }

}

module.exports = Wishlist;
