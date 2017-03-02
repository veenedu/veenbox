export function directionMapping(){
    return {
        'col':'column',
        'row':'row'
    }
}


function flexOrHeightWidth(value,name,flex){
    let style={}

    if(value === 'baseline'){

    }
    else if(value && value!== 'full'){
        style[name] = value;
    } 
    else{
        style.flex = flex || 1;
    }
    return style;
}

export function getOppositeDirection(dir){
    if(dir === "row"){
        return "col";
    }
    return "row";
}

function calculateCrossAxis(value,name){
    let style ={};
    if(value  === 'full'){
        
    } else if(value  === 'baseline'){
        style.alignSelf ='baseline'
    }else  if(!isNaN(value) && value !== null){
        style[name] = value;
    }
    return style;
}


//This calculates, height, width, flex, overflow, noflex
export function calculateRootStyle(props,parentDir){
    let {height, width,flex,noflex,scrollX,scrollY} = props;
    let style ={
        display:noflex? '':'flex',
        overflowY:scrollY ? 'auto':'hidden',
        overflowX:scrollX ? 'auto':'hidden',        
    };

    //Clean this code
    //
    if(parentDir === 'row'){
        let mainAxis = flexOrHeightWidth(width,'width',flex);
        let crossAxis = calculateCrossAxis(height,'height');
        style = {...style,...mainAxis,...crossAxis};
    }

    if(parentDir === 'col'){
        let mainAxis = flexOrHeightWidth(height,'height',flex);
        let crossAxis = calculateCrossAxis(width,'width');
        style = {...style,...mainAxis,...crossAxis};
    }
    return style;
}

//This calculates styles based of flex direction. 
export function calculateContentStyle(childDir,props){
    let {halign='inherit',valign='inherit'} = props;
    let alignMap = {
        'start':'flex-start',
        'center':'center',
        'end':'flex-end'
    }
    
    //props assuming child dir is row
    let halignPropName= 'justifyContent';
    let valignPropName= 'alignItems';
    //exchange props if direction is col
    if(childDir === 'col'){
        halignPropName= 'alignItems';
        valignPropName= 'justifyContent';
    }    

    let style= {
        flexDirection: directionMapping()[childDir]
    };

    style[halignPropName] = alignMap[halign] || halign
    style[valignPropName] = alignMap[valign] || valign
    return style;
}

export function santizeObject(objectData,itemsArr){
    //objectData ={a:1,b:1,c:1,d:1}
    //itemsArr = [b,c]
    //Return = {a:1,d:1}
    // let objectData ={a:1,b:1,c:1,d:1};
    // let itemsArr = ['b','c']
    // console.log(santizeObject(objectData,itemsArr))    
    let newObject = {...objectData}
    for(let i=0;i<itemsArr.length;i++){
        delete newObject[itemsArr[i]]
    }
    return newObject;
}