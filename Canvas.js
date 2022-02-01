let canvas;

function init(){
    canvas = document.querySelector("canvas").getContext("2d");

    canvastexture();
} window.onload = init;

function canvastexture(){
    
    background();
    house();
    tree();
    sun();

}

function sun(){
    //color for the figure
    canvas.beginPath();
    canvas.arc(260, 60, 38, 0, 7);
    canvas.fillStyle = "yellow";
    canvas.fill();
    
    //lower part of sun
    canvas.beginPath();
    canvas.moveTo(230, 95);
    canvas.quadraticCurveTo(255, 60, 260, 110);
    canvas.moveTo(260, 110);
    canvas.quadraticCurveTo(255, 60, 290, 95);
    canvas.moveTo(290, 95);
    canvas.quadraticCurveTo(255, 60, 300, 60);
    canvas.moveTo(220, 60);
    canvas.quadraticCurveTo(255, 60, 230, 95);
    
    //upper part for sun
    canvas.moveTo(220, 60);
    canvas.quadraticCurveTo(255, 60, 230, 25);
    canvas.moveTo(260, 5);
    canvas.quadraticCurveTo(255, 60, 290, 25);
    canvas.moveTo(300, 60);
    canvas.quadraticCurveTo(255, 60, 290, 25);
    canvas.moveTo(230, 25);
    canvas.quadraticCurveTo(255, 60, 260, 5);
    canvas.strokeStyle = "orange";
    canvas.fillStyle = "skyblue"
    canvas.fill();
    canvas.stroke();
}

function background(){
    sky();
    cloud();
    grass(); 
}

function sky(){
    canvas.fillStyle = "skyblue";
    canvas.fillRect(0, 0, 300, 110);
}

function grass(){
    canvas.fillStyle = "green";
    canvas.fillRect(0, 110, 300, 40);
}

function house(){
    houseRoofLayer1();
    houseRoofLayer2();
    houseRoofLayer3();
    
    houseBodyLayer1();
    houseBodyLayer2();

    windows();

    door();
}

function houseRoofLayer1(){
    canvas.beginPath();
    canvas.moveTo(100, 15);
    canvas.lineTo(60, 70);
    canvas.lineTo(140,70);
    canvas.fillStyle = "black";
    canvas.fill();
}

function houseRoofLayer2(){
    canvas.beginPath();
    canvas.moveTo(100, 18);
    canvas.lineTo(63, 70);
    canvas.lineTo(137,70);
    canvas.fillStyle = "white";
    canvas.fill();
}

function houseRoofLayer3(){
    canvas.beginPath();
    canvas.moveTo(100, 21);
    canvas.lineTo(65, 70);
    canvas.lineTo(135,70);
    canvas.fillStyle = "brown";
    canvas.fill();
}

function houseBodyLayer1(){
    canvas.fillStyle = "white";
    canvas.fillRect(60, 70, 80, 65);
}

function houseBodyLayer2(){
    canvas.fillStyle = "brown";
    canvas.fillRect(63, 70, 74, 65);
}

function windows(){
    windows1();
    windows2();
}

function windows1(){
    canvas.fillStyle = "yellow";
    canvas.fillRect(115, 80, 10, 15);

    canvas.beginPath();
    canvas.moveTo(120, 95);
    canvas.lineTo(120, 80);
    canvas.stroke();

    canvas.beginPath();
    canvas.moveTo(115, 87);
    canvas.lineTo(125, 87);
    canvas.stroke();
}

function windows2(){
    canvas.fillStyle = "yellow";
    canvas.fillRect(75, 80, 10, 15);

    canvas.beginPath();
    canvas.moveTo(80, 95);
    canvas.lineTo(80, 80);
    canvas.stroke();

    canvas.beginPath();
    canvas.moveTo(75, 87);
    canvas.lineTo(85, 87);
    canvas.stroke();
}

function door(){
    canvas.fillStyle = "red";
    canvas.fillRect(95, 105, 13, 30);
    
    //Doorhandle
    canvas.beginPath();
    canvas.arc(98, 122, 1, 0, 7);
    canvas.stroke();
    canvas.fillStyle = "black";
    canvas.fill();
}

function tree(){
    //tree ground
    canvas.fillStyle = "black";
    canvas.fillRect(175, 90, 10, 45);

    //Tree Leafs
    canvas.beginPath();
    canvas.moveTo(175, 90);
    canvas.quadraticCurveTo(155, 95, 170, 56);
    canvas.quadraticCurveTo(185, 40, 205, 54);
    canvas.quadraticCurveTo(205, 105, 185, 90);
    canvas.fillStyle = "green";
    canvas.fill();

    //Tree Apple
    canvas.beginPath();
    canvas.arc(178, 70, 2, 0, 6);
    canvas.moveTo(195, 85);
    canvas.arc(195, 85, 2, 0, 6);
    canvas.moveTo(195, 55);
    canvas.arc(195, 55, 2, 0, 6);

    canvas.moveTo(195, 70);
    canvas.arc(195, 70, 3, 0, 6);
    canvas.moveTo(170, 85);
    canvas.arc(170, 85, 3, 0, 6);
    canvas.moveTo(175, 55);
    canvas.arc(175, 55, 3, 0, 6);
    canvas.stroke();
    canvas.fillStyle = "red";
    canvas.fill();
}

function cloud(){
    canvas.fillStyle = "white";
    //cloud right 
    canvas.beginPath();
    canvas.moveTo(145, 40);
    canvas.arc(145, 40, 15, 0, 7);
    canvas.moveTo(152, 48);
    canvas.arc(152, 48, 15, 0, 7);
    canvas.moveTo(155, 30);
    canvas.arc(155, 30, 15, 0, 7);
    canvas.moveTo(175, 50);
    canvas.arc(175, 50, 15, 0, 7);
    canvas.moveTo(175, 30);
    canvas.arc(175, 30, 15, 0, 7);
    canvas.moveTo(190, 40);
    canvas.arc(190, 40, 15, 0, 7);
    canvas.fill();

    //cloud left
    canvas.beginPath();
    canvas.moveTo(35, 40);
    canvas.arc(35, 40, 15, 0, 7);
    canvas.moveTo(50, 48);
    canvas.arc(50, 48, 15, 0, 7);
    canvas.moveTo(56, 30);
    canvas.arc(56, 30, 15, 0, 7);
    canvas.moveTo(72, 48);
    canvas.arc(72, 48, 15, 0, 7);
    canvas.moveTo(75, 30);
    canvas.arc(75, 30, 15, 0, 7);
    canvas.fill();
}