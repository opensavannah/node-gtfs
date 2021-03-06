const FareAttribute = require('../../models/fare-attribute');

/*
 * Returns fare_attribute for the agencyKey and fareId specified
 */
exports.getFareAttributesById = (agencyKey, fareId, cb) => {
  return FareAttribute.findOne({
    agency_key: agencyKey,
    fare_id: fareId
  }).exec(cb);
};
