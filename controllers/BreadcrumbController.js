app.controller("BreadcrumbController", function($scope) {
  $scope.products = [
    {
      id: 1,
      name: "Product 1"
    },
    {
      id: 2,
      name: "Product 2"
    },
    {
      id: 3,
      name: "Product 3"
    },
    {
      id: 4,
      name: "Product 4"
    },
    {
      id: 5,
      name: "Product 5"
    },
    {
      id: 6,
      name: "Product 6"
    },
    {
      id: 7,
      name: "Product 7"
    },
    {
      id: 8,
      name: "Product 8"
    },
    {
      id: 9,
      name: "Product 9"
    },
    {
      id: 10,
      name: "Product 10"
    }
  ];

  $scope.perPage = 5;

  $scope.activeIndex = 0;

  $scope.totalPages = Math.ceil($scope.products.length / $scope.perPage);

  $scope.selectedProduct = $scope.products[$scope.activeIndex];

  $scope.currentPageSegment = null;
  $scope.showLHalf = false;
  $scope.showRHalf = false;

  $scope.onDotClick = function(product) {
    // console.log('Product ', product)
    let _activeIndex = $scope.products.findIndex(p => {
      return p.id === product.id;
    });

    if (_activeIndex < 0) return;

    $scope.activeIndex = _activeIndex;

    $scope.selectedProduct = product;

    var _t = setTimeout(function() {
      $scope.buildCrumbs();
      $scope.$apply();
      clearTimeout(_t);
    }, 200);
  };

  $scope.clickNext = function() {
    if ($scope.activeIndex === $scope.products.length - 1) return;
    $scope.selectedProduct = $scope.products[$scope.activeIndex + 1];

    $scope.setAciveIndex();

    var _t = setTimeout(function() {
      $scope.buildCrumbs();
      $scope.$apply();
      clearTimeout(_t);
    }, 200);
  };

  $scope.clickPrev = function() {
    if ($scope.activeIndex === 0) return;
    $scope.selectedProduct = $scope.products[$scope.activeIndex - 1];

    $scope.setAciveIndex();

    var _t = setTimeout(function() {
      $scope.buildCrumbs();
      $scope.$apply();
      clearTimeout(_t);
    }, 200);
  };

  $scope.setAciveIndex = function() {
    //
    $scope.activeIndex = $scope.products.findIndex(p => {
      return p.id === $scope.selectedProduct.id;
    });
  };

  $scope.buildCrumbs = function() {
    if ($scope.activeIndex === 0) {
      $scope.currentPageSegment = $scope.products.slice(0, $scope.perPage);
    }

    let _activeProductIdx = $scope.currentPageSegment.findIndex(function(p) {
      return p.id === $scope.selectedProduct.id;
    });
    // forword ->
    if (_activeProductIdx == $scope.perPage - 1) {
      if ($scope.activeIndex === $scope.products.length - 1) {
        return $scope.currentPageSegment;
      }
      $scope.currentPageSegment.shift();
      $scope.currentPageSegment.push($scope.products[$scope.activeIndex + 1]);
    }

    // backword <-
    if (_activeProductIdx == 0 && $scope.activeIndex !== 0) {
      if ($scope.activeIndex === 0) return $scope.currentPageSegment;
      $scope.currentPageSegment.pop();
      $scope.currentPageSegment.unshift(
        $scope.products[$scope.activeIndex - 1]
      );
    }

    $scope.setAciveIndex();

    /////////////////////////
    if ($scope.activeIndex == 0) {
      console.log("+ y");
      $scope.showLHalf = false;
    } else {
      $scope.showLHalf = true;
    }

    if (
      $scope.products.length > $scope.perPage &&
      $scope.activeIndex !== $scope.products.length - 1
    ) {
      console.log("*y");
      $scope.showRHalf = true;
    } else {
      console.log("*np");
      $scope.showRHalf = false;
    }

    /////////////////////////

    $scope.currentPageSegment = $scope.currentPageSegment;

    return $scope.currentPageSegment;
  };

  $scope.buildCrumbs();
});
