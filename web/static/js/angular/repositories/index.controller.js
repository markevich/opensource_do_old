class RepositoryIndexController {
  static get $inject() {
    return ['$routeParams'];
  }

  constructor(params) {
    this.params = params;
    this.foo = "bar";
  }
}

export default RepositoryIndexController
