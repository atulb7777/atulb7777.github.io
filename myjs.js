var app=angular.module('todo', [])
app.controller("ctrl",function($scope){

$scope.todos=["Item 1","Item 2"];

$scope.tdone=[false,false];

$scope.changecheck=function(x){
	$scope.tdone[x]=!$scope.tdone[x];
};

$scope.newtdpush=function(){
	if(!$scope.newtd){
		alert("Empty todo, Enter some text and then click on Add");
	}
	else{
		$scope.todos.push($scope.newtd);
		$scope.tdone.push(false);
		document.getElementById("f01").reset();
	}
};
$scope.tdremove=function(x){
	$scope.todos.splice(x,1);
	$scope.tdone.splice(x,1);
};
$scope.clco=function(){
	var i;
	var flag=0;
	if(!$scope.todos[0]){
		alert("Nothing to archive. Holy shit! I thought you were a lazy ass!");
		flag=1;
	}
	else{
		for(i=0;$scope.todos[i];i++){
			if($scope.tdone[i]){
				$scope.tdremove(i);
				i=0;
				flag=1;
			}
		}
	}
	if(flag==0){
		alert("Items have been completed, Take your lazy ass to work now!");
	}
};
})