// array push() --> Insert an element at the end // push end add
function pushEndAdd() {
    const array = [1, 2, 3];
    array.push(4);
    //result 1, 2, 3, 4,
    document.getElementById("pushResult").innerHTML = JSON.stringify(array);
    }
    document.write("<br><br>");
    
    
    //pop(): --> Remove an element from the end // pop remove end 
    function popRemoveEnd() {
    const array1 = [5, 6, 7, 8, 18];
    array1.pop();
    // result [5, 6, 7, 8}
    array1.pop();
    // result [5, 6, 7]
    document.getElementById('popResult').innerHTML = JSON.stringify(array1);
    }
    
    document.write("<br><br>");
    document.write("<br><br>");
    
    //unshift() inserts an element in beginning //  unshift start add
    function unshiftInsertBeginning(){
    const array2 = [11, 12];
    array2.unshift(8, 9, 10);
    // result [8, 9, 10, 11, 12]
    document.getElementById('unshiftResult').innerHTML = JSON.stringify(array2);
    }
    document.write("<br><br>");
    document.write("<br><br>");
    
    //shift() remove first element //  shift remove start
    function shiftRemoveStart(){
    const array3 = [12, 12, 12, 13, 14];
    array3.shift();
    array3.shift();
    // result is  [12, 13, 14]
    document.getElementById('shiftremovestartresult').innerHTML = JSON.stringify(array3);
    }