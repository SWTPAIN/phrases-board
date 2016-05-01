import _ from 'lodash';

export function denormalize(normalizedData) {
  return _.values(normalizedData);
}
