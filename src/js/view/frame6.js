import { stage, stageprop } from "../createstage";
import { Scene, Sprite, Group, Label } from "spritejs";
import viewhandle from "../viewhandle";
import TopTipsFrame from "./TopTipsFrame";
import tool from "../tool";

import Viruses from "../Class/Viruses";

let frame6 = {
  ctn: null,
  end: false,
  init() {
    this.ctn = stage.layer("frame6");

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
        viewhandle.changeView(7);
      } else if (endMove > 100 && this.end) {
        viewhandle.changeView(5);
      }
    });

    let Frame6Ground = new Sprite("Frame6Ground");
    Frame6Ground.attr({
      anchor: [665 / 1280, 0],
      pos: [stageprop.width / 2, 0]
    });
    Frame6Ground.animate([{ scale: [10, 10] }, { scale: [1, 1] }], {
      duration: 500,
      fill: "forwards"
    });

    let RoundTable = this.createRoundPeople();
    RoundTable.attr({
      zIndex: 2
    });
    RoundTable.animate([{ scale: [10, 10] }, { scale: [1, 1] }], {
      duration: 500,
      fill: "forwards"
    }).finished.then(() => {
      setTimeout(() => {
        let createText = this.createText();
        this.ctn.append(createText);
        // createText.textures = "Frame6Text1";
        this.ctn.append(
          this.createViruse(() => {
            // createText.textures = "Frame6Text2";
          })
        );
        this.ctn.append(
          this.createFart(() => {
            setTimeout(() => {
              TopTipsFrame.AlertTips(3, () => {
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
            }, 100);
          })
        );
      }, 500);
    });
    this.ctn.append(Frame6Ground);
    this.ctn.append(RoundTable);
  },
  createRoundPeople() {
    let RoundGroup = new Group();
    let RoundPeople = new Sprite("Frame6RoundPeople");
    RoundPeople.attr({
      anchor: [0.5, 0.5],
      pos: [stageprop.width / 2 + 24, 990]
    });

    let RoundTable = new Sprite("Frame6RoundTable");
    RoundTable.attr({
      anchor: [0.5, 0.5],
      pos: [stageprop.width / 2, 1115]
    });

    RoundGroup.append(RoundPeople, RoundTable);

    return RoundGroup;
  },
  createFart(callback) {
    let Fart = new Sprite("FartAni1");
    Fart.attr({
      anchor: [1, 1],
      pos: [85, 1041],
      zIndex: 1,
      opacity: 0
    });
    // tool.audioAutoPlay("Fart");
    Fart.animate(
      [
        { textures: "FartAni1", opacity: 0 },
        { textures: "FartAni2", opacity: 1 },
        { textures: "FartAni3" },
        { textures: "FartAni4" },
        { textures: "FartAni5" },
        { textures: "FartAni6", opacity: 1 },
        { textures: "FartAni7", opacity: 1 },
      ],
      {
        duration: 1500,
        fill: "forwards",
      }
    ).finished.then(() => {
      Fart.animate(
        [
          { textures: "FartAni7", opacity: 1 },
          { textures: "FartAni7", opacity: 0 },
        ],
        {
          duration: 1500,
          fill: "forwards",
        }
      )
      callback();
    });
    return Fart;
  },
  createViruse(callback) {
    let VirusesGroup = new Group({ zIndex: 3 });
    VirusesGroup.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 500,
      fill: "forwards"
    });

    // tool.audioAutoPlay("Hiccup");
    let Hiccup = Viruses.createHiccup(() => {
      let V1 = Viruses.CreateViruses(1);
      V1.attr({
        anchor: [0.5, 0.5],
        pos: [517, 956]
      });
      let V2 = Viruses.CreateViruses(2);
      V2.attr({
        scale: [0.7, 0.7],
        anchor: [0.5, 0.5],
        pos: [545, 775]
      });
      V2.animate([{ pos: [465, 775] }, { pos: [545, 775] }], {
        duration: 500,
        fill: "forwards"
      });
      let V3 = Viruses.CreateViruses(3);
      V3.attr({
        scale: [0.8, 0.8],
        anchor: [0.5, 0.5],
        pos: [395, 750]
      });
      V3.animate(
        [
          { scale: [0, 0], pos: [470, 750] },
          { scale: [1, 1], pos: [395, 750] }
        ],
        {
          duration: 500,
          fill: "forwards"
        }
      ).finished.then(() => {});
      setTimeout(() => {
        callback();
      }, 1500);
      let VChild = Viruses.CreateVirusesAir(
        {
          pos: [220, 982]
        },
        1
      );
      let VChild2 = Viruses.CreateVirusesAir(
        {
          pos: [387, 1034]
        },
        1
      );

      let VAir = Viruses.CreateVirusesAir(
        {
          pos: [332, 987]
        },
        2
      );
      let VAir2 = Viruses.CreateVirusesAir(
        {
          pos: [400, 674]
        },
        2
      );
      VirusesGroup.append(V1, V2, V3, VChild, VChild2, VAir, VAir2);
    });
    Hiccup.attr({
      pos: [460, 799]
    });

    VirusesGroup.append(Hiccup);

    return VirusesGroup;
  },
  createText(callback) {
    let Frame6Text = new Sprite("Frame6Text");
    Frame6Text.attr({
      pos: [stageprop.width / 2, stageprop.height / 2 - 100],
      anchor: [0.5, 0.5]
    });
    return Frame6Text;
  }
};

export default frame6;
