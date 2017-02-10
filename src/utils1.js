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

//Dir comes from Parent 
export function calculateStyle(height,width,flex,dir='col'){
    let style ={
        display:'flex'
    };
    if(dir === 'row'){
        // if(width){
        //     style.width = width;
        // }else{
        //     style.flex = flex || 1;
        // }
        let mainAxis = flexOrHeightWidth(width,'width',flex);
        let crossAxis = calculateCrossAxis(height,'height');
        style = {...style,...mainAxis,...crossAxis};

        // if(height  === 'baseline'){
        //     style.alignSelf ='baseline'
        // }else if(height  === 'full'){
            
        // } else if(!isNaN(height) && height !== null){
        //     style.height = height;
        // }
    }

    if(dir === 'col'){
        let mainAxis = flexOrHeightWidth(height,'height',flex);
        let crossAxis = calculateCrossAxis(width,'width');
        style = {...style,...mainAxis,...crossAxis};
    }
    return style;
}