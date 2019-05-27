import {stage,stageprop} from '../createstage';
import {Scene,Sprite,Group,Label} from 'spritejs';
import viewhandle from '../viewhandle'
import tool from '../tool'

import Cloud from '../Class/Cloud'

let frame3 = {
    ctn:null,
    init(){
        this.ctn = stage.layer('frame3');
        let Ground = new Sprite('Frame3Ground');
        Ground.attr({
            anchor:[0.5,1],
            pos:[stageprop.width/2 + 40,stageprop.height]
        });
        this.ctn.append(Ground);
        let VirusesMask =this.createViruses()
        this.ctn.append(VirusesMask)
        this.ctn.append(this.createRabitBot());
        
        this.ctn.append(this.createChange(()=>{
            let VirusesShow = this.createVirusesShow();
            VirusesMask.animate([
                {opacity:1,},
                {opacity:0,},
            ],{
                duration:250,
                fill:'forwards',
            }).finished.then(()=>{
                this.ctn.removeChild(VirusesMask);
                this.ctn.append(this.createTextAnim());
                tool.audioAutoPlay('lol');
                VirusesShow.animate([
                    {textures:'VirusesShow_anim0'},
                    {textures:'VirusesShow_anim1'},
                    {textures:'VirusesShow_anim2'},
                    {textures:'VirusesShow_anim3'},
                    {textures:'VirusesShow_anim4'},
                    {textures:'VirusesShow_anim5'},
                ],{
                    duration:250,
                    fill:'forwards'
                })
            })
            this.ctn.append(VirusesShow);
            
        }))
        this.ctn.append(this.createCloud())
        
        
    },
    createViruses(){
        let Viruses = new Sprite('Viruses');
        Viruses.attr({
            anchor:[0.5,0.5],
            scale:[1.2,1.2],
            pos:[stageprop.width/2,stageprop.height - 333],
            zIndex:2,
        })
        Viruses.animate([
            {scale:[1,1],},
            {scale:[1.2,1.2],},
        ],{
            duration:300,
            fill:'forwards'
        })
        return Viruses
    },
    createVirusesShow(){
        let Viruses = new Sprite('VirusesShow');
        Viruses.attr({
            anchor:[0.5,0.5],
            pos:[stageprop.width/2,stageprop.height - 333],
            zIndex:0,
        })
        return Viruses
    },
    createCloud(){
        let CloudGroup = new Group();
        
        let Frame3MoonCloud = Cloud.CreateCloud({
            anchor:[0.5,0.5],
            pos:[stageprop.width/2 - 100,stageprop.height/2 - 280],
        },1,null,false);
        let Frame3MountCloud = Cloud.CreateCloud({
            anchor:[0.5,0.5],
            pos:[stageprop.width/2 +299,stageprop.height/2 - 445],
        },2,null,true);
        let Frame3SkyCloud = Cloud.CreateCloud({
            anchor:[0.5,0.5],
            pos:[stageprop.width/2 -265,stageprop.height/2 + 91],
        },3,null,false);
        // Frame3MoonCloud.animate([
        //     {pos:[stageprop.width/2 - 100,stageprop.height/2 - 199],},
        //     {pos:[stageprop.width/2 ,stageprop.height/2 - 199],},
        //     {pos:[stageprop.width/2 - 100,stageprop.height/2 - 199],},
        // ],{
        //     duration: 5000,
        //     iterations:Infinity,
        // })
        // Frame3SkyCloud.animate([
        //     {pos:[stageprop.width/2 +299,stageprop.height/2 - 365],},
        //     {pos:[stageprop.width/2 +199,stageprop.height/2 - 365],},
        //     {pos:[stageprop.width/2 +299,stageprop.height/2 - 365],},
        // ],{
        //     duration: 5000,
        //     iterations:Infinity,
        // })
        // Frame3MountCloud.animate([
        //     {pos:[stageprop.width/2 -265,stageprop.height/2 + 171],},
        //     {pos:[stageprop.width/2 -165,stageprop.height/2 + 171],},
        //     {pos:[stageprop.width/2 -265,stageprop.height/2 + 171],},
        // ],{
        //     duration: 5000,
        //     iterations:Infinity,
        // })
        CloudGroup.append(Frame3MoonCloud,Frame3MountCloud,Frame3SkyCloud);

        return CloudGroup;
    },
    createChange(callback){
        let Change = new Sprite('change');
        Change.attr({
            anchor:[0.5,0.5],
            pos:[stageprop.width/2 + 230,stageprop.height/2 - 250]
        })
        Change.animate([
            {pos:[stageprop.width + Change.texturesSize[0],stageprop.height/2 - 250]},
            {pos:[stageprop.width/2 + 230,stageprop.height/2 - 250]},
        ],{
            duration:500,
            fill:'forwards'
        }).finished.then(()=>{
            callback();
        })

        return Change;
    },
    createTextAnim(){
        let text = new Sprite('text3_anim_2');
        text.attr({
            anchor:[0.5,0.5],
            pos:[stageprop.width/2,stageprop.height/2 - 80],
        });
        text.animate([
            {opacity:0,},
            {opacity:1,},
            {opacity:1,},
        ],{
            duration:750,
            fill:'forwards'
        }).finished.then(()=>{
            this.ctn.append(this.createHelpChangeButton());
        });
        return text;
    },
    createRabitBot() {
        let RabitBot = new Sprite("RabitBot");
        RabitBot.attr({
          anchor: [0.5, 0.5],
          pos: [stageprop.width / 2 + 206, stageprop.height / 2 + 250],
          scale:[-1,1]
        });
        // RabitBot.animate(
        //   [
        //     { pos: [stageprop.width + RabitBot.texturesSize[0], stageprop.height / 2 + 230] },
        //     { pos: [stageprop.width / 2 + 206, stageprop.height / 2 + 230] }
        //   ],
        //   {
        //     duration: 4000,
        //     fill: "forwards"
        //   }
        // );
        return RabitBot;
      },
    createHelpChangeButton(){
        let HelpChangeButton = new Sprite('HelpChangeButton');
        HelpChangeButton.attr({
            anchor:[0.5,0.5],
            pos:[stageprop.width/2,stageprop.height/2 + 493],
        });
        HelpChangeButton.on('click',()=>{
            viewhandle.changeView(4);
        })
        return HelpChangeButton;
    }
}

export default frame3