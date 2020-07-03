function isRequestAjaxOrApi(req) {
  return !req.accepts("html") || req.xhr || /\/api\//.test(req.originalUrl);
}

module.exports = isRequestAjaxOrApi;
