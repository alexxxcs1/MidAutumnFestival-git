import { stage, stageprop } from "../createstage";
import { Scene, Sprite, Group, Label } from "spritejs";
import viewhandle from "../viewhandle";

let frame9 = {
  ctn: null,
  init() {
    this.ctn = stage.layer("frame9");
    let Frame9Bkg = new Sprite("Frame9Bkg");
    Frame9Bkg.attr({
      anchor: [0.5, 0.5],
      pos: [stageprop.width / 2, stageprop.height / 2]
    });

    let HitViruses = new Sprite("HitViruses1");
    HitViruses.attr({
      anchor: [0.5, 0.5],
      pos: [stageprop.width / 2, stageprop.height / 2 + 400 - 128]
    });
    HitViruses.animate(
      [
        { textures: "HitViruses1" },
        { textures: "HitViruses2" },
        { textures: "HitViruses3" },
        { textures: "HitViruses4" },
        { textures: "HitViruses5" },
        { textures: "HitViruses6" },
        { textures: "HitViruses7" },
        { textures: "HitViruses8" },
        { textures: "HitViruses9" },
        { textures: "HitViruses10" },
        { textures: "HitViruses11" }
      ],
      {
        duration: 500,
        fill: "forwards"
      }
    ).finished.then(()=>{
      let getTips = new Sprite('getTips');
      getTips.attr({
        anchor:[0.5,0.5],
        pos:[153,704]
      })
      getTips.animate([
        {textures:'getTipsAni1',},
        {textures:'getTipsAni2',},
        {textures:'getTipsAni3',},
      ],{
        duration:300,
        fill:'forwards'
      })
      this.ctn.append(getTips);
    });
    let Change = new Sprite("ChangeWithCloud");
    Change.attr({
      anchor: [0.5, 0.5],
      pos: [stageprop.width + 348, 696 - 128],
      scale: [1, 1]
    });
    Change.animate(
      [
        { pos: [stageprop.width + 348, 696 - 128], scale: [-1, 1] },
        { pos: [643, 696 - 128] }
      ],
      {
        duration: 500,
        fill: "forwards"
      }
    );

    let ChaneCloud = new Sprite("ChaneCloud");
    ChaneCloud.attr({
      anchor: [0.4, 0.5],
      pos: [643, 786],
      scale: [-1, 1]
    });
    ChaneCloud.animate(
      [
        {
          anchor: [0.5, 0.5],
          pos: [stageprop.width + ChaneCloud.texturesSize[0], 786 - 128],
          scale: [1, 1]
        },
        { pos: [643, 786 - 128] }
      ],
      {
        duration: 500,
        fill: "forwards"
      }
    ).finished.then(()=>{
      let Frame9Title = new Sprite("Frame9Title");
      Frame9Title.attr({
        anchor: [0.5, 0.5],
        pos: [stageprop.width / 2, 530 - 128],
        zIndex: 2
      });
      Frame9Title.animate([{ scale: 5, opacity: 0 }, { scale: 1, opacity: 1 }], {
        duration: 500,
        fill: "forwards"
      }).finished.then(() => {
        let light = new Sprite("light");
        light.attr({
          anchor: [0.5, 0.5],
          pos: [275, 174],
          zIndex: 1
        });
        light.animate([{ rotate: 0 }, { rotate: 360 }], {
          duration: 3000,
          iterations: Infinity
        });
        this.ctn.append(light);
        let Frame9Content = new Sprite("Frame9Content");
        Frame9Content.attr({
          anchor: [0.5, 0.5],
          pos: [stageprop.width / 2, stageprop.height / 2 - 128],
          opacity: 0
        });
        Frame9Content.animate(
          [
            {
              opacity: 0
            },
            {
              opacity: 1
            }
          ],
          {
            duration: 700,
            fill: "forwards"
          }
        ).finished.then(() => {
          let EndButton = new Sprite("EndButton");
          EndButton.attr({
            anchor: [0.5, 0.5],
            pos: [stageprop.width / 2, stageprop.height - 142]
          });
          EndButton.animate([
            {scale:1},
            {scale:1.2},
            {scale:1},
          ],{
            duration:2000,
            iterations:Infinity
          })
          EndButton.on("click", () => {
            viewhandle.changeView(10);
          });
          this.ctn.append(HitViruses,EndButton);
        });
        this.ctn.append(Frame9Content);
      });
      this.ctn.append(Frame9Title);
    });
    
    this.ctn.append(Frame9Bkg,Change, ChaneCloud);
  }
};

export default frame9;
