//my/shirt.js now has some dependencies, a cart and inventory
//module in the same directory as shirt.js
define(["jquery"], function($) {
        //return an object to define the "my/shirt" module.
        if($ === undefined){
            console.log("$ is not defined!!");
        }
        return {
            color: "blue",
            size: "large",
            addToCart: function() {
                console.log("addToCart");
            }
        }
    }
);