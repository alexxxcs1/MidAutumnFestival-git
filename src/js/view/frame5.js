import { stage, stageprop } from "../createstage";
import { Scene, Sprite, Group, Label } from "spritejs";
import viewhandle from "../viewhandle";
import TopTipsFrame from "./TopTipsFrame";
import Cloud from "../Class/Cloud";

import Viruses from "../Class/Viruses";

let frame5 = {
  ctn: null,
  end: false,
  init() {
    this.ctn = stage.layer("frame5");

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
        viewhandle.changeView(6);
      }else if(endMove > 100 && this.end){
        viewhandle.changeView(4);
      }
    });

    let Ground = new Sprite("Frame5Ground");
    Ground.attr({
      anchor: [527 / 1097, 1],
      pos: [stageprop.width / 2, stageprop.height]
    });
    Ground.animate([{ scale: [10, 10] }, { scale: [1, 1] }], {
      duration: 500,
      fill: "forwards"
    });
    this.ctn.append(Ground);

    let MidLayer = new Sprite("Frame5MidLayer");
    MidLayer.attr({
      anchor: [478 / 1011, 1210 / 1293],
      pos: [stageprop.width / 2, stageprop.height],
      zIndex: 1
    });
    this.ctn.append(this.createCloud());
    MidLayer.animate([{ scale: [10, 10] }, { scale: [1, 1] }], {
      duration: 500,
      fill: "forwards"
    }).finished.then(() => {
      this.ctn.append(this.createFireWork());
      this.ctn.append(this.createTreeLantern());
      this.ctn.append(
        this.createText(() => {
          let VirusesGroup = this.createVirusesAnim();
          VirusesGroup.attr({
            anchor: [0.5, 1],
            pos: [stageprop.width / 2, stageprop.height - 119],
            zIndex: 4
          });
          VirusesGroup.animate([{ opacity: 0 }, { opacity: 1 }], {
            duration: 250,
            fill: "forwards"
          });
          this.ctn.append(VirusesGroup);

          setTimeout(() => {
            TopTipsFrame.AlertTips(2, () => {
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
                  duration: 1000,
                  iterations: Infinity
                }
              );
              this.ctn.append(SlideTips);
            });
          }, 500);
        })
      );
    });
    this.ctn.append(MidLayer);
  },
  createVirusesAnim() {
    let VirusesGroup = new Group();
    VirusesGroup.attr({
      size: [600, 253]
      //   bgcolor: "#fff"
    });

    let V1 = Viruses.CreateViruses(1, 500);
    V1.attr({
      pos: [135, 176]
    });
    let V2 = Viruses.CreateViruses(2, 500);
    V2.attr({
      pos: [238, 51]
    });
    let V3 = Viruses.CreateViruses(3, 500);
    V3.attr({
      pos: [501, 127]
    });
    VirusesGroup.append(V1, V2, V3);

    let BigVirusesChild = new Sprite("BigVirusesChild");
    let SmVirusesChild = new Sprite("SmVirusesChild");
    let VirusesAir = new Sprite("VirusesAir");
    let VirusesAirsm = new Sprite("VirusesAir");
    let VirusesStrongAir = new Sprite("VirusesStrongAir");

    BigVirusesChild.attr({
      anchor: [0.5, 0.5],
      pos: [429, 55]
    });
    SmVirusesChild.attr({
      anchor: [0.5, 0.5],
      pos: [76, 121]
    });
    VirusesAir.attr({
      anchor: [0.5, 0.5],
      pos: [27, 228],
      scale: [2, 2]
    });
    VirusesAirsm.attr({
      anchor: [0.5, 0.5],
      pos: [341, 58]
    });
    VirusesStrongAir.attr({
      anchor: [0.5, 0.5],
      pos: [193, 183]
    });

    let AnimShine = [{ opacity: 1 }, { opacity: 0.6 }, { opacity: 1 }];
    BigVirusesChild.animate(AnimShine, {
      duration: 500,
      iterations: Infinity
    });
    SmVirusesChild.animate(AnimShine, {
      duration: 500,
      iterations: Infinity
    });

    VirusesAir.animate(
      [
        {
          pos: [27, 228],
          rotate: 0,
          opacity: 1
        },
        {
          pos: [27, 178],
          rotate: 360,
          opacity: 0
        }
      ],
      {
        duration: 500,
        iterations: Infinity
      }
    );
    VirusesAirsm.animate(
      [
        {
          pos: [341, 58],
          rotate: 0,
          opacity: 1
        },
        {
          pos: [341, 8],
          rotate: 360,
          opacity: 0
        }
      ],
      {
        duration: 500,
        iterations: Infinity
      }
    );

    VirusesStrongAir.animate(
      [
        {
          pos: [193, 183],
          opacity: 1
        },
        {
          pos: [243, 183],
          opacity: 0
        }
      ],
      {
        duration: 500,
        iterations: Infinity
      }
    );

    // VirusesGroup.append(
    //   BigVirusesChild,
    //   SmVirusesChild,
    //   VirusesAir,
    //   VirusesAirsm,
    //   VirusesStrongAir
    // );

    return VirusesGroup;
  },
  createTreeLantern() {
    let TreeLantern = new Sprite("TreeLantern");
    TreeLantern.attr({
      anchor: [293 / 366, 0],
      pos: [stageprop.width, 0]
    });

    return TreeLantern;
  },
  createCloud() {
    let CloudGroup = new Group();

    let Frame5SkyCloud = Cloud.CreateCloud(
      {
        anchor: [0.5, 0.5],
        pos: [stageprop.width / 2 + 98, stageprop.height / 2 - 393]
      },
      1,
      null,
      false
    );
    let Frame5MoonCloud = Cloud.CreateCloud(
      {
        scale: [0.5, 0.5],
        anchor: [0.5, 0.5],
        pos: [stageprop.width / 2 - 96, stageprop.height / 2 - 317]
      },
      3,
      null,
      false
    );
    let Frame5LakeCloud = Cloud.CreateCloud(
      {
        anchor: [0.5, 0.5],
        pos: [stageprop.width / 2 + 267, stageprop.height / 2 - 27]
      },
      2,
      null,
      true
    );
    Frame5SkyCloud.animate(
      [
        { pos: [stageprop.width / 2 + 98, stageprop.height / 2 - 393] },
        { pos: [stageprop.width / 2 - 8, stageprop.height / 2 - 393] },
        { pos: [stageprop.width / 2 + 98, stageprop.height / 2 - 393] }
      ],
      {
        duration: 5000,
        iterations: Infinity
      }
    );
    Frame5MoonCloud.animate(
      [
        { pos: [stageprop.width / 2 - 96, stageprop.height / 2 - 317] },
        { pos: [stageprop.width / 2 + 16, stageprop.height / 2 - 317] },
        { pos: [stageprop.width / 2 - 96, stageprop.height / 2 - 317] }
      ],
      {
        duration: 5000,
        iterations: Infinity
      }
    );
    Frame5LakeCloud.animate(
      [
        { pos: [stageprop.width / 2 + 267, stageprop.height / 2 - 27] },
        { pos: [stageprop.width / 2 + 167, stageprop.height / 2 - 27] },
        { pos: [stageprop.width / 2 + 267, stageprop.height / 2 - 27] }
      ],
      {
        duration: 5000,
        iterations: Infinity
      }
    );

    CloudGroup.append(Frame5SkyCloud, Frame5MoonCloud, Frame5LakeCloud);

    return CloudGroup;
  },
  FireworkAni(sprite) {
    sprite.attr({
      anchor: [0.5, 0.5]
    });
    sprite
      .animate(
        [
          {
            scale: [0, 0],
            pos: [
              stageprop.width/2 * Math.random() + stageprop.width/4,
              (stageprop.height / 2) * Math.random()
            ],
            opacity: 1
          },
          { scale: [1, 1] },
          { scale: [1.2, 1.2], opacity: 0 }
        ],
        {
          duration: 1000,
          fill: "forwards"
        }
      )
      .finished.then(() => {
        this.FireworkAni(sprite);
      });
  },
  createFireWork() {
    let FireworkGroup = new Group();
    FireworkGroup.attr({
      zIndex: 0
    });

    let firework1 = new Sprite("Firework2");
    let firework2 = new Sprite("Firework4");
    let firework3 = new Sprite("Firework7");
    let firework4 = new Sprite("Firework9");
    let firework5 = new Sprite("Firework8");
    let firework6 = new Sprite("Firework6");
    let firework7 = new Sprite("Firework3");
    let firework8 = new Sprite("Firework1");
    let firework9 = new Sprite("Firework5");
    this.FireworkAni(firework1);
    this.FireworkAni(firework2);
    this.FireworkAni(firework3);
    this.FireworkAni(firework4);
    this.FireworkAni(firework5);
    this.FireworkAni(firework6);
    this.FireworkAni(firework7);
    this.FireworkAni(firework8);
    this.FireworkAni(firework9);
    FireworkGroup.append(
      firework1,
      firework2,
      firework4,
      firework5,
    );

    return FireworkGroup;
  },
  createText(callback) {
    let Frame5Text = new Sprite("Frame5Text");

    Frame5Text.attr({
      anchor: [0.5, 0.5],
      pos: [stageprop.width / 2, stageprop.height / 2 - 99]
    });
    Frame5Text.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 500,
      fill: "forwards"
    }).finished.then(() => {
      callback();
    });

    return Frame5Text;
  }
};

export default frame5;
