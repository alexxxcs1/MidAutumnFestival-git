import { stage, stageprop } from "../createstage";
import { Scene, Sprite, Group, Label } from "spritejs";

let Viruses = {
  CreateViruses(index, ratio) {
    let _ratio = ratio ? ratio : 1000;
    let Viruses = new Sprite("Viruses" + index + "_1");
    Viruses.attr({
      anchor: [0.5, 0.5]
    });
    Viruses.animate(
      [
        { textures: "Viruses" + index + "_1" },
        { textures: "Viruses" + index + "_2" },
        { textures: "Viruses" + index + "_3" },
        { textures: "Viruses" + index + "_4" },
        { textures: "Viruses" + index + "_5" }
      ],
      {
        duration: _ratio,
        iterations: Infinity
      }
    );
    return Viruses;
  },
  createHiccup(callback) {
    let HiccupGroup = new Group();
    callback();
    HiccupGroup.attr({
      size: [112, 74]
      //   bgcolor:'#333'
    });
    let Hiccup = new Sprite("Hiccup");
    Hiccup.animate(
      [
        { pos: [0, 0], opacity: 0 },
        { pos: [34, 19], opacity: 1 },
        { pos: [34, 19], opacity: 1 },
      ],
      {
        duration: 1500,
        fill:'forwards'
      }
    ).finished.then(()=>{
      Hiccup.animate(
        [
          {opacity:0}
        ],
        {
          duration: 1500,
          fill:'forwards'
        }
      )
    });
    let HiccupViruses = new Sprite("HiccupViruses");
    HiccupViruses.attr({ opacity: 0 });
    HiccupViruses.animate(
      [
        { pos: [0, 0], opacity: 1, scale: [0, 0] },
        { pos: [25, 14], opacity: 1, scale: [1, 1] },
        { pos: [25, 14], opacity: 1, scale: [1, 1] },
      ],
      {
        duration: 750,
        fill:'forwards'
      }
    ).finished.then(()=>{
      
    });
    HiccupGroup.append(Hiccup, HiccupViruses);
    return HiccupGroup;
  },
  CreateVirusesAir(attr, index, ratio) {
    switch (index) {
      case 1:
        let VirusesChild = new Sprite("VirusesChild");
        VirusesChild.attr({
          anchor: [0.5, 0.5],
          ...attr
        });
        console.log(VirusesChild.attributes.scale);

        VirusesChild.animate(
          [
            {
              opacity: 1,
              scale: [
                VirusesChild.attributes.scale[0],
                VirusesChild.attributes.scale[1]
              ]
            },
            {
              opacity: 0.5,
              scale: [
                VirusesChild.attributes.scale[0] - 0.1,
                VirusesChild.attributes.scale[1] - 0.1
              ]
            },
            {
              opacity: 1,
              scale: [
                VirusesChild.attributes.scale[0],
                VirusesChild.attributes.scale[1]
              ]
            }
          ],
          {
            duration: ratio ? ratio : 500,
            iterations: Infinity
          }
        );
        return VirusesChild;
      case 2:
        let VirusesAir = new Sprite("VirusesAir");
        VirusesAir.attr({
          anchor: [0.5, 0.5],
          ...attr
        });
        VirusesAir.animate(
          [
            {
              opacity: 1,
              pos: [VirusesAir.attributes.x, VirusesAir.attributes.y],
              rotate: 0
            },
            {
              opacity: 0,
              pos: [VirusesAir.attributes.x, VirusesAir.attributes.y - 100],
              rotate: 360
            }
          ],
          {
            duration: ratio ? ratio : 1000,
            iterations: Infinity
          }
        );
        return VirusesAir;
      case 3:
        let VirusesHP = new Sprite("VirusesHP");
        VirusesHP.attr({
          anchor: [0.5, 0.5],
          ...attr
        });
        VirusesHP.animate(
          [
            {rotate:0},
            {rotate:-10},
            {rotate:0},
            {rotate:10},
            {rotate:0},
          ],
          {
            duration: ratio ? ratio : 1000,
            iterations: Infinity
          }
        );
        return VirusesHP;
    }
  }
};

export default Viruses;
