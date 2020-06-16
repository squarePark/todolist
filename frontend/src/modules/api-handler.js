export class ApiHandler {
  static buildUrl(request) {
    return `/api/${request.join('/')}/`;
  }
}
