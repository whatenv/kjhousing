(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{13:function(e,a,t){e.exports=t(31)},18:function(e,a,t){},19:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var n=t(0),g=t.n(n),m=t(11),c=t.n(m),i=(t(18),t(1)),l=t(2),r=t(4),s=t(3),o=(t(19),t(12)),p=t.n(o),E=g.a.forwardRef((function(e,a){return g.a.createElement("div",{className:"page page-cover",ref:a,"data-density":"hard"},g.a.createElement("div",{className:"page-content",style:{backgroundImage:"url(/kjhousing"+"".concat(e.bg,")"),backgroundPosition:"center",backgroundSize:"cover"}},e.children))})),b=g.a.forwardRef((function(e,a){return g.a.createElement("div",{className:"page",ref:a},g.a.createElement("div",{className:"page-content",style:{backgroundImage:"url(/kjhousing"+"".concat(e.bg,")"),backgroundPosition:"center",backgroundSize:"cover"}},g.a.createElement("div",{className:"page-text"},e.children)))})),u=function(e){Object(r.a)(t,e);var a=Object(s.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).nextButtonClick=function(){n.flipBook.getPageFlip().flipNext()},n.prevButtonClick=function(){n.flipBook.getPageFlip().flipPrev(),console.log(n.flipBook.getPageFlip())},n.movePage=function(e){n.setState({page:e.data}),console.log(n.flipBook.getPageFlip()),n.flipBook.getPageFlip().turnToPage(e)},n.onPage=function(e){n.setState({page:e.data})},n.openNav=function(){document.getElementById("sidenav").style.width="250px"},n.closeNav=function(){document.getElementById("sidenav").style.width="0px"},n.state={page:0,totalPage:0},n}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({totalPage:this.flipBook.getPageFlip().getPageCount()})}},{key:"render",value:function(){var e=this;return g.a.createElement("div",{className:"veryoutside"},g.a.createElement("div",{className:"topbar"},g.a.createElement("div",{onClick:this.openNav},"\ud0ed"),g.a.createElement("div",null,"\uad6c\uc815\ud558\uc6b0\uc9d5 | \ub178\ubc14\ub9c8\ub8e8 \ucd1d\ud310"),g.a.createElement("div",null,"Home")),g.a.createElement(p.a,{width:450,height:670,maxShadowOpacity:.5,showCover:!0,mobileScrollSupport:!0,onFlip:this.onPage,onChangeOrientation:this.onChangeOrientation,onChangeState:this.onChangeState,className:"demo-book",ref:function(a){return e.flipBook=a}},g.a.createElement(E,{bg:"/images/front.png"}),g.a.createElement(b,{bg:"/images/contents.jpg"}),g.a.createElement(b,{bg:"/images/"},"\uc778\uc99d\uc11c"),g.a.createElement(b,{bg:"/images/wonmock_intro.jpeg"}),g.a.createElement(b,{bg:"/images/wonmock.png"}),g.a.createElement(b,{bg:"/images/s.png"}),g.a.createElement(b,{bg:"/images/s_pattern.jpeg"}),g.a.createElement(b,{bg:"/images/s/1.jpg"},"\ub0b4\ucd94\ub7f4\uc624\ud06c"),g.a.createElement(b,{bg:"/images/s/2.jpg"},"\ud2f0\ud06c"),g.a.createElement(b,{bg:"/images/s/3.jpg"},"\uc6d4\ub11b"),g.a.createElement(b,{bg:"/images/s/4.jpg"},"\uba40\ubc14\uc6b0"),g.a.createElement(b,{bg:"/images/s/5.jpg"},"\ub450\uc2dc\uc5d0"),g.a.createElement(b,{bg:"/images/s/6.jpg"},"\uc774\ub85c\ucf54"),g.a.createElement(b,{bg:"/images/s/7.jpg"},"\uce74\ubc14\ub79c\ub364"),g.a.createElement(b,{bg:"/images/s/8.jpg"},"\ubc84\ucc0c"),g.a.createElement(b,{bg:"/images/s/9.jpg"},"\ub7ec\uc2a4\ud2f1\ud2f0\ud06c"),g.a.createElement(b,{bg:"/images/s/10.jpg"},"\ub7ec\uc2a4\ud2f1\uba40\ubc14\uc6b0"),g.a.createElement(b,{bg:"/images/m.png"}),g.a.createElement(b,{bg:"/images/m_pattern.jpeg"}),g.a.createElement(b,{bg:"/images/m/1.jpg"},"\ub0b4\ucd94\ub7f4\uc624\ud06c"),g.a.createElement(b,{bg:"/images/m/2.jpg"},"\uc0cc\ub4dc\ube0c\ub77c\uc6b4"),g.a.createElement(b,{bg:"/images/m/3.jpg"},"\ube0c\ub77c\uc6b4\ud1a0\uce58"),g.a.createElement(b,{bg:"/images/m/4.jpg"},"\ud504\ub80c\uce58\ube14\ub799"),g.a.createElement(b,{bg:"/images/w.png"}),g.a.createElement(b,{bg:"/images/w_pattern.jpeg"}),g.a.createElement(b,{bg:"/images/w/1.jpg"},"\ub0b4\ucd94\ub7f4\uc624\ud06c"),g.a.createElement(b,{bg:"/images/w/2.jpg"},"\ud2f0\ud06c"),g.a.createElement(b,{bg:"/images/w/3.jpg"},"\uc0cc\ub4dc\ube0c\ub77c\uc6b4"),g.a.createElement(b,{bg:"/images/w/4.jpg"},"\uc2a4\ub178\uc6b0\ubca0\uc774\uc9c0"),g.a.createElement(b,{bg:"/images/w/5.jpg"},"\uc6cc\uc2dc\uc624\ud06c"),g.a.createElement(b,{bg:"/images/w/6.jpg"},"\ube0c\ub77c\uc6b4\uc624\ud06c"),g.a.createElement(b,{bg:"/images/w/7.jpg"},"\uc18c\ud504\ud2b8\uadf8\ub808\uc774"),g.a.createElement(b,{bg:"/images/w/8.jpg"},"\uc6d4\ub11b"),g.a.createElement(b,{bg:"/images/w/9.jpg"},"\uba40\ubc14\uc6b0"),g.a.createElement(b,{bg:"/images/w/10.jpg"},"\ud504\ub80c\uce58\ube14\ub799"),g.a.createElement(b,{bg:"/images/w/11.jpg"},"\ube48\ud2f0\uc9c0\uc624\ud06c"),g.a.createElement(b,{bg:"/images/w/12.jpg"},"\ube48\ud2f0\uc9c0\uc0cc\ub4dc\ube0c\ub77c\uc6b4"),g.a.createElement(b,{bg:"/images/w/13.jpg"},"\ube48\ud2f0\uc9c0\uc6e8\uc774\ube0c"),g.a.createElement(b,{bg:"/images/w/14.jpg"},"\ub7ec\uc2a4\ud2f1\ud2f0\ud06c"),g.a.createElement(b,{bg:"/images/w/15.jpg"},"\ub7ec\uc2a4\ud2f1\uba40\ubc14\uc6b0"),g.a.createElement(b,{bg:"/images/st.png"}),g.a.createElement(b,{bg:"/images/st_pattern.jpeg"}),g.a.createElement(b,{bg:"/images/st/1.jpg"},"\ub0b4\ucd94\ub7f4\uc624\ud06c"),g.a.createElement(b,{bg:"/images/st/2.jpg"},"\ud654\uc774\ud2b8\uc6cc\uc2dc\uc624\ud06cN"),g.a.createElement(b,{bg:"/images/st/3.jpg"},"\uce74\ud0a4\ube0c\ub77c\uc6b4"),g.a.createElement(b,{bg:"/images/st/4.jpg"},"\ubc84\uac74\ub514\ub85c\uc988"),g.a.createElement(b,{bg:"/images/st/5.jpg"},"\uc560\uc26c\ub0b4\ucd94\ub7f4"),g.a.createElement(b,{bg:"/images/st/6.jpg"},"\uc560\uc26cL.\ube0c\ub77c\uc6b4"),g.a.createElement(b,{bg:"/images/st/7.jpg"},"\uc560\uc26c\uadf8\ub808\uc774"),g.a.createElement(b,{bg:"/images/st/8.jpg"},"\ud5c8\ub2c8\uba40\ubc14\uc6b0"),g.a.createElement(b,{bg:"/images/st/9.jpg"},"\uc564\ud2f1\ud2f0\ud06c"),g.a.createElement(b,{bg:"/images/st/10.jpg"},"\uc5b8\ub354\ud3ec\ub808\uc2a4\ud2b8"),g.a.createElement(b,{bg:"/images/st/11.jpg"},"\uc820\ud2c0\ube0c\ub77c\uc6b4"),g.a.createElement(b,{bg:"/images/st/12.jpg"},"\ucf54\uc9c0\ub2e4\ud06c"),g.a.createElement(b,{bg:"/images/b.png"}),g.a.createElement(b,{bg:"/images/b_pattern.jpeg"}),g.a.createElement(b,{bg:"/images/b/1.jpg"},"\ub0b4\ucd94\ub7f4\uc624\ud06c"),g.a.createElement(b,{bg:"/images/b/2.jpg"},"\ube44\uce58\uc0cc\ub4dc"),g.a.createElement(b,{bg:"/images/b/3.jpg"},"\ube0c\ub77c\uc6b4\ub9ac\ubc84"),g.a.createElement(b,{bg:"/images/k.png"}),g.a.createElement(b,{bg:"/images/k_pattern.jpeg"}),g.a.createElement(b,{bg:"/images/k/1.jpg"},"\ub0b4\ucd94\ub7f4\uc624\ud06c"),g.a.createElement(b,{bg:"/images/k/2.jpg"},"\ucc28\ubc0d\ub9c8\ub8ec"),g.a.createElement(b,{bg:"/images/k/3.jpg"},"\ubaa8\ub358\ucc28\ucf5c"),g.a.createElement(b,{bg:"/images/gang.png"}),g.a.createElement(b,{bg:"/images/gang_intro.jpeg"}),g.a.createElement(b,{bg:"/images/gang_pattern.jpeg"}),g.a.createElement(b,{bg:"/images/gang/1.jpg"},"\ub0b4\ucd94\ub7f4\ud2f0\ud06c"),g.a.createElement(b,{bg:"/images/gang/2.jpg"},"\uba54\uc774\ud50c"),g.a.createElement(b,{bg:"/images/gang/3.jpg"},"\uc2e0\ube0c\ub77c\uc6b4\uc624\ud06c"),g.a.createElement(b,{bg:"/images/gang/4.jpg"},"\ube14\ub799\uc624\ud06c"),g.a.createElement(b,{bg:"/images/gang/5.jpg"},"\uc624\ud06c\ub0b4\ucd94\ub7f4"),g.a.createElement(b,{bg:"/images/gang/6.jpg"},"\uc6cc\uc2dc\uc624\ud06c"),g.a.createElement(b,{bg:"/images/gang/7.jpg"},"\ub9c8\uc77c\ub4dc\uc624\ud06c"),g.a.createElement(b,{bg:"/images/gang/8.jpg"},"\ud654\uc774\ud2b8\uc624\ud06c"),g.a.createElement(b,{bg:"/images/gang/9.jpg"},"\ud654\uc774\ud2b8\uc6cc\uc2dc\uc624\ud06c"),g.a.createElement(b,{bg:"/images/gang/10.jpg"},"\uadf8\ub808\uc774\uc6cc\uc2dc\uc624\ud06c"),g.a.createElement(b,{bg:"/images/gang/11.jpg"},"\uc2dc\uc5d0\ub77c\ube14\ub799"),g.a.createElement(b,{bg:"/images/gang/12.jpg"},"\uc2dc\uc5d0\ub77c\uc0cc\ub4dc"),g.a.createElement(b,{bg:"/images/gang/13.jpg"},"\uc2dc\uc5d0\ub77c\ud074\ub77c\uc6b0\ub4dc"),g.a.createElement(b,{bg:"/images/gang/14.jpg"},"\ud1a0\ud504\uadf8\ub808\uc774"),g.a.createElement(b,{bg:"/images/gangw_pattern.jpeg"}),g.a.createElement(b,{bg:"/images/gang_w/1.jpg"},"\uc640\uc774\ub4dc\ub77c\uc774\ud2b8"),g.a.createElement(b,{bg:"/images/gang_w/2.jpg"},"\uc640\uc774\ub4dc\ubaa8\ub358\uadf8\ub808\uc774"),g.a.createElement(b,{bg:"/images/gang_w/3.jpg"},"\uc640\uc774\ub4dc\ube14\ub799"),g.a.createElement(b,{bg:"/images/gang_w/4.jpg"},"\uc640\uc774\ub4dc\ube48\ud2f0\uc9c0\ub2e4\ud06c"),g.a.createElement(b,{bg:"/images/gang_w/5.jpg"},"\uc640\uc774\ub4dc\ube48\ud2f0\uc9c0\uc544\uc774\ubcf4\ub9ac"),g.a.createElement(b,{bg:"/images/gang_w/6.jpg"},"\uc640\uc774\ub4dc\uc2a4\ubaa8\ud06c"),g.a.createElement(b,{bg:"/images/gang_w/7.jpg"},"\uc640\uc774\ub4dc\uc564\ud2f1"),g.a.createElement(b,{bg:"/images/gang_w/8.jpg"},"\uc640\uc774\ub4dc\uc624\ud06c"),g.a.createElement(b,{bg:"/images/gang_w/9.jpg"},"\uc640\uc774\ub4dc\ud06c\ub9bc"),g.a.createElement(b,{bg:"/images/gang_w/10.jpg"},"\uc640\uc774\ub4dc\ud654\uc774\ud2b8\uadf8\ub808\uc774"),g.a.createElement(b,{bg:"/images/gang_w/11.jpg"},"\uc640\uc774\ub4dc\ube48\ud2f0\uc9c0\ud504\ub85c\uc2a4\ud2b8"),g.a.createElement(b,{bg:"/images/gang_w/12.jpg"},"\uc640\uc774\ub4dc\uc624\ud314\uadf8\ub808\uc774"),g.a.createElement(b,{bg:"/images/gangn_pattern.jpeg"}),g.a.createElement(b,{bg:"/images/gang_n/1.jpg"},"\ub9ac\uc5bc\ube14\ub799"),g.a.createElement(b,{bg:"/images/gang_n/2.jpg"},"\ub9ac\uc5bc\uc2dc\ud2f0"),g.a.createElement(b,{bg:"/images/gang_n/3.jpg"},"\ub9ac\uc5bc\uc560\uc26c"),g.a.createElement(b,{bg:"/images/gang_n/4.jpg"},"\ub9ac\uc5bc\uc624\ud06c"),g.a.createElement(b,{bg:"/images/gang_n/5.jpg"},"\ub9ac\uc5bc\uce74\uce74\uc624"),g.a.createElement(b,{bg:"/images/gang_n/6.jpg"},"\ub9ac\uc5bc\ud2f0\ud06c"),g.a.createElement(b,{bg:"/images/gang_n/7.jpg"},"\ub9c8\uc778\ubbf8\uc2a4\ud2b8"),g.a.createElement(b,{bg:"/images/gang_n/8.jpg"},"\ub9c8\uc778\uc2a4\uc6e8\uc774\ub4dc"),g.a.createElement(b,{bg:"/images/gang_n/9.jpg"},"\ub9c8\uc778\uc6cc\uc2dc"),g.a.createElement(b,{bg:"/images/cheon.jpeg"}),g.a.createElement(b,{bg:"/images/cheon_pattern.jpeg"}),g.a.createElement(b,{bg:"/images/cheon/1.jpg"},"\uc560\uc26c\uc544\uc774\ubcf4\ub9ac"),g.a.createElement(b,{bg:"/images/cheon/2.jpg"},"\uc560\uc26c\ubca0\uc774\uc9c0"),g.a.createElement(b,{bg:"/images/cheon/3.jpg"},"\uc560\uc26c\ub0b4\ucd94\ub7f4"),g.a.createElement(b,{bg:"/images/cheon/4.jpg"},"\uc560\uc26c\ube0c\ub77c\uc6b4"),g.a.createElement(b,{bg:"/images/cheon/5.jpg"},"\uc560\uc26c\ubaa8\uce74"),g.a.createElement(b,{bg:"/images/cheon/6.jpg"},"\uc560\uc26c\ub2e4\ud06c"),g.a.createElement(b,{bg:"/images/hwang.jpeg"}),g.a.createElement(b,{bg:"/images/hwang_intro.jpeg"}),g.a.createElement(b,{bg:"/images/"},"\ud669\ud1a0\ud480 \uc778\uc99d\uc11c"),g.a.createElement(b,{bg:"/images/"},"\uc624\uc2dc\ub294\uae38",g.a.createElement("div",{width:"100%"},g.a.createElement("iframe",{title:"map",className:"map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12642.352997671429!2d127.18949133463865!3d37.61184852468095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cb690e1f0d159%3A0x98387b3205cc95ff!2z6rK96riw64-EIOuCqOyWkeyjvOyLnCDslpHsoJXroZw!5e0!3m2!1sko!2skr!4v1596842478655!5m2!1sko!2skr",width:"400",height:"450",frameBorder:"0"})),g.a.createElement("p",{className:"small"},"\uacbd\uae30\ub3c4 \ub0a8\uc591\uc8fc\uc2dc \uc591\uc815\ub85c 106 (\uc77c\ud328\ub3d9) \uad6c\uc815\ud558\uc6b0\uc9d5")),g.a.createElement(b,{bg:"/images/"},"\uad6c\uc815\ud558\uc6b0\uc9d5 \uc804\uc2dc\uc7a5"),g.a.createElement(E,null,"www.kujunghousing.com",g.a.createElement("br",null),"blog.naver.com/kujunghousing",g.a.createElement("br",null),"031-576-4003")),g.a.createElement("button",{className:"left",type:"button",onClick:this.prevButtonClick},g.a.createElement("i",{className:"fa fa-angle-left"})),g.a.createElement("button",{className:"right",type:"button",onClick:this.nextButtonClick},g.a.createElement("i",{className:"fa fa-angle-right"})),g.a.createElement("div",{className:"index"},g.a.createElement("div",{className:"indexchild",onClick:function(){return e.movePage(0)}},g.a.createElement("span",null,"\ud45c\uc9c0")),g.a.createElement("div",{className:"indexchild",onClick:function(){return e.movePage(1)}}," \ubaa9\ucc28"),g.a.createElement("div",{className:"indexchild",onClick:function(){return e.movePage(5)}},"\uc6d0\ubaa9\ub9c8\ub8e8 S"),g.a.createElement("div",{className:"indexchild",onClick:function(){return e.movePage(17)}},"\uc6d0\ubaa9\ub9c8\ub8e8 M"),g.a.createElement("div",{className:"indexchild",onClick:function(){return e.movePage(23)}},"\uc6d0\ubaa9\ub9c8\ub8e8 W"),g.a.createElement("div",{className:"indexchild",onClick:function(){return e.movePage(39)}},"\uc6d0\ubaa9\ub9c8\ub8e8 ST"),g.a.createElement("div",{className:"indexchild",onClick:function(){return e.movePage(53)}},"\uc6d0\ubaa9\ub9c8\ub8e8 B"),g.a.createElement("div",{className:"indexchild",onClick:function(){return e.movePage(59)}},"\uc6d0\ubaa9\ub9c8\ub8e8 K"),g.a.createElement("div",{className:"indexchild",onClick:function(){return e.movePage(65)}},"\uac15\ub9c8\ub8e8"),g.a.createElement("div",{className:"indexchild",onClick:function(){return e.movePage(71)}},"\uac15\ub9c8\ub8e8 \uc640\uc774\ub4dc"),g.a.createElement("div",{className:"indexchild",onClick:function(){return e.movePage(93)}},"\ub178\ube14 \uac15\ub9c8\ub8e8"),g.a.createElement("div",{className:"indexchild",onClick:function(){return e.movePage(105)}},"\ucc9c\uc5f0\ub9c8\ub8e8"),g.a.createElement("div",{className:"indexchild",onClick:function(){return e.movePage(111)}},"\ud669\ud1a0\ud480"),g.a.createElement("div",{className:"indexchild",onClick:function(){return e.movePage(115)}},"\uc624\uc2dc\ub294\uae38")),g.a.createElement("div",{className:"container"},g.a.createElement("div",null,g.a.createElement("button",{type:"button",onClick:this.prevButtonClick},g.a.createElement("i",{className:"fa fa-angle-left"})),"[",g.a.createElement("span",null,this.state.page),g.a.createElement("span",null," / "),g.a.createElement("span",null,this.state.totalPage),"]",g.a.createElement("button",{type:"button",onClick:this.nextButtonClick},g.a.createElement("i",{className:"fa fa-angle-right"}))),g.a.createElement("div",null,"Copyright \xa9 \uad6c\uc815\ud558\uc6b0\uc9d5 | \uc774 \ube0c\ub85c\uc154\ud615 \ud648\ud398\uc774\uc9c0\uc758 \uc800\uc791\uad8c\uc740 \uad6c\uc815\ud558\uc6b0\uc9d5\uc5d0\uac8c \uc788\uc2b5\ub2c8\ub2e4.")),g.a.createElement("div",{id:"sidenav"},g.a.createElement("div",{className:"closebtn",onClick:this.closeNav},"X"),g.a.createElement("div",{onClick:function(){return e.movePage(0)}},"\ud45c\uc9c0"),g.a.createElement("div",{onClick:function(){return e.movePage(1)}},"\ubaa9\ucc28"),g.a.createElement("div",{onClick:function(){return e.movePage(5)}},"\uc6d0\ubaa9\ub9c8\ub8e8 S"),g.a.createElement("div",{onClick:function(){return e.movePage(17)}},"\uc6d0\ubaa9\ub9c8\ub8e8 M"),g.a.createElement("div",{onClick:function(){return e.movePage(23)}},"\uc6d0\ubaa9\ub9c8\ub8e8 W"),g.a.createElement("div",{onClick:function(){return e.movePage(39)}},"\uc6d0\ubaa9\ub9c8\ub8e8 ST"),g.a.createElement("div",{onClick:function(){return e.movePage(53)}},"\uc6d0\ubaa9\ub9c8\ub8e8 B"),g.a.createElement("div",{onClick:function(){return e.movePage(59)}},"\uc6d0\ubaa9\ub9c8\ub8e8 K"),g.a.createElement("div",{onClick:function(){return e.movePage(65)}},"\uac15\ub9c8\ub8e8"),g.a.createElement("div",{onClick:function(){return e.movePage(81)}},"\uac15\ub9c8\ub8e8 \uc640\uc774\ub4dc"),g.a.createElement("div",{onClick:function(){return e.movePage(93)}},"\ub178\ube14 \uac15\ub9c8\ub8e8"),g.a.createElement("div",{onClick:function(){return e.movePage(105)}},"\ucc9c\uc5f0\ub9c8\ub8e8"),g.a.createElement("div",{onClick:function(){return e.movePage(111)}},"\ud669\ud1a0\ud480"),g.a.createElement("div",{onClick:function(){return e.movePage(115)}},"\uc624\uc2dc\ub294\uae38")))}}]),t}(g.a.Component),d=function(e){Object(r.a)(t,e);var a=Object(s.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return g.a.createElement(g.a.Fragment,null,g.a.createElement(u,null))}}]),t}(g.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(g.a.createElement(g.a.StrictMode,null,g.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.61d8bce5.chunk.js.map