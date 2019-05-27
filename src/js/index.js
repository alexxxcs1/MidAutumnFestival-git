import "babel-polyfill";
import '../css/base.scss';
import tool from './tool';
import '../css/rem'
import  './loader';
import '../audio/bkg.m4a';
import '../audio/Hiccup.m4a';
import '../audio/Fart.m4a';
import '../audio/lol.m4a';

window.onload = () =>{
    tool.getShare();
    tool.audioAutoPlay('bkg');
    tool.audioAutoPlay('Hiccup',0);
    tool.audioAutoPlay('Fart',0);
    tool.audioAutoPlay('lol',0);
    
    // document.getElementById('stage').style.height = window.innerHeight + 'px';  //使stage 撑满全屏 ，其中的canvas居中显示
    // document.getElementById('stage').style.width = '750px';    //使stage 撑满全屏 ，其中的canvas居中显示

    // tool.getShare(location.href);  //设置微信分享
}

