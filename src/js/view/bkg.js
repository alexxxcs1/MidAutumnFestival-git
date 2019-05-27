import {stage,stageprop} from '../createstage';
import {Scene,Sprite,Group,Label} from 'spritejs';
import viewhandle from '../viewhandle'

let bkg = {
    ctn:null,
    init(){
        this.ctn = stage.layer('bkg');
        this.ctn.zIndex = -1;
        let bkg = new Sprite('bkg');
        this.ctn.append(bkg);
    },
}

export default bkg