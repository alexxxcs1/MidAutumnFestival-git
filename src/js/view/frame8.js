import { stage, stageprop } from "../createstage";
import { Scene, Sprite, Group, Label } from "spritejs";
import viewhandle from "../viewhandle";
import TopTipsFrame from './TopTipsFrame'

import Viruses from "../Class/Viruses";

let frame8 = {
  ctn: null,
  init() {
    this.ctn = stage.layer("frame8");

    let couple = this.createCouple();
    couple.attr({
      opacity: 0
    });
    this.ctn.append(couple);
    let Ground = this.createGround(() => {
      setTimeout(() => {
        couple.attr({
          opacity: 1
        });
        Ground.attr({
          anchor: [380 / 1054, 708 / 1108],
          pos: [stageprop.width / 2 - 85, stageprop.height / 2 + 279]
        });
        Ground.animate([
          { opacity: 1, scale: [1, 1] },
          { opacity: 0, scale: [10, 10] },
        ], {
          duration: 750,
          fill: "forwards",
        }).finished.then(() => {
          // Ground.animate([
          //   { opacity: 0},
          // ], {
          //   duration: "1000",
          //   fill: "forwards"
          // })
          let VirusesKiss = new Sprite("VirusesKiss1");
          VirusesKiss.attr({
              anchor:[0.5,0.5],
              pos:[465,793-128]
          })
          VirusesKiss.animate(
            [
              { textures: "VirusesKiss1" },
              { textures: "VirusesKiss2" },
              { textures: "VirusesKiss3" },
              { textures: "VirusesKiss4" },
              { textures: "VirusesKiss5" }
            ],
            {
              duration: 250,
              fill: "forwards"
            }
          ).finished.then(() => {
            let Viruses = this.createVirusesGroup();
            Viruses.animate([
                {opacity:0},
                {opacity:1},
            ],{
                duration:500,
                fill:'forwards'
            })
            Viruses.attr({
              anchor: [0.5, 0.5],
              pos: [494, 617-128]
            });
            this.ctn.append(Viruses);

            setTimeout(() => {
                TopTipsFrame.AlertTips(5,()=>{
                    viewhandle.changeView(9);
                })
            }, 1000);

          });
          this.ctn.append(VirusesKiss);
        });
      }, 500);
    });
    this.ctn.append(Ground);
  },
  createCouple() {
    let CoupleWithMoon = new Sprite("Frame8Kiss");
    CoupleWithMoon.attr({
      anchor: [0.5, 1],
      pos: [stageprop.width / 2 + 20, stageprop.height]
    });
    return CoupleWithMoon;
  },
  createGround(callback) {
    let Frame8Ground = new Sprite("Frame8Ground");
    Frame8Ground.attr({
      anchor: [380 / 1054, 708 / 1108],
      pos: [stageprop.width / 2 - 85, stageprop.height / 2 + 279]
    });
    callback();
    return Frame8Ground;
  },
  createVirusesGroup() {
    let VirusesGroup = new Group();
    VirusesGroup.attr({
      size: [320, 322]
    });

    let V3 = Viruses.CreateViruses(3);
    let V2 = Viruses.CreateViruses(2);
    V3.attr({
      pos: [67, 106]
    });
    V2.attr({
      pos: [230, 208]
    });
    let Va1 = Viruses.CreateVirusesAir(
      {
        pos: [92, 240],
        scale: [1.5, 1.5]
      },
      1
    );
    let Va2 = Viruses.CreateVirusesAir(
      {
        pos: [296, 209],
        scale: [2, 2]
      },
      1
    );
    let Va3 = Viruses.CreateVirusesAir(
      {
        pos: [140, 240],
        scale: [1, 1]
      },
      2
    );
    let Va4 = Viruses.CreateVirusesAir(
      {
        pos: [298, 306],
        scale: [1.5, 1.5]
      },
      2
    );
    let Vhp = Viruses.CreateVirusesAir(
      {
        pos: [218, 304],
        scale: [1, 1]
      },
      3
    );
    let Vhp2 = Viruses.CreateVirusesAir(
      {
        pos: [129, 152],
        scale: [1.2, 1.2]
      },
      3
    );
    let Vhp3 = Viruses.CreateVirusesAir(
      {
        pos: [124, 278],
        scale: [0.9, 0.9]
      },
      3
    );

    VirusesGroup.append(V3, V2, Va1, Va2, Va3, Va4, Vhp, Vhp2, Vhp3);
    return VirusesGroup;
  }
};

export default frame8;
