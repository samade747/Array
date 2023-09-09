// array push() --> Insert an element at the end // push end add
function pushEndAdd() {
    let array = [1, 2, 3];
    array.push(parseInt(prompt("Enter a number:")));
    array.push(parseInt(prompt("Enter a number:")));
    array.push(parseInt(prompt("Enter a number:")));
    
    document.getElementById("pushResult").innerHTML = JSON.stringify(array);
    }
    document.write("<br><br>");
    
    
    //pop(): --> Remove an element from the end // pop remove end 
    function popRemoveEnd() {
    let array1 = [5, 6, 7, 8, 18];
    array1.pop(parseInt(prompt("Enter a number:")));
    array1.pop(parseInt(prompt("Enter a number:")));
    array1.pop(parseInt(prompt("Enter a number:")));
   
    
    document.getElementById('popResult').innerHTML = JSON.stringify(array1);
    }
    
    document.write("<br><br>");
    document.write("<br><br>");
    
    //unshift() inserts an element in beginning //  unshift start add
    function unshiftInsertBeginning(){
    let array2 = [11, 12];
    array2.unshift(parseInt(prompt("Enter a number:")));
    array2.unshift(parseInt(prompt("Enter a number:")));
    array2.unshift(parseInt(prompt("Enter a number:")));
    
    document.getElementById('unshiftResult').innerHTML = JSON.stringify(array2);
    }
    document.write("<br><br>");
    document.write("<br><br>");
    
    //shift() remove first element //  shift remove start
    function shiftRemoveStart(){
    let array3 = [12, 12, 12, 13, 14];
    array3.shift(parseInt(prompt("Enter a number:")));
    array3.shift(parseInt(prompt("Enter a number:")));
    array3.shift(parseInt(prompt("Enter a number:")));
    
    
    document.getElementById('shiftremovestartresult').innerHTML = JSON.stringify(array3);
    }



    