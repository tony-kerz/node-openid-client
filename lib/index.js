const Issuer = require('./issuer');
const { OPError, RPError } = require('./errors');
const Registry = require('./issuer_registry');
const Strategy = require('./passport_strategy');
const TokenSet = require('./token_set');
const { CLOCK_TOLERANCE, HTTP_OPTIONS } = require('./helpers/consts');
const generators = require('./helpers/generators');

module.exports = {
  Issuer,
  Registry,
  Strategy,
  TokenSet,
  errors: {
    OPError,
    RPError,
  },
  custom: {
    http_options: HTTP_OPTIONS,
    clock_tolerance: CLOCK_TOLERANCE,
  },
  generators,
};
