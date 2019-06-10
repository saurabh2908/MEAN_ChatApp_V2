app.factory('socket',["$rootScope","$http","$q","FETCH","FETCH_PRODUCT",($rootScope,$http,$q,FETCH,FETCH_PRODUCT)=> {
    var socket = io.connect();
    return {
      on:  (eventName, callback)=> {
        socket.on(eventName, function () {
          var args = arguments;
          $rootScope.$apply(function () {
            callback.apply(socket, args);
          });
        });
      },
      emit: function (eventName, data, callback) {
        socket.emit(eventName, data, function () {
          var args = arguments;
          $rootScope.$apply(function () {
            if (callback) {
              callback.apply(socket, args);
            }
          });
        })
      },
      fetch(data){
        let defer = $q.defer();
        $http.post(FETCH,JSON.stringify(data)).then(data=>{
            console.log("your data is",data);
            defer.resolve(data);
        },(err)=>{
           console.log("Data is missing becuse of",err);
           defer.reject(error);
        });
          return defer.promise;
        
    },

    fetchProducts(){
      console.log("Inside Fetch Product factory");
      let defer = $q.defer();
      console.log("Calling Ajax in Factory");
      $http.get(FETCH_PRODUCT).then((data)=>{
          console.log("Rec Output in  Fetch Product factory ",data);
          defer.resolve(data);
      },(error)=>{
          defer.reject(error);
      });
      console.log("Return Promise");
      return defer.promise;
  }

    };
    
  }]);