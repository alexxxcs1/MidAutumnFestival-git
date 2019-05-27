import { stage, stageprop } from "../createstage";
import { Scene, Sprite, Group, Label } from "spritejs";
import viewhandle from "../viewhandle";

import Viruse from "../Class/Viruses";
import TopTipsFrame from "./TopTipsFrame";

let frame7 = {
  ctn: null,
  end: false,
  init() {
    this.ctn = stage.layer("frame7");

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
        viewhandle.changeView(8);
      } else if (endMove > 100 && this.end) {
        viewhandle.changeView(6);
      }
    });

    let Frame7Ground = new Sprite("Frame7Ground");
    Frame7Ground.attr({
      anchor: [432 / 1061, 1],
      pos: [stageprop.width / 2, stageprop.height]
    });
    let Moon = new Sprite("Moon");
    Moon.attr({
      anchor: [0, 490 / 1098],
      pos: [91, 0]
    });
    Moon.animate([{ pos: [91, stageprop.height] }, { pos: [91, 0] }], {
      duration: 0,
      fill: "forwards"
    }).finished.then(() => {});
    this.ctn.append(Moon);
    this.ctn.append(
      this.createText(() => {
        this.ctn.append(
          this.createBreath(() => {
            let VirusesGroup = this.createVirusesGroup({
              pos: [148, 735 - 128]
            });
            this.ctn.append(VirusesGroup);
            setTimeout(() => {
              TopTipsFrame.AlertTips(4, () => {
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
            }, 300);
          })
        );
        this.ctn.append(
          this.createSky(() => {
            
          })
        );
      })
    );

    this.ctn.append(Frame7Ground);
  },
  createSky(callback) {
    let SkyGroup = new Group();

    let Moonlantern = new Sprite("KMlantern");
    Moonlantern.attr({
      anchor: [0.5, 0.5],
      pos: [476, 264]
    });
    Moonlantern.animate(
      [{ pos: [476, stageprop.height / 2 - 70] }, { pos: [476, 264] }],
      {
        duration: 3000,
        fill: "forwards"
      }
    ).finished.then(() => {
      callback();
      Moonlantern.animate(
        [{ pos: [476, 264] }, { pos: [476, 294] }, { pos: [476, 264] }],
        {
          duration: 3000,
          iterations: Infinity
        }
      );
    });
    let Skylantern = new Sprite("KMlantern");
    Skylantern.attr({
      scale: [-0.7, 0.7],
      anchor: [0.5, 0.5],
      pos: [269, 376]
    });
    Skylantern.animate(
      [{ pos: [269, stageprop.height / 2 - 70] }, { pos: [269, 376] }],
      {
        duration: 3000,
        fill: "forwards"
      }
    ).finished.then(() => {
      Skylantern.animate(
        [{ pos: [269, 376] }, { pos: [269, 406] }, { pos: [269, 376] }],
        {
          duration: 3000,
          iterations: Infinity
        }
      );
    });
    let Toplantern = new Sprite("KMlantern");
    Toplantern.attr({
      scale: [0.5, 0.5],
      opacity: 0.9,
      anchor: [0.5, 0.5],
      pos: [220, 176]
    });
    Toplantern.animate(
      [{ pos: [220, stageprop.height / 2 - 70] }, { pos: [220, 176] }],
      {
        duration: 3000,
        fill: "forwards"
      }
    ).finished.then(() => {
      Toplantern.animate(
        [{ pos: [220, 176] }, { pos: [220, 206] }, { pos: [220, 176] }],
        {
          duration: 3000,
          iterations: Infinity
        }
      );
    });
    let Topstlantern = new Sprite("KMlantern");
    Topstlantern.attr({
      scale: [0.5, 0.5],
      opacity: 0.6,
      anchor: [0.5, 0.5],
      pos: [115, 10]
    });
    Topstlantern.animate(
      [{ pos: [115, stageprop.height / 2 - 70] }, { pos: [115, 10] }],
      {
        duration: 3000,
        fill: "forwards"
      }
    ).finished.then(() => {
      Topstlantern.animate(
        [{ pos: [115, 10] }, { pos: [115, 40] }, { pos: [115, 10] }],
        {
          duration: 3000,
          iterations: Infinity
        }
      );
    });
    SkyGroup.append(Moonlantern, Skylantern, Toplantern, Topstlantern);
    return SkyGroup;
  },
  createVirusesGroup(attr) {
    let ViruseGroup = new Group({
      size: [350, 169],
      // bgcolor:'#fff',
      ...attr
    });
    let V2 = Viruse.CreateViruses(2);
    let V3 = Viruse.CreateViruses(3);

    V2.attr({
      pos: [90, 60],
      scale: [0.9, 0.9]
    });
    V3.attr({
      pos: [224, 85],
      scale: [0.9, 0.9]
    });

    let Va1 = Viruse.CreateVirusesAir(
      {
        pos: [12, 78]
      },
      1
    );
    let Va2 = Viruse.CreateVirusesAir(
      {
        pos: [171, 24],
        scale: [1.5, 1.5]
      },
      1
    );
    let Va3 = Viruse.CreateVirusesAir(
      {
        pos: [136, 110]
      },
      2
    );
    ViruseGroup.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 500,
      fill: "forwards"
    });
    ViruseGroup.append(V2, V3, Va1, Va2, Va3);

    return ViruseGroup;
  },
  createBreath(callback) {
    let Breath = new Sprite("BreathAnim1");
    Breath.attr({
      pos: [150, 700]
    });
    Breath.animate(
      [
        { textures: "BreathAnim1" },
        { textures: "BreathAnim2" },
        { textures: "BreathAnim3" },
        { textures: "BreathAnim4" },
        { textures: "BreathAnim5" }
      ],
      {
        duration: 800,
        fill: "forwards"
      }
    ).finished.then(() => {
      callback();
    });

    return Breath;
  },
  createText(callback) {
    let Frame7Text = new Sprite("Frame7Text");

    Frame7Text.attr({
      anchor: [0.5, 0.5],
      pos: [stageprop.width / 2, stageprop.height / 2 - 50],
      zIndex: 9
    });
    Frame7Text.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 500,
      fill: "forwards"
    }).finished.then(() => {
      setTimeout(() => {
        callback();
      }, 500);
    });

    return Frame7Text;
  }
};

export default frame7;
