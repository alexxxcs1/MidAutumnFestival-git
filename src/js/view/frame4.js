import { stage, stageprop } from "../createstage";
import { Scene, Sprite, Group, Label } from "spritejs";
import viewhandle from "../viewhandle";
import Cloud from "../Class/Cloud";
import Viruses from "../Class/Viruses";

import TopTipsFrame from "./TopTipsFrame";

let frame4 = {
  ctn: null,
  end: false,
  init() {
    this.ctn = stage.layer("frame4");
    let Frame4Sky = new Sprite("Frame4Sky");
    Frame4Sky.attr({
      anchor: [511 / 1161, 0.5],
      pos: [stageprop.width / 2, stageprop.height / 2 + 40]
    });
    let startY = 0;
    let moveY = 0;
    this.ctn.on("touchstart", event => {
      startY = event.layerY;
      console.log("startY" + startY);
    });
    this.ctn.on("touchmove", event => {
      moveY = event.layerY;
      console.log("moveY" + moveY);
    });
    this.ctn.on("touchend", event => {
      let endMove = event.layerY - startY;
      if (endMove < -100 && this.end) {
        viewhandle.changeView(5);
      }else if(endMove > 100 && this.end){
        viewhandle.changeView(3);
      }
    });

    this.ctn.append(Frame4Sky);
    this.ctn.append(this.createCloud());
    this.ctn.append(this.createLantern());
    this.ctn.append(this.createBrige());
    this.ctn.append(
      this.createFemale(() => {
        let Frame4Text = new Sprite("Frame4Text");
        Frame4Text.attr({
          anchor: [0.5, 0.5],
          pos: [stageprop.width / 2, stageprop.height / 2 - 285]
        });
        this.ctn.append(Frame4Text);
        let VirusesGroup = this.createVirusesGroup(() => {
          setTimeout(() => {
            TopTipsFrame.AlertTips(1, () => {
              this.end = true;
              let SlideTips = new Sprite("slidetips");
              SlideTips.attr({
                anchor: [0.5, 0.5],
                pos: [
                  stageprop.width / 2,
                  stageprop.height - SlideTips.texturesSize[1]
                ],
                zIndex: 999
              });
              SlideTips.animate(
                [
                  {
                    pos: [
                      stageprop.width / 2,
                      stageprop.height - SlideTips.texturesSize[1] / 2
                    ]
                  },
                  {
                    pos: [
                      stageprop.width / 2,
                      stageprop.height - SlideTips.texturesSize[1]
                    ]
                  }
                ],
                {
                  duration: 500,
                  iterations: Infinity
                }
              );
              this.ctn.append(SlideTips);
            });
          }, 500);
        });
        this.ctn.append(VirusesGroup);
      })
    );
  },
  createBrige() {
    let Frame4Brige = new Sprite("Frame4Brige");
    Frame4Brige.attr({
      anchor: [0.5, 1],
      pos: [stageprop.width / 2, stageprop.height],
      zIndex: 2
    });
    // Frame4Brige.animate([
    //     {pos:[stageprop.width/2,stageprop.height]},
    //     {pos:[stageprop.width/2,stageprop.height + 5]},
    //     {pos:[stageprop.width/2,stageprop.height]},
    // ],{
    //     duration:500,
    //     iterations: Infinity,
    // })
    return Frame4Brige;
  },
  createFemale(callback) {
    let FemaleGroup = new Group();
    FemaleGroup.attr({
      zIndex: 3
    });
    let Female = new Sprite("Female");
    Female.attr({
      anchor: [0.5, 1],
      pos: [stageprop.width / 2 - 30, stageprop.height - 120],
      scale: [1, 1]
    });
    // Female.animate([
    //     {pos:[stageprop.width/2-30,stageprop.height],},
    //     {pos:[stageprop.width/2-30,stageprop.height - 314],}
    // ],{
    //     duration:2000,
    //     fill:'forwards'
    // }).finished.then(()=>{
    //     FemaleGroup.attr({
    //         zIndex:3,
    //     })
    //     Female.animate([
    //         {
    //             pos:[stageprop.width/2-30,stageprop.height - 314],
    //             scale:[0.8,0.8]},
    //         {
    //             pos:[stageprop.width/2-30,stageprop.height - 120],
    //             scale:[1,1],}
    //     ],{
    //         duration:2000,
    //         fill:'forwards'
    //     }).finished.then(()=>{
    //         callback();
    //     })
    // })
    callback();
    FemaleGroup.append(Female);
    return FemaleGroup;
  },
  createCloud() {
    let CloudGroup = new Group();
    let Frame4Cloud1 = Cloud.CreateCloud(
      {
        scale: [0.7, 0.7],
        anchor: [0.5, 0.5],
        pos: [stageprop.width / 2 - 329, stageprop.height / 2 - 395]
      },
      2,
      null,
      true
    );
    let Frame4Cloud2 = Cloud.CreateCloud(
      {
        scale: [0.7, 0.7],
        anchor: [0.5, 0.5],
        pos: [stageprop.width / 2 + 324, stageprop.height / 2 - 235]
      },
      3,
      null,
      false
    );
    let Frame4Cloud3 = Cloud.CreateCloud(
      {
        scale: [0.7, 0.7],
        anchor: [0.5, 0.5],
        pos: [stageprop.width / 2 - 212, stageprop.height / 2 - 182]
      },
      1,
      null,
      true
    );

    Frame4Cloud1.attr();
    Frame4Cloud2.attr();
    Frame4Cloud3.attr();
    Frame4Cloud1.animate(
      [
        { pos: [stageprop.width / 2 - 329, stageprop.height / 2 - 395] },
        { pos: [stageprop.width / 2 - 229, stageprop.height / 2 - 395] },
        { pos: [stageprop.width / 2 - 329, stageprop.height / 2 - 395] }
      ],
      {
        duration: 5000,
        iterations: Infinity
      }
    );

    Frame4Cloud2.animate(
      [
        { pos: [stageprop.width / 2 + 324, stageprop.height / 2 - 235] },
        { pos: [stageprop.width / 2 + 224, stageprop.height / 2 - 235] },
        { pos: [stageprop.width / 2 + 324, stageprop.height / 2 - 235] }
      ],
      {
        duration: 5000,
        iterations: Infinity
      }
    );

    Frame4Cloud3.animate(
      [
        { pos: [stageprop.width / 2 - 212, stageprop.height / 2 - 182] },
        { pos: [stageprop.width / 2 - 112, stageprop.height / 2 - 182] },
        { pos: [stageprop.width / 2 - 212, stageprop.height / 2 - 182] }
      ],
      {
        duration: 5000,
        iterations: Infinity
      }
    );

    CloudGroup.append(Frame4Cloud1, Frame4Cloud2, Frame4Cloud3);
    return CloudGroup;
  },
  createLantern() {
    let Lantern = new Sprite("Lantern");
    Lantern.attr({
      anchor: [392 / 912, 0],
      pos: [stageprop.width / 2, 0]
    });
    return Lantern;
  },
  createVirusesGroup(callback) {
    let Groups = new Group();

    let V2 = Viruses.CreateViruses(2);
    let V3 = Viruses.CreateViruses(3);
    V2.attr({
      pos: [96, 151]
    });
    V3.attr({
      // pos:[198,85],
      scale: 0
    });
    V3.animate([{ scale: 0, pos: [0, 220] }, { scale: 1, pos: [198, 85] }], {
      duration: 500,
      fill: "forwards",
      delay: 500
    });
    Groups.append(V2, V3);
    Groups.attr({
      size: [294, 232],
      // bgcolor:'#333',
      zIndex: 3,
      anchor: [0.5, 0.5],
      pos: [stageprop.width / 2, stageprop.height / 2]
    });

    let SmVirusesChild = new Sprite("SmVirusesChild");
    let BigVirusesChild = new Sprite("BigVirusesChild");
    let VirusesAir = new Sprite("VirusesAir");
    let VirusesPity = new Sprite("VirusesPity");

    BigVirusesChild.attr({
      anchor: [0.5, 0.5],
      pos: [162, 213]
    });
    SmVirusesChild.attr({
      anchor: [0.5, 0.5],
      pos: [109, 81]
    });
    VirusesAir.attr({
      anchor: [0.5, 0.5],
      pos: [282, 47]
    });
    VirusesPity.attr({
      anchor: [0.5, 0.5],
      pos: [84, 217]
    });

    let shineAni = [
      {
        scale: [1, 1],
        opacity: 1
      },
      {
        scale: [0.8, 0.8],
        opacity: 0.5
      },
      {
        scale: [1, 1],
        opacity: 1
      }
    ];

    BigVirusesChild.animate(shineAni, {
      duration: 500,
      iterations: Infinity
    });
    SmVirusesChild.animate(shineAni, {
      duration: 500,
      iterations: Infinity
    });
    VirusesPity.animate(shineAni, {
      duration: 500,
      iterations: Infinity
    });
    VirusesAir.animate(
      [
        {
          opacity: 1,
          pos: [282, 47],
          rotate: 0
        },
        {
          opacity: 0,
          pos: [282, 0],
          rotate: 360
        }
      ],
      {
        duration: 500,
        iterations: Infinity
      }
    );

    // Groups.append(SmVirusesChild,BigVirusesChild,VirusesAir,VirusesPity);
    Groups.attr({
      zIndex: 4,
      anchor: [0.5, 0.5]
    });
    Groups.animate(
      [
        {
          scale: [0.1, 0.1],
          pos: [stageprop.width / 2 + 53, stageprop.height / 2 + 30]
        },
        {
          scale: [1, 1],
          pos: [stageprop.width / 2 + 207, stageprop.height / 2 - 52]
        }
      ],
      {
        duration: 500,
        fill: "forwards"
      }
    ).finished.then(() => {
      Groups.append(SmVirusesChild, BigVirusesChild, VirusesAir, VirusesPity);
      callback();
    });
    return Groups;
  }
};
export default frame4;
