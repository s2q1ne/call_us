var objectsOfEffects = new Array();
const MaxSize = 15, MinSize = 10;
const MaxOpacity = 100, MinOpacity = 0;
const sizeSpeed = 0.25;
const opacitySpeed = 5;

function init( ){
    objectsOfEffects.push( {
        'input': document.getElementById("inputIDTab"), 
        'label': document.getElementById("inputIDlabel"), 
        'check': false});
    objectsOfEffects.push( {'input': document.getElementById("inputPWTab"), 'label':  document.getElementById("inputPWlabel"), check: false});
    
    for ( obj of objectsOfEffects){
        obj['label'].classList.add('disable');
    }
    // objectsOfEffects.add( {'input': document.getElementById("inputPWtab"), 'label':  document.getElementById("inputPWlabel")});
}

// inputbox가 focus되었을 때 발생하는 효과
function effect( index ){
    
    console.log(index);
    // var inputbox = objectsOfEffects[index]["input"];
    // var text = objectsOfEffects[index].label;
    // var Style = "" ; // = inputbox.style;
    objectsOfEffects[index]["check"]=false;
    console.log(objectsOfEffects[index])
    objectsOfEffects[index]["input"].classList.remove("disable");
    // remove("disable");
    A( index, MaxSize, MinOpacity);
}

function A( index, size, opacity ){
    objectsOfEffects[index]['label'].style = `font-size: ${size}px; opacity: ${opacity/100.0}`;
    console.log(`size: ${size}, opacity: ${opacity}`);
    
    if( opacity < MaxOpacity && objectsOfEffects[index]['check']==false ){
        setTimeout( A, 60, index, size - sizeSpeed, opacity+opacitySpeed );
    }else{
        HD(index);
    }
}

function HD( index ){
    objectsOfEffects[index]["check"]=true;
    objectsOfEffects[index]["label"].style = "opacity: 0.0;";
}
init();