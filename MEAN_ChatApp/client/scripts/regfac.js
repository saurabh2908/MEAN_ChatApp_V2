app.factory('regfac',($http,$q,FETCH,FETCHLOG)=>{
    return{
        fetch(data){
            let defer = $q.defer();
            $http.post(FETCH,JSON.stringify(data)).then(data=>{
                console.log("your data is",data);
                defer.resolve(data);
            },(err)=>{
               console.log("Data is missing becuse of",err);
               defer.reject(err);
            });
              return defer.promise;
            
        },
        fetchlog(data){
            let defer = $q.defer();
            $http.post(FETCHLOG,JSON.stringify(data)).then(data=>{
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
            $http.get(FETCHLOG).then((data)=>{
                console.log("Rec Output in  Fetch Product factory ",data);
                defer.resolve(data);
            },(error)=>{
                defer.reject(error);
            });
            console.log("Return Promise");
            return defer.promise;
    }

    
}});