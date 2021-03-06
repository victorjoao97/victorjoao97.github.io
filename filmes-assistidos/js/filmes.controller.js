angular
  .module("Filmes")
  .controller("FilmesController", function($scope, $http) {
    $scope.titulo = "Filmes que já assisti";
    $scope.titulos = [];
    $scope.filmes = JSON.parse(window.localStorage.getItem("filmes")) || [];
    if (!JSON.parse(window.localStorage.getItem("filmes"))) {
      window.localStorage.setItem("filmes", "[]");
    }
    $scope.novoFilme = {};

    $scope.removerFilme = function(id) {
      let novosFilmes = $scope.filmes.filter(filme => {
        return filme.id !== id;
      });

      $scope.filmes = novosFilmes;
      $scope.atualizaLocalStorage();
    };

    $scope.adicionarFilme = function() {
      let novoFilme = angular.copy($scope.novoFilme);
      novoFilme.id = Date.now();
      $scope.filmes.push(novoFilme);

      $scope.novoFilme = {};
      $scope.atualizaLocalStorage();
    };

    $scope.changeTitulo = function(e, $event) {
      // $scope.titulos = [];
      const {
        novoFilme: { titulo }
      } = $scope;
      $http
        .get("https://www.omdbapi.com/?apikey=22156ae7", {
          params: { s: titulo }
        })
        .then(
          data => {
            $scope.titulos = data.data.Search;
          },
          err => console.warn(err)
        );
    };

    $scope.completaCampos = function(e, $event) {
      // $scope.titulos = [];
      const {
        novoFilme: { titulo }
      } = $scope;
      $http
        .get("https://www.omdbapi.com/?apikey=22156ae7", {
          params: { t: titulo }
        })
        .then(
          ({ data }) => {
            $scope.novoFilme = {
              id: data.imdbID,
              titulo: data.Title,
              ano: parseInt(data.Year),
              produtora: data.Production,
              sinopse: data.Plot,
              cartaz: data.Poster
            };
            // $scope.novoFilme = {};
            $scope.titulos = [];
          },
          err => console.warn(err)
        );
    };

    $scope.atualizaLocalStorage = function() {
      window.localStorage.setItem("filmes", JSON.stringify($scope.filmes));
      $scope.filmes = JSON.parse(window.localStorage.getItem("filmes"));
    };
  });
