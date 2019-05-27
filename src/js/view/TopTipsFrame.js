import { stage, stageprop } from "../createstage";
import { Scene, Sprite, Group, Label } from "spritejs";
import viewhandle from "../viewhandle";

let TopTipsFrame = {
  ctn: null,
  mask: null,
  TipsGroup: null,
  init() {
    this.ctn = stage.layer("TopTipsFrame");
    this.ctn.zIndex = 99;
    this.mask = new Sprite({
      anchor: [0.5, 0.5],
      pos: [stageprop.width / 2, stageprop.height / 2],
      size: [stageprop.width, stageprop.height * 2],
      bgcolor: "#000",
      opacity: 0.8
    });
  },
  AlertTips(index, callback) {
    this.TipsGroup ? this.ctn.removeChild(this.TipsGroup) : "";
    this.TipsGroup = new Group();
    this.TipsGroup.append(this.mask);
    this.ctn.append(this.TipsGroup);

    let Tips = new Sprite("Tips" + index);
    Tips.attr({
      anchor: [0.5, 0.5],
      pos: [stageprop.width / 2 - 20, stageprop.height / 2],
      zIndex: 1
    });
    Tips.animate([
      {opacity:0,},
      {opacity:1,},
    ],{
      duration:500,
      fill:'forwards'
    })

    let TipsChange = new Sprite("TipsChange");
    TipsChange.attr({
      anchor: [0.5, 0.5],
      pos: [stageprop.width - 120, stageprop.height / 2 - 130],
      zIndex: 2
    });

    // let startpos = index%2==0?[
    //   stageprop.width + TipsChange.texturesSize[0],
    //   stageprop.height / 2 - 130
    // ]:[
    //   stageprop.width - 120,
    //   -TipsChange.texturesSize[1]
    // ];
    // switch (index) {
    //   case 1:
    //   case 3:
    //     startpos =[
    //       stageprop.width + TipsChange.texturesSize[0],
    //       stageprop.height / 2 - 130
    //     ]
    //     break;
    //   case 2:
    //   case 4:
    //     startpos=[
    //       stageprop.width - 120,
    //       -TipsChange.texturesSize[1]
    //     ]
    //     break;
    //   case 5:
    //     startpos=[
    //       stageprop.width - 120,
    //       stageprop.height + TipsChange.texturesSize[1]
    //     ]
    //     break;
    //   default:
    //     break;
    // }
    // TipsChange.animate(
    //   [
    //     {
    //       pos: startpos
    //     },
    //     { pos: [stageprop.width - 120, stageprop.height / 2 - 130] }
    //   ],
    //   {
    //     duration: 1000,
    //     fill: "forwards"
    //   }
    // ).finished.then(() => {
      let Vrun = new Sprite(index%2==0?'Vrun2':'Vrun1');
      let _pos=[656,445];
      switch (index) {
        case 1:
          _pos=[656,445]
          break;
        case 2:
          _pos=[646,445]
          break;
        case 3:
          _pos=[646,475]
          break;
        case 4:
          _pos=[646,455]
          break;
        case 5:
          _pos=[646,405]
          break;
        default:
          break;
      }
      Vrun.attr({
        pos:_pos,
        anchor:[0.5,0.5],
        zIndex:10
      })

      this.TipsGroup.append(Tips);
      TipsChange.animate(
        [
          { pos: [stageprop.width - 120, stageprop.height / 2 - 130] },
          { pos: [stageprop.width - 120, stageprop.height / 2 - 140] },
          { pos: [stageprop.width - 120, stageprop.height / 2 - 130] }
        ],
        {
          duration: 2000,
          iterations: Infinity
        }
      );
      if (index == 5) {
        let HealButton = new Sprite("HealButton");
        HealButton.attr({
          anchor: [0.5, 0.5],
          pos: [stageprop.width / 2, stageprop.height - 144]
        });
        HealButton.on("click", () => {
          TopTipsFrame.ctn.removeChild(TopTipsFrame.TipsGroup);
          callback();
        });
        TopTipsFrame.TipsGroup.append(HealButton);
      } else {
        let CloseMask = new Sprite('closemask');
        CloseMask.attr({
          anchor:[0.5,0.5],
          pos:[stageprop.width / 2,stageprop.height - 300]
        });
        CloseMask.on("click", () => {
          TopTipsFrame.ctn.removeChild(TopTipsFrame.TipsGroup);
          callback();
        })
        TopTipsFrame.TipsGroup.append(CloseMask);
        // TopTipsFrame.ctn.removeChild(TopTipsFrame.TipsGroup);
        // callback();
      }
    // });
    this.TipsGroup.append(Vrun);
  }
};

export default TopTipsFrame;
