import {stage,stageprop} from '../createstage';
import {Scene,Sprite,Group,Label} from 'spritejs';
import viewhandle from '../viewhandle'

let indexframe = {
    ctn:null,
    init(){
        this.ctn = stage.layer('indexframe');
        let FramesGroup = this.createFrameGroup();
        FramesGroup.attr({
            anchor:[0.5,0.5],
            pos:[stageprop.width/2+200,stageprop.height/2]
        })
        FramesGroup.animate([
            {scale:10,opacity:0,},
            {scale:1,opacity:1,},
        ],{
            duration: 1000,
            fill: 'forwards',
        }).finished.then(()=>{
            indexframe.ctn.append(indexframe.createCloud());
            let change = indexframe.createChange();
            change.attr({
                anchor:[0.5,0.5],
                scale:[1,1],
                pos:[stageprop.width/2 + 176,stageprop.height/2]
            })
            change.animate([
                {pos:[stageprop.width + change.texturesSize[0],stageprop.height/2]},
                {pos:[stageprop.width/2 + 176,stageprop.height/2]},
            ],{
                duration:1000,
                fill:'forwards',
            })
            this.ctn.append(change);

            let linetext = indexframe.createLineText();
            this.ctn.append(linetext);
        })
        this.ctn.append(FramesGroup);

        let text = new Label('审批编号  CN-18755\n有效期 2020-9-11');
        text.attr({
            anchor:[1,1],
            pos:[stageprop.width - 30,stageprop.height - 90],
            font: '22px "微软雅黑"',
            fillColor:'#fff'
        });
        this.ctn.append(text)
    },
    createFrameGroup(){
        let group = new Group();
        //创建月亮
        let Moon = new Sprite('Moon');
        Moon.attr({
            anchor:[841/1256,0.5],
            pos:[stageprop.width,stageprop.height/2 - 80],
            scale:[1.1,1.1]
        })
        let MoonShine = new Sprite('MoonShine');
        MoonShine.attr({
            anchor:[841/1256,0.5],
            pos:[stageprop.width,stageprop.height/2 - 80],
            scale:[1.1,1.1],
            opacity:0.9,
        })
        MoonShine.animate([
            {scale:[1.1,1.1]},
            {scale:[0.9,0.9]},
            {scale:[1.1,1.1]},
        ],{
            duration:2500,
            iterations:Infinity,
        })
        group.append(MoonShine,Moon);
        //创建近景远景 群山南天门河岸
        let Mounts = new Sprite('Mounts');
        Mounts.attr({
            anchor:[497/992,1],
            pos:[stageprop.width/2,stageprop.height]
        })
        group.append(Mounts);
        
        //创建兔子
        let RabitLeft = new Sprite('RabitLeft');
        let RabitRight = new Sprite('RabitRight');
        RabitLeft.attr({
            anchor:[0.5,0.5],
            pos:[104,stageprop.height - 113]
        })
        RabitRight.attr({
            anchor:[0.5,0.5],
            pos:[224,stageprop.height - 64]
        })
        group.append(RabitLeft,RabitRight);
        //凡间入口 按钮
        let EnterButton = new Sprite('EnterButton');
        EnterButton.attr({
            anchor:[0.5,0.5],
            pos:[stageprop.width/2,stageprop.height - 179]
        })

        // let waterani = [];
        // for (let j = 1; j <= 23; j++) {
        //     waterani.push({textures:'waterwave'+j})
        // }
        // EnterButton.animate(waterani,{
        //     duration:1000,
        //     iterations:Infinity,
        // });
        let wave = new Sprite('wave');
        wave.attr({
            anchor:[0.5,0.5],
            pos:[stageprop.width/2,stageprop.height - 179]
        })
        wave.animate([
            {opacity:0,scale:[0.9,0.9]},
            {opacity:1,scale:[1,1]},
            {opacity:0,scale:[1.1,1.1]},
        ],{
            duration:1000,
            iterations:Infinity
        })
        EnterButton.on('click',()=>{
            viewhandle.changeView(2)
        })
        group.append(EnterButton,wave);

        return group;
    },
    createCloud(){
        //创建漂浮的云朵
        let CloudGroup = new Group();

        let Cloud = new Sprite('Cloud');
        Cloud.attr({
            anchor:[0.5,0.5],
            pos:[stageprop.width/2,stageprop.height/2 - 90]
        })
        // CloudGroup.append(Cloud);

        let Cloud1 = new Sprite('Cloud1');
        let Cloud2 = new Sprite('Cloud2');
        let Cloud3 = new Sprite('Cloud3');

        //统一 设置 云朵属性
        Cloud1.attr({
            anchor:[0.5,0.5],
            pos:[0,stageprop.height/2 -283]
        })
        Cloud2.attr({
            anchor:[0.5,0.5],
            pos:[stageprop.width/2 + 251,stageprop.height/2 -157]
        })
        Cloud3.attr({
            anchor:[0.5,0.5],
            pos:[80,stageprop.height/2 + 140]
        })

        //设置云朵1动画
        Cloud1.animate([
            {pos:[-Cloud1.texturesSize[0],stageprop.height/2 -283]},
            {pos:[0,stageprop.height/2 -283]}
        ],{
            duration: 1000,
            fill: 'forwards',
        }).finished.then(()=>{
            Cloud1.animate([
                {pos:[0,stageprop.height/2 -283]},
                {pos:[100,stageprop.height/2 -283]},
                {pos:[0,stageprop.height/2 -283]},
            ],{
                duration: 5000,
                iterations:Infinity,
            })
        })

        //设置云朵2动画
        Cloud2.animate([
            {pos:[stageprop.width/2 + 251 + Cloud2.texturesSize[0],stageprop.height/2 -157]},
            {pos:[stageprop.width/2 + 251,stageprop.height/2 -157]}
        ],{
            duration: 1000,
            fill: 'forwards',
        }).finished.then(()=>{
            Cloud2.animate([
                {pos:[stageprop.width/2 + 251,stageprop.height/2 -157]},
                {pos:[stageprop.width/2 + 151,stageprop.height/2 -157]},
                {pos:[stageprop.width/2 + 251,stageprop.height/2 -157]},
            ],{
                duration: 5000,
                iterations:Infinity,
            })
        })

        //设置云朵3动画
        Cloud3.animate([
            {pos:[-Cloud3.texturesSize[0],stageprop.height/2 + 140]},
            {pos:[80,stageprop.height/2 + 140]}
        ],{
            duration: 1000,
            fill: 'forwards',
        }).finished.then(()=>{
            Cloud3.animate([
                {pos:[80,stageprop.height/2 + 140]},
                {pos:[-20,stageprop.height/2 + 140]},
                {pos:[80,stageprop.height/2 + 140]},
            ],{
                duration: 5000,
                iterations:Infinity,
            })
        })
        //添加云朵123
        CloudGroup.append(Cloud1,Cloud2,Cloud3);
        
        // Cloud.animate([
        //     {pos:[stageprop.width/2,stageprop.height/2 - 90]},
        //     {pos:[stageprop.width/2 - 100,stageprop.height/2 - 90]},
        //     {pos:[stageprop.width/2,stageprop.height/2 - 90]},
        //     {pos:[stageprop.width/2 + 100,stageprop.height/2 - 90]},
        //     {pos:[stageprop.width/2,stageprop.height/2 - 90]},
        // ],{
        //     duration: 10000,
        //     iterations: Infinity,
        // })

        return CloudGroup;
    },
    createChange(){
        let Change = new Sprite('change');
        return Change;
    },
    createLineText(){
        let textGroup = new Group();
        
        let text1 = new Sprite('text1');
        text1.attr({
            anchor:[1,0.5],
            pos:[text1.texturesSize[0],text1.texturesSize[1]/2],
        })
        
        textGroup.attr({
            size:[text1.texturesSize[0],text1.texturesSize[1]],
            anchor:[1,0.5],
            pos:[stageprop.width/2 + text1.texturesSize[0]/2 - 20,stageprop.height/2 - 115],
            // bgcolor:'red'
        })
        text1.animate([
            {pos:[0,text1.texturesSize[1]/2],},
            {pos:[text1.texturesSize[0],text1.texturesSize[1]/2],},            
        ],{
            duration:1000,
            fill:'forwards',

        })
        textGroup.animate([
            {size:[0,text1.texturesSize[1]],},
            {size:[text1.texturesSize[0],text1.texturesSize[1]],},
        ],{
            duration:1000,
            fill:'forwards',

        })
        textGroup.append(text1);
        return textGroup;
    }
}

export default indexframe