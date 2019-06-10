app.controller('chatApp', function ($scope, socket) {

    $scope.users = [];
    $scope.arr=[];
    $scope.currentUser='';
     socket.on('connect', function () { 
      console.log("user connected")
    });
  
    socket.on('updatechat', function (username, data) {
      var person = {};
      person.username = username;
      person.message = data;
      person.date = new Date().getTime();
   
      $scope.users.push(person);
    });
  
    socket.on('roomcreated', (data)=> {
      socket.emit('adduser', data);
    });
  
    $scope.createRoom = (data)=> {
      $scope.currentUser = data;
      socket.emit('createroom', data);
      $scope.userData={
        "creator":$scope.create.username
      }
      let promise = socket.fetch($scope.userData);
           promise.then(data=>{
               console.log("Controller Then Call ",data);
          
           },error=>{
               $scope.error = error;
           })
           console.log(' Controller the end')
    }
  
    $scope.joinRoom = (data)=> {
      $scope.currentUser = data;
      socket.emit('adduser', data);
      $scope.joinData={
        "joiner":$scope.join.username
      }
      let promise = socket.fetch($scope.joinData);
           promise.then(data=>{
               console.log("Controller Then Call ",data);
            
           },error=>{
               $scope.error = error;
           })
           console.log(' Controller the end')
    }
    
  
    $scope.post = (message)=> {
     
      socket.emit('sendchat', message);
      $scope.messageData={
        "messanger":$scope.message
      }
      let promise = socket.fetch($scope.messageData);
           promise.then(data=>{
               console.log("Controller Then Call ",data);
            
           },error=>{
               $scope.error = error;
           })
           console.log(' Controller the end')
    
    }
  
  
      $scope.read =()=>{
        $scope.arr = [];
      let promise = socket.fetchProducts();
      console.log('Promise Rec in Controller');
      promise.then(data=>{
          console.log("Controller Then Call ",data);
          $scope.arr = data.data['arr'];
      },error=>{
          $scope.error = error;
      })
      console.log("your meassge is",$scope.arr);
      console.log(' Controller the end')
  
  };
  
})
  
  
  
  