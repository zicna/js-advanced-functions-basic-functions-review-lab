// Your code here
razzle();
razzle("Metuselah", "T'challah")


function razzle(lawyer="Billy", target="em") {
  console.log(`${lawyer} razzle-dazzle ${target}!`);
}

(function(a){
    console.log(`Hello ${a}` )
})("Milan")




function saturdayFun(todo="roller-skate"){
    return `This Saturday, I want to ${todo}!`
}

function mondayWork(work="go to the office"){
    return `This Monday, I will ${work}.`
}

function wrapAdjective(adj="*"){
    return function innerFn(string="special"){
        return `You are ${adj}${string}${adj}!`
    }
}

const Calculator = {
    add: function(){
        return 1 + 3
    },
    subtract: function(){
        return 1-3
    },
    multiply: function(){
        return 1 * 3
    },
    divide: function(){
        return 10 / 5
    }
}

function actionApplyer(start, array){
    for(let a= 0; a<array.length; a++){
        start = array[a](start)
    }
    return start
}


