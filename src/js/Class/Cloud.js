import {stage,stageprop} from '../createstage';
import {Scene,Sprite,Group,Label} from 'spritejs';

let Cloud = {
    CreateCloud(attr,index,ratio,boolean){
        let _ratio = ratio?ratio:5000;
        let _boolean = boolean == false?boolean:true;
        let Clouds = new Sprite('Cloud'+index);
        Clouds.attr({
            anchor:[0.5,0.5],
            ...attr
        })
        Clouds.animate([
            {pos:[Clouds.attributes.x,Clouds.attributes.y]},
            {pos:[Clouds.attributes.x + (_boolean?100:-100),Clouds.attributes.y]},
            {pos:[Clouds.attributes.x,Clouds.attributes.y]},
        ],{
            duration: _ratio,
            iterations:Infinity,
        })
        return Clouds;
    },
}

export default Cloud