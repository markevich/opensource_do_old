class RepositoryIndexController {
  static get $inject() {
    return ['$routeParams'];
  }

  constructor(params) {
    this.params = params;
    this.foo = "bar";
    this.repositories = [{
      name: 'jo',
      description: 'hgkg',
      stars_count: 890,
      forks_count: 7,
      status: 'no'
    },{
      name: 'jo',
      description:' hgkg',
      stars_count: 890,
      forks_count: 7,
      status: 'no'
    },{
      name: 'jo',
      description: 'hgkg',
      stars_count: 890,
      forks_count: 7,
      status: 'no'
    },{
      name: 'jo',
      description: 'hgkg',
      stars_count: 890,
      forks_count: 7,
      status: 'no'
    }]
  }
}

export default RepositoryIndexController
