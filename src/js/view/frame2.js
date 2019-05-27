import { stage, stageprop } from "../createstage";
import { Scene, Sprite, Group, Label } from "spritejs";
import viewhandle from "../viewhandle";

import Cloud from "../Class/Cloud";

let frame2 = {
  ctn: null,
  end: false,
  init() {
    this.ctn = stage.layer("frame2");
    let ground = new Sprite("Frame2Ground");
    ground.attr({
      anchor: [602 / 1225, 1],
      pos: [stageprop.width / 2, stageprop.height]
    });
    this.ctn.append(ground);

    this.ctn.append(this.createRabitBot());
    this.ctn.append(
      this.createChangeWithCloud(() => {
        
      })
    );
    this.ctn.append(
      this.createTextAnim(() => {
        let Viruses = new Sprite("Viruses");
        Viruses.attr({
          anchor: [0.5, 0.5],
          pos: [stageprop.width / 2, stageprop.height - 236]
        });
        Viruses.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 500
        }).finished.then(() => {
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
        this.ctn.append(Viruses);
      })
    );
    this.ctn.append(this.createCloud());

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
        viewhandle.changeView(3);
      }else if(endMove > 100 && this.end){
        viewhandle.changeView(1);
      }
    });
  },
  createCloud() {
    let CloudGroup = new Group();

    let Frame2SkyCloud = Cloud.CreateCloud(
      {
        anchor: [0.5, 0.5],
        pos: [stageprop.width - 30, stageprop.height / 2 - 310]
      },
      1,
      null,
      true
    );
    let Frame2RiverCloud = Cloud.CreateCloud(
      {
        anchor: [0.5, 0.5],
        pos: [stageprop.width / 2 - 70, stageprop.height / 2 + 155]
      },
      2,
      null,
      false
    );
    let Frame2MoonCloud = Cloud.CreateCloud(
      {
        anchor: [0.5, 0.5],
        pos: [stageprop.width / 2 - 217, stageprop.height / 2 - 195]
      },
      3,
      null,
      false
    );
    Frame2MoonCloud.attr();

    CloudGroup.append(Frame2SkyCloud, Frame2RiverCloud, Frame2MoonCloud);

    return CloudGroup;
  },
  createRabitBot() {
    let RabitBot = new Sprite("RabitBot");
    RabitBot.attr({
      anchor: [0.5, 0.5],
      pos: [stageprop.width / 2 + 206, stageprop.height / 2 + 250],
      scale: [-1, 1]
    });
    RabitBot.animate(
      [
        {
          pos: [
            stageprop.width + RabitBot.texturesSize[0],
            stageprop.height / 2 + 250
          ]
        },
        { pos: [581, stageprop.height / 2 + 250] }
      ],
      {
        duration: 1000,
        fill: "forwards"
      }
    ).finished.then(() => {});
    return RabitBot;
  },
  createChangeWithCloud(callback) {
    let ChangeWithCloud = new Sprite("ChangeWithCloud");
    ChangeWithCloud.attr({
      anchor: [0.5, 0.5],
      pos: [-ChangeWithCloud.texturesSize[0], stageprop.height / 2 - 250]
    });
    ChangeWithCloud.animate(
      [
        { pos: [-ChangeWithCloud.texturesSize[0], stageprop.height / 2 - 250] },
        {
          pos: [233, stageprop.height / 2 - 250]
        }
      ],
      {
        duration: 1000,
        fill: "forwards"
      }
    ).finished.then(() => {
      callback();
      // viewhandle.changeView(3);
    });
    return ChangeWithCloud;
  },
  createTextAnim(callback) {
    let text2 = new Sprite("text2_anim_5");
    text2.attr({
      anchor: [0.5, 0],
      pos: [
        stageprop.width / 2,
        stageprop.height / 2 - text2.texturesSize[1] / 2 - 100
      ]
    });
    text2
      .animate(
        [
          { textures: "text2_anim_0" },
          { textures: "text2_anim_1" },
          { textures: "text2_anim_2" },
          { textures: "text2_anim_3" },
          { textures: "text2_anim_4" },
          { textures: "text2_anim_5" }
        ],
        {
          duration: 500,
          fill: "forwards"
        }
      )
      .finished.then(() => {
        callback();
      });
    return text2;
  }
};

export default frame2;
