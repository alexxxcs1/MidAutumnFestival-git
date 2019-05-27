import {Scene} from 'spritejs';
const stage = new Scene('#stage', {
    viewport: [750,1334-110],  //设置为['auto','auto'] canvas会撑满屏幕，但是元素可超出设计宽高，固定数值则如 overflow:hidden。
    resolution: [750,1334-110], //设计宽高
    stickMode: 'top', //"width","height","top","bottom","left","right" 不填为自动填充宽高
    stickExtend :true,
}
);
const stageprop = {
    width:stage.resolution[0],
    height:stage.resolution[1],
};

export {stage,stageprop}