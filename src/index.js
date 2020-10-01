
exports.min = function min (array) {
    if (array && array.length) {
        return array.reduce(function (p, v) {
            return ( p < v ? p : v );
          });
      } else {
          return 0;
      };
    }

exports.max = function max (array) {
    
    if (array && array.length) {
        var max = array[0];
    for(var i = 0; i < array.length; i++) {
            if(array[i] > max) 
            max = array[i];
        }
        return max;
    } else {
        return 0;
    }

}

exports.avg = function avg (array) {

    if (array && array.length) {
        return array.reduce((a, b) => a + b,0) / array.length;
    } else {
        return 0;
    }
}
