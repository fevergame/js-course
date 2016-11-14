(function () {

    // task 1
    var isArray = [];

    // task 2
    var sum = 0;

    for (var i = 0; i < 100; i++) {

        isArray[i]=Math.floor(Math.random() * 100 + 1);

        sum+=isArray[i];
    }
    console.log(isArray);

    // task 3
    var arrayToFind = [3, 6, 0, -6, 12];
    var resultMax = findMinMax(arrayToFind, 'max');
    var resultMin = findMinMax(arrayToFind, 'min');

    function findMinMax(arrayToFind, MinMax) {

        if (MinMax == 'max') {
            return Math.max.apply(null, arrayToFind);
        }

        else if (MinMax == 'min') {
            return Math.min.apply(null, arrayToFind);
        }
    }
     console.log(resultMax);
     console.log(resultMin);

    // task 4 tasks are not performed
 
    

    // task 5
    function filterNew(arr1, arr2) {
        for (var i = 0; i < arr1.length; i++) {
            for (var j = 0; j < arr2.length; j++) {
                if (arr1[i] === arr2[j]) {
                    arr1.splice(i, 1);
                    i = -1;
                }
            }
        }
    }
    var arr1 = [2, 2, 3, 3, 15];
    var arr2 = [2, 3, 10];
    filterNew(arr1, arr2);
    console.log(arr1);

})();
