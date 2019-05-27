import {stage,stageprop} from '../createstage';
import {Scene,Sprite,Group,Label} from 'spritejs';
import viewhandle from '../viewhandle'
import logo_handle from './logo_handle';

import Cloud from '../Class/Cloud'

let frame10 = {
    ctn:null,
    init(){
        this.ctn = stage.layer('frame10');

        let Frame10Bkg = new Sprite('Frame10Bkg');
        Frame10Bkg.attr({
            anchor:[0.5,1],
            pos:[stageprop.width/2,stageprop.height]
        })

        let Frame10PoeTitle = new Sprite('Frame10PoeTitle');
        Frame10PoeTitle.attr({
            anchor:[0,0.5],
            pos:[600,283]
        })
        Frame10PoeTitle.animate([
            {opacity:0},
            {opacity:1},
        ],{
            duration:500,
            fill:'forwards'
        }).finished.then(()=>{
            let Frame10Poe = new Sprite('Frame10Poe');
            let PoeGroup = new Group();
            Frame10Poe.attr({
            });
            
            PoeGroup.attr({
                anchor:[1,0],
                pos:[560,212],
                size:[Frame10Poe.texturesSize[0],0],
                // bgcolor:'#333'
            })
            PoeGroup.animate([
                {size:[0,Frame10Poe.texturesSize[1]],},
                {size:[Frame10Poe.texturesSize[0],Frame10Poe.texturesSize[1]],},
            ],{
                duration:500,
                fill:'forwards'
            })
            Frame10Poe.animate([
                {pos:[-Frame10Poe.texturesSize[0],0],},
                {pos:[0,0],},
            ],{
                duration:500,
                fill:'forwards'
            })
            PoeGroup.append(Frame10Poe);

            let Change = new Sprite('change');
            Change.attr({
                anchor:[0.5,0.5],
                pos:[stageprop.width - 40,stageprop.height-450],
                scale:[1.2,1.2]
            })
            Change.animate([
                {scale:[0,0]},
                {scale:[1.3,1.3]},
            ],{
                duration:1000,
                fill:'forwards'
            })

            let QR = new Sprite('QR');
            QR.attr({
                anchor:[0.5,0.5],
                pos:[stageprop.width/2,887- 128]
            })

            let JumpDAButton = new Sprite('JumpDAButton');
            JumpDAButton.attr({
                anchor:[0.5,0.5],
                pos:[stageprop.width/2 - JumpDAButton.texturesSize[0] / 2 + 40,stageprop.height-191]
            })
            JumpDAButton.on('click',()=>{
                location.href = 'http://client.rup-china.com/midautumnfestivalDA/';
            })

            let ShareButton = new Sprite('ShareButton');
            ShareButton.attr({
                anchor:[0.5,0.5],
                pos:[stageprop.width/2 + ShareButton.texturesSize[0] / 2 +40,stageprop.height-191],
            })
            ShareButton.on('click',()=>{
                logo_handle.changeLogoShow(false);

                this.ctn.append(this.createShareTip())
            });
            this.ctn.append(Change,PoeGroup,JumpDAButton,ShareButton)
        })
        

        this.ctn.append(Frame10Bkg,Frame10PoeTitle);
    },
    createShareTip(onClose){
        let ShareTipsGroup = new Group();
        let mask = new Sprite({
            size:[stageprop.width,stageprop.height],
            bgcolor:'#000',
            opacity:0.8,
        })
        mask.on('click',()=>{
            event.stopDispatch();
        })
        let ShareTips = new Sprite('sharetips');
        ShareTips.attr({
            pos:[0,0]
        })
        let Change = new Sprite('Vrun2');
        Change.attr({
            pos:[472,0]
        })
        Change.animate([
            {pos:[422,50]},
            {pos:[472,0]},
            {pos:[422,50]},
        ],{
            duration:5000,
            iterations: Infinity
        })
        let Cloud1 = Cloud.CreateCloud({
            pos:[375,250],
        },2)
        let Cloud2 = Cloud.CreateCloud({
            anchor:[0.5,0.5],
            pos:[0,645],
        },3)
        let Cloud3 = Cloud.CreateCloud({
            pos:[563,718],
        },1)

        let Close = new Sprite('closeShareTips');
        Close.attr({
            anchor:[0.5,0.5],
            pos:[616,314]
        })
        Close.on('click',()=>{
            this.ctn.removeChild(ShareTipsGroup);
        })
        ShareTipsGroup.append(mask,ShareTips,Change,Cloud1, Cloud2, Cloud3,Close);
        return ShareTipsGroup
    }
}

export default frame10