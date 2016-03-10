describe('BookController', function(){

  beforeEach(module('bookstore'));

  angular.module('bookstore')
    .controller('BookController', BookController);

  function BookController(){
    this.books = [];
  }

  var $controller, ctrl;

  beforeEach(inject(function($injector){
    $controller = $injector.get('$controller');

    ctrl = $controller('BookController');

    console.log(ctrl);
  }));

  it('Should be defined', function(){
    expect(!!ctrl).toEqual(true)
  });

});
