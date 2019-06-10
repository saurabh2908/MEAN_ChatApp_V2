app.controller('regctr',($scope,regfac)=>{
        $scope.data=()=>{
           $scope.data={
               "name":$scope.first,
               "middleName":$scope.second,
               "lastName":$scope.third,
               "email":$scope.fourth,
               "phone":$scope.five,
               "city":$scope.six,
               "state":$scope.seven,
               "password":$scope.eight
           }
           console.log($scope.data);
           let promise = regfac.fetch($scope.data);
           promise.then(data=>{
               console.log("Controller Then Call ",data);
            //    $scope.massage = data.message;
           },error=>{
               $scope.error = error;
           })
           console.log(' Controller the end')
        }
        $scope.datalog=()=>{
            $scope.data={
                "email":$scope.nine,
                "password":$scope.ten
            }
            console.log($scope.data);
            let promise = regfac.fetchlog($scope.data);
            promise.then(data=>{
                console.log("Controller Then Call ",data);
                $scope.massage = data.data.doc;
                console.log("message is",$scope.massage);
                if($scope.massage){
                    window.location.href = 'http://localhost:3000/register'
                }
                else{
                    window.location.href='http://localhost:3000'
                }
            },error=>{
                $scope.error = error;
            })
           
            console.log(' Controller the end')
            
         }
         
})