var Model = require('../../../../src/Model');

function RelatedModel() {
  Model.apply(this, arguments);
}

module.exports = Model.extend(RelatedModel);

RelatedModel.tableName = 'RelatedModel';

