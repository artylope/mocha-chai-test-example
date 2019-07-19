const calculator = {
    saySomething: function(){
        console.log("hello");
    },

    add : function(a,b){
        return a + b
    },

    multiply : function(a,b){
        return a * b
    },

    divide : function(a,b){
        return a / b
    }
}


module.exports = {
  calculator: calculator
}
