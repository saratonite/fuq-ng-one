app.controller('BreadcrumbController', function ($scope) {

    $scope.products = [{
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

    ]

    $scope.perPage = 5;

    $scope.activeIndex = 0;

    $scope.totalPages = Math.ceil($scope.products.length / $scope.perPage);

    $scope.selectedProduct = $scope.products[$scope.activeIndex];

    $scope.currentPageSegment = null;

    $scope.onDotClick = function (product) {

        // console.log('Product ', product)
        let _activeIndex = $scope.products.findIndex((p) => {

            return p.id === product.id

        })

        console.log('---- ', _activeIndex)

        if (_activeIndex < 0) return;

        $scope.activeIndex = _activeIndex;

        console.log('Product Index ', $scope.activeIndex)
        $scope.selectedProduct = product;
    }

    $scope.clickNext = function () {

        if ($scope.activeIndex === $scope.products.length - 1) return;
        $scope.selectedProduct = $scope.products[$scope.activeIndex + 1]

        $scope.setAciveIndex()


    }

    $scope.clickPrev = function () {

        if ($scope.activeIndex === 0) return;
        $scope.selectedProduct = $scope.products[$scope.activeIndex - 1];

        $scope.setAciveIndex()
    }

    $scope.setAciveIndex = function () {

        //
        $scope.activeIndex = $scope.products.findIndex((p) => {

            return p.id === $scope.selectedProduct.id

        })
    }


    $scope.getProducts = function () {
        console.log('>', $scope.activeIndex)

        if ($scope.activeIndex === 0) {

            $scope.currentPageSegment = $scope.products.slice(0, $scope.perPage);
        }


        let _activeProductIdx = $scope.currentPageSegment.findIndex(function (p) {

            return (p.id === $scope.selectedProduct.id)

        })
        // forword ->
        if (_activeProductIdx == 4) {

            if ($scope.activeIndex === ($scope.products.length - 1)) {
                return $scope.currentPageSegment;
            }
            $scope.currentPageSegment.shift();
            $scope.currentPageSegment.push($scope.products[$scope.activeIndex + 1])
        }

        // backword <-
        if (_activeProductIdx == 0 && $scope.activeIndex !== 0) {

            if ($scope.activeIndex === 0) return $scope.currentPageSegment;
            $scope.currentPageSegment.pop();
            $scope.currentPageSegment.unshift($scope.products[$scope.activeIndex - 1])
        }

        $scope.setAciveIndex();

        return $scope.currentPageSegment;

    }



})