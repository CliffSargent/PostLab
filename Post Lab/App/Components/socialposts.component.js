"use strict";

const socialpost = {
    templateUrl: "App/socialposts.html",
    controller: [function () {
        const vm = this;
        vm.postLibrary = [
            { title: "My Day", thought: "Awesome" },
            { title: "My study time", thought: "Greeat" },
            { title: "My cookie", thought: "delicious" }
        ];
        vm.formToggle = false;
        vm.addPost = function(newPost){
            vm.postLibrary.push({...newPost});
        }

        vm.removePost = function(index){
            vm.postLibrary.splice(index, 1)
        }
        
        vm.showForm = function(){
            vm.postForm = true;
        }
    }]
}



angular
.module("app")
.component("socialpost", socialpost);