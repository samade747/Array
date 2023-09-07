// array push() --> Insert an element at the end // push end add
function pushEndAdd() {
    const array = [1, 2, 3];
    array.push(parseInt(prompt("Enter a number:")));
    //result 1, 2, 3, 4,
    document.getElementById("pushResult").innerHTML = JSON.stringify(array);
    }
    document.write("<br><br>");
    
    
    //pop(): --> Remove an element from the end // pop remove end 
    function popRemoveEnd() {
    const array1 = [5, 6, 7, 8, 18];
    array1.pop(parseInt(prompt("Enter a number:")));
   
    
    document.getElementById('popResult').innerHTML = JSON.stringify(array1);
    }
    
    document.write("<br><br>");
    document.write("<br><br>");
    
    //unshift() inserts an element in beginning //  unshift start add
    function unshiftInsertBeginning(){
    const array2 = [11, 12];
    array2.unshift(parseInt(prompt("Enter a number:")));
    // result [8, 9, 10, 11, 12]
    document.getElementById('unshiftResult').innerHTML = JSON.stringify(array2);
    }
    document.write("<br><br>");
    document.write("<br><br>");
    
    //shift() remove first element //  shift remove start
    function shiftRemoveStart(){
    const array3 = [12, 12, 12, 13, 14];
    array3.shift(parseInt(prompt("Enter a number:")));
    
    // result is  [12, 13, 14]
    document.getElementById('shiftremovestartresult').innerHTML = JSON.stringify(array3);
    }