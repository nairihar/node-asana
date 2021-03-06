/**
 * This file is auto-generated by our openapi spec.
 * We try to keep the generated code pretty clean but there will be lint
 * errors that are just not worth fixing (like unused requires).
 * TODO: maybe we can just disable those specifically and keep this code
 * pretty lint-free too!
 */
/* jshint ignore:start */
var Resource = require('../resource');
var util = require('util');
var _ = require('lodash');

function Portfolios(dispatcher) {
    Resource.call(this, dispatcher);
}
util.inherits(Portfolios, Resource);


/**
 * Add a custom field to a portfolio
 * @param {String} portfolioGid: (required) Globally unique identifier for the portfolio.
 * @param {Object} data: Data for the request
 * @param {Object} [dispatchOptions]: Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Portfolios.prototype.addCustomFieldSettingForPortfolio = function(
    portfolioGid,
    data,
    dispatchOptions
) {
    var path = "/portfolios/{portfolio_gid}/addCustomFieldSetting".replace("{portfolio_gid}", portfolioGid);

    return this.dispatchPost(path, data, dispatchOptions)
};


/**
 * Add a portfolio item
 * @param {String} portfolioGid: (required) Globally unique identifier for the portfolio.
 * @param {Object} data: Data for the request
 * @param {Object} [dispatchOptions]: Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Portfolios.prototype.addItemForPortfolio = function(
    portfolioGid,
    data,
    dispatchOptions
) {
    var path = "/portfolios/{portfolio_gid}/addItem".replace("{portfolio_gid}", portfolioGid);

    return this.dispatchPost(path, data, dispatchOptions)
};


/**
 * Add users to a portfolio
 * @param {String} portfolioGid: (required) Globally unique identifier for the portfolio.
 * @param {Object} data: Data for the request
 * @param {Object} [dispatchOptions]: Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Portfolios.prototype.addMembersForPortfolio = function(
    portfolioGid,
    data,
    dispatchOptions
) {
    var path = "/portfolios/{portfolio_gid}/addMembers".replace("{portfolio_gid}", portfolioGid);

    return this.dispatchPost(path, data, dispatchOptions)
};


/**
 * Create a portfolio
 * @param {Object} data: Data for the request
 * @param {Object} [dispatchOptions]: Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Portfolios.prototype.createPortfolio = function(
    data,
    dispatchOptions
) {
    var path = "/portfolios";

    return this.dispatchPost(path, data, dispatchOptions)
};


/**
 * Delete a portfolio
 * @param {String} portfolioGid: (required) Globally unique identifier for the portfolio.
 * @param {Object} data: Data for the request
 * @param {Object} [dispatchOptions]: Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Portfolios.prototype.deletePortfolio = function(
    portfolioGid,
    data,
    dispatchOptions
) {
    var path = "/portfolios/{portfolio_gid}".replace("{portfolio_gid}", portfolioGid);

    return this.dispatchDelete(path, data, dispatchOptions)
};


/**
 * Get portfolio items
 * @param {String} portfolioGid: (required) Globally unique identifier for the portfolio.
 * @param {Object} params: Parameters for the request
     - offset {String}:  Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
     - limit {Number}:  Results per page. The number of objects to return per page. The value must be between 1 and 100.
     - optFields {[String]}:  Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
     - optPretty {Boolean}:  Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
 * @param {Object} [dispatchOptions]: Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Portfolios.prototype.getItemsForPortfolio = function(
    portfolioGid,
    params,
    dispatchOptions
) {
    var path = "/portfolios/{portfolio_gid}/items".replace("{portfolio_gid}", portfolioGid);

    return this.dispatchGetCollection(path, params, dispatchOptions)
};


/**
 * Get a portfolio
 * @param {String} portfolioGid: (required) Globally unique identifier for the portfolio.
 * @param {Object} params: Parameters for the request
     - optFields {[String]}:  Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
     - optPretty {Boolean}:  Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
 * @param {Object} [dispatchOptions]: Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Portfolios.prototype.getPortfolio = function(
    portfolioGid,
    params,
    dispatchOptions
) {
    var path = "/portfolios/{portfolio_gid}".replace("{portfolio_gid}", portfolioGid);

    return this.dispatchGet(path, params, dispatchOptions)
};


/**
 * Get multiple portfolios
 * @param {Object} params: Parameters for the request
     - workspace {String}:  The workspace or organization to filter portfolios on.
     - owner {String}:  (required) The user who owns the portfolio. Currently, API users can only get a list of portfolios that they themselves own.
     - offset {String}:  Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
     - limit {Number}:  Results per page. The number of objects to return per page. The value must be between 1 and 100.
     - optFields {[String]}:  Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
     - optPretty {Boolean}:  Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
 * @param {Object} [dispatchOptions]: Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Portfolios.prototype.getPortfolios = function(
    params,
    dispatchOptions
) {
    var path = "/portfolios";

    return this.dispatchGetCollection(path, params, dispatchOptions)
};


/**
 * Remove a custom field from a portfolio
 * @param {String} portfolioGid: (required) Globally unique identifier for the portfolio.
 * @param {Object} data: Data for the request
 * @param {Object} [dispatchOptions]: Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Portfolios.prototype.removeCustomFieldSettingForPortfolio = function(
    portfolioGid,
    data,
    dispatchOptions
) {
    var path = "/portfolios/{portfolio_gid}/removeCustomFieldSetting".replace("{portfolio_gid}", portfolioGid);

    return this.dispatchPost(path, data, dispatchOptions)
};


/**
 * Remove a portfolio item
 * @param {String} portfolioGid: (required) Globally unique identifier for the portfolio.
 * @param {Object} data: Data for the request
 * @param {Object} [dispatchOptions]: Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Portfolios.prototype.removeItemForPortfolio = function(
    portfolioGid,
    data,
    dispatchOptions
) {
    var path = "/portfolios/{portfolio_gid}/removeItem".replace("{portfolio_gid}", portfolioGid);

    return this.dispatchPost(path, data, dispatchOptions)
};


/**
 * Remove users from a portfolio
 * @param {String} portfolioGid: (required) Globally unique identifier for the portfolio.
 * @param {Object} data: Data for the request
 * @param {Object} [dispatchOptions]: Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Portfolios.prototype.removeMembersForPortfolio = function(
    portfolioGid,
    data,
    dispatchOptions
) {
    var path = "/portfolios/{portfolio_gid}/removeMembers".replace("{portfolio_gid}", portfolioGid);

    return this.dispatchPost(path, data, dispatchOptions)
};


/**
 * Update a portfolio
 * @param {String} portfolioGid: (required) Globally unique identifier for the portfolio.
 * @param {Object} data: Data for the request
 * @param {Object} [dispatchOptions]: Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Portfolios.prototype.updatePortfolio = function(
    portfolioGid,
    data,
    dispatchOptions
) {
    var path = "/portfolios/{portfolio_gid}".replace("{portfolio_gid}", portfolioGid);

    return this.dispatchPut(path, data, dispatchOptions)
};

module.exports = Portfolios;
/* jshint ignore:end */
