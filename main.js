
//  * Mô hình 3 khối
//  * ======Input=======

//  * ======End Input===

//  * ======Handle======
//  * ======End Handle==

//  * ======Output======
//  * ======End Ouput===


/**
 * BÀI 01:TÍNH TIỀN LƯƠNG NHÂN VIÊN
 * Viết chương trính tính tiền lương nhân viên.
 * Lương 1 ngày :100.000 vnd
 * Cho người dùng nhập vào số ngày làm.
 * Công thức tính lương: Lương 1 ngày * số ngày làm.
 */

//  * Mô hình 3 khối
//  * ======Input=======
const salaryPerDay = 100000; //salary per day
var workDay = 0; // working day. 
var totalSalary = 0; // total working day;
var eInput = document.getElementById("workDay");// Element input
var eOutPut = document.getElementById("result01"); // Element in ket qua
 

//  * ======End Input===
function getInfoFromInput(){
    workDay = eInput.value; // Get value from input
    workDay = parseInt(workDay); //parse number from string
}
function money(someNumber){
    return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'VND' }).format(someNumber);
}
//  * ======Handle======

//  * ======End Handle==

//  * ======Output======
document.getElementById("button01").addEventListener("click", () => {
    getInfoFromInput();
    totalSalary = salaryPerDay * workDay; // create totalSalary
    eOutPut.innerHTML = money(totalSalary); // write result


})
//  * ======End Ouput===


/**
 * BÀI 2: TÍNH GIÁ TRỊ TRUNG BÌNH
 * Viết chương trình nhập vào 5 số thực ,
 * Tính giá trị trung bình của 5 số này và xuất ra màn hình
 */

//  * Mô hình 3 khối
//  * ======Input=======
const totalInput = 5; // total input element
var total = 0; // total of 5 value input element
var NUMBER_1 = 0 ; // number 1
var NUMBER_2 = 0 ; // number 2
var NUMBER_3 = 0 ; // number 3
var NUMBER_4 = 0 ; // number 4
var NUMBER_5 = 0 ; // number 5
var numberInput1 = document.getElementById("numberInput1"); // find ID of Element input number 1
var numberInput2 = document.getElementById("numberInput2"); // find ID of Element input number 2
var numberInput3 = document.getElementById("numberInput3"); // find ID of Element input number 3
var numberInput4 = document.getElementById("numberInput4"); // find ID of Element input number 4
var numberInput5 = document.getElementById("numberInput5"); // find ID of Element input number 5
var numberAnswer = document.getElementById("numberAnswer");
var numberBtn = document.getElementById("numberBtn");//find ID Element button

//  * ======End Input===

//  * ======Handle======
function average(){
    // window.alert("hi");
    if(numberInput1.value1 != "" && numberInput2.value != "" && numberInput3.value != "" && numberInput4.value != "" && numberInput5.value != ""){
        NUMBER_1 = parseInt(numberInput1.value);
        NUMBER_2 = parseInt(numberInput2.value);
        NUMBER_3 = parseInt(numberInput3.value);
        NUMBER_4 = parseInt(numberInput4.value);
        NUMBER_5 = parseInt(numberInput5.value);
        total = NUMBER_1 +NUMBER_2 +NUMBER_3 +NUMBER_4 +NUMBER_5;
        return  total /totalInput;

    }
    
    else    {
       window.alert("Nhập dữ liệu vào ô !");
       return total;
    }
    
}
//  * ======End Handle==

//  * ======Output======
numberBtn.onclick = function (){
    if(average()===NaN){

        numberAnswer.innerHTML = "Hãy nhập dữ liệu !";
    }else {
        numberAnswer.innerHTML ="Kết quả = "+ average();
        
    }
}
//  * ======End Ouput===
/**
 * BÀI 3: QUY ĐỔI TIỀN
 */


//  * Mô hình 3 khối
//  * ======Input=======
const vndPerUsd = 23500; //VND per USD
var usdCalculate = 0 ; // Change money number after calculate
var usdInput = document.getElementById("usdInput");// find id input
var usdAnswer = document.getElementById("usdAnswer");// find id answer place
var usdBtn = document.getElementById("usdBtn"); // find id button place
//  * ======End Input===

//  * ======Handle======
function usdChange (){

    if(usdInput.value != ""){
        usdCalculate = parseInt(usdInput.value);
        
    } else {
        window.alert("Nhập dữ liệu vào ô!")
    }
}
//  * ======End Handle==

//  * ======Output======
usdBtn.addEventListener("click",() => {
    if(usdChange()!=NaN){
        usdAnswer.innerHTML = money(usdCalculate*vndPerUsd);
    }
    

})
//  * ======End Ouput===

/**
 * BÀI 4: Tính diện tích, chu vi hình chữ nhật.
 * --Yêu cầu: Viết chương trình nhập vào 2 chiều dài và chiều rộng
 * của hình chữ nhật . Tính và xuất ra diện tích, chu vi của hình chữ
 * nhật đó.
 */

//  * Mô hình 3 khối
//  * ======Input=======
var rectEWidth = document.getElementById("rectWidth");// Find ID of input Element for rectangle's width;
var rectEHeight = document.getElementById("rectHeight"); // Find ID of input Element for rectangle's height;
var rectWidth = 0; //init value for rectangle's width;
var rectHeight = 0; //init value for rectangle's height;
var rectSquare = 0; //init value for rectangle's square
var rectPerimeter = 0; //init value for fectangle's perimeter
var rectEBtn = document.getElementById("rectBtn");
var rectEAnwser = document.getElementById("rectAnswer");
;
//  * ======End Input===
function findSquare(){
    
    if(rectEWidth.value!="" && rectEHeight.value !=""){
        rectWidth = parseInt(rectEWidth.value);
        rectHeight = parseInt(rectEHeight.value);
        rectSquare = rectHeight*rectWidth;
        rectPerimeter = (rectWidth + rectHeight)*2;
    } else {
        window.alert("Nhập dữ liệu vào ô!")
    }
}
//  * ======Handle======
//  * ======End Handle==

//  * ======Output======
rectEBtn.onclick = () => {
    findSquare()
    rectEAnwser.innerHTML ="DIỆN TÍCH = "+ rectSquare +"<br>"+ "CHU VI = "+ rectPerimeter;
}

//  * ======End Ouput===