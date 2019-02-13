"use strict";

const post = {
    bindings: {
        showForm: "&",
        formToggle: "<",
        addPost: "&"

    },
    templateUrl: "app/postForm.html",


}


angular
.module("app")
.component("post", post);
