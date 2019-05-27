import indexframe from "./view/index";
import frame2 from "./view/frame2";
import frame3 from "./view/frame3";
import frame4 from "./view/frame4";
import frame5 from "./view/frame5";
import frame6 from "./view/frame6";
import frame7 from "./view/frame7";
import frame8 from "./view/frame8";
import frame9 from "./view/frame9";
import frame10 from "./view/frame10";
import logo_handle from './view/logo_handle'
import { stage } from "./createstage";
import bkg from "./view/bkg";
import TopTipsFrame from "./view/TopTipsFrame";

import tool from './tool'

const viewhandle = {
  viewindex: null,
  nowViewLayer: null,
  init() {
    bkg.init();
    let View = tool.GetUrlParam('customfrom');
    if (View=='DA') {
      this.changeView(10);
    }else{
      this.changeView(1);
    }
    logo_handle.init();
    TopTipsFrame.init();
  },
  changeView(index) {
    if (this.nowViewLayer) {
      stage.removeLayer(this.nowViewLayer.id);
    }
    this.viewindex = index;

    switch (this.viewindex) {
      case 1:
        indexframe.init();
        this.nowViewLayer = indexframe.ctn;
        break;
      case 2:
        frame2.init();
        this.nowViewLayer = frame2.ctn;
        break;
      case 3:
        frame3.init();
        this.nowViewLayer = frame3.ctn;
        break;
      case 4:
        frame4.init();
        this.nowViewLayer = frame4.ctn;
        break;
      case 5:
        frame5.init();
        this.nowViewLayer = frame5.ctn;
        break;
      case 6:
        frame6.init();
        this.nowViewLayer = frame6.ctn;
        break;
      case 7:
        frame7.init();
        this.nowViewLayer = frame7.ctn;
        break;
      case 8:
        frame8.init();
        this.nowViewLayer = frame8.ctn;
        break;
      case 9:
        frame9.init();
        this.nowViewLayer = frame9.ctn;
        break;
      case 10:
        frame10.init();
        this.nowViewLayer = frame10.ctn;
        break;
    }
  }
};
export default viewhandle;
