import {stage,stageprop} from '../createstage';
import {Scene,Sprite,Group,Label} from 'spritejs';
import viewhandle from '../viewhandle'
import tool from '../tool';

let logo_handle = {
    ctn:null,
    logo:null,
    musichandle:null,
    musicon:true,
    init(){
        this.ctn = stage.layer('logo_handle');
        this.ctn.zIndex = 50;

        this.logo = new Sprite('logo')
        this.logo.attr({
            pos:[33,42],
            // filter:{
            //     grayscale:'1000%',
            //     brightness:'1000%'
            //   }
        })

        this.musichandle = new Sprite('musicopen');
        this.musichandle.attr({
            anchor:[0.5,0.5],
            pos:[stageprop.width - 65,59]
        })
        this.musichandle.on('click',()=>{
            this.musicon = !this.musicon;
            this.musichandle.animate([
                {textures:this.musicon?'musicopen':'musicclose'}
            ],{
                duration:100,
                fill:'forwards'
            })
            if (this.musicon) {
                tool.audioAutoPlay('bkg');
            }else{
                document.getElementById('bkg').pause();
            }
        })

        

        this.ctn.append(this.logo,this.musichandle);
    },
    changeLogoShow(boolean){
        this.logo.animate([
            {opacity:boolean?1:0}
        ],
        {
            duration:100,
            fill:'forwards'
        })
        this.musichandle.animate([
            {opacity:boolean?1:0}
        ],
        {
            duration:100,
            fill:'forwards'
        })
    }
}

export default logo_handle