import HTMLFlipBook from "react-pageflip";
import React from "react";
import {
  BrowserView,
  MobileView,
} from "react-device-detect";
// import styled from "styled-components";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css"

const images = [
  {
    original: process.env.PUBLIC_URL + "/images/front.png",
    thumbnail: process.env.PUBLIC_URL + "/images/front.png",
  },
  {
    original: process.env.PUBLIC_URL + "/images/contents.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/contents.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/wonmock_intro.jpeg",
    thumbnail: process.env.PUBLIC_URL + "/images/wonmock_intro.jpeg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/wonmock.png",
    thumbnail: process.env.PUBLIC_URL + "/images/wonmock.png",
  },
  {
    original: process.env.PUBLIC_URL + "/images/s.png",
    thumbnail: process.env.PUBLIC_URL + "/images/s.png",
  },
  {
    original: process.env.PUBLIC_URL + "/images/s_pattern.jpeg",
    thumbnail: process.env.PUBLIC_URL + "/images/s_pattern.jpeg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/s/1.jpeg",
    thumbnail: process.env.PUBLIC_URL + "/images/s/1.jpeg",
    description: "원목마루 S시리즈 ",
  },
  {
    original: process.env.PUBLIC_URL + "/images/s/2.jpeg",
    thumbnail: process.env.PUBLIC_URL + "/images/s/2.jpeg",
    description: "원목마루 S시리즈 ",
  },
  {
    original: process.env.PUBLIC_URL + "/images/s/3.jpeg",
    thumbnail: process.env.PUBLIC_URL + "/images/s/3.jpeg",
    description: "원목마루 S시리즈 ",
  },
  {
    original: process.env.PUBLIC_URL + "/images/s/4.jpeg",
    thumbnail: process.env.PUBLIC_URL + "/images/s/4.jpeg",
    description: "원목마루 S시리즈 ",
  },
  {
    original: process.env.PUBLIC_URL + "/images/s/5.jpeg",
    thumbnail: process.env.PUBLIC_URL + "/images/s/5.jpeg",
    description: "원목마루 S시리즈 ",
  },
  {
    original: process.env.PUBLIC_URL + "/images/s/6.jpeg",
    thumbnail: process.env.PUBLIC_URL + "/images/s/6.jpeg",
    description: "원목마루 S시리즈 ",
  },
  {
    original: process.env.PUBLIC_URL + "/images/s/7.jpeg",
    thumbnail: process.env.PUBLIC_URL + "/images/s/7.jpeg",
    description: "원목마루 S시리즈 ",
  },
  {
    original: process.env.PUBLIC_URL + "/images/s/8.jpeg",
    thumbnail: process.env.PUBLIC_URL + "/images/s/8.jpeg",
    description: "원목마루 S시리즈 ",
  },
  {
    original: process.env.PUBLIC_URL + "/images/s/9.jpeg",
    thumbnail: process.env.PUBLIC_URL + "/images/s/9.jpeg",
    description: "원목마루 S시리즈 ",
  },
  {
    original: process.env.PUBLIC_URL + "/images/s/10.jpeg",
    thumbnail: process.env.PUBLIC_URL + "/images/s/10.jpeg",
    description: "원목마루 S시리즈 ",
  },
  {
    original: process.env.PUBLIC_URL + "/images/m.png",
    thumbnail: process.env.PUBLIC_URL + "/images/m.png",
  },
  {
    original: process.env.PUBLIC_URL + "/images/m_pattern.jpeg",
    thumbnail: process.env.PUBLIC_URL + "/images/m_pattern.jpeg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/m/1.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/m/1.jpg",
    description: "원목마루 M시리즈 ",
  },
  {
    original: process.env.PUBLIC_URL + "/images/m/2.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/m/2.jpg",
    description: "원목마루 M시리즈 ",
  },
  {
    original: process.env.PUBLIC_URL + "/images/m/3.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/m/3.jpg",
    description: "원목마루 M시리즈 ",
  },
  {
    original: process.env.PUBLIC_URL + "/images/m/4.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/m/4.jpg",
    description: "원목마루 M시리즈 ",
  },
  {
    original: process.env.PUBLIC_URL + "/images/w.png",
    thumbnail: process.env.PUBLIC_URL + "/images/w.png",
  },
  {
    original: process.env.PUBLIC_URL + "/images/w_pattern.jpeg",
    thumbnail: process.env.PUBLIC_URL + "/images/w_pattern.jpeg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/w/1.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/w/1.jpg",
    description: "원목마루 W시리즈 ",
  },
  {
    original: process.env.PUBLIC_URL + "/images/w/2.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/w/2.jpg",
    description: "원목마루 W시리즈 ",
  },
  {
    original: process.env.PUBLIC_URL + "/images/w/3.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/w/3.jpg",
    description: "원목마루 W시리즈 ",
  },
  {
    original: process.env.PUBLIC_URL + "/images/w/4.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/w/4.jpg",
    description: "원목마루 W시리즈 ",
  },
  {
    original: process.env.PUBLIC_URL + "/images/w/5.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/w/5.jpg",
    description: "원목마루 W시리즈 ",
  },
  {
    original: process.env.PUBLIC_URL + "/images/w/6.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/w/6.jpg",
    description: "원목마루 W시리즈 ",
  },
  {
    original: process.env.PUBLIC_URL + "/images/w/7.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/w/7.jpg",
    description: "원목마루 W시리즈 ",
  },
  {
    original: process.env.PUBLIC_URL + "/images/w/8.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/w/8.jpg",
    description: "원목마루 W시리즈 ",
  },
  {
    original: process.env.PUBLIC_URL + "/images/w/9.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/w/9.jpg",
    description: "원목마루 W시리즈 ",
  },
  {
    original: process.env.PUBLIC_URL + "/images/w/10.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/w/10.jpg",
    description: "원목마루 W시리즈 ",
  },
  {
    original: process.env.PUBLIC_URL + "/images/w/11.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/w/11.jpg",
    description: "원목마루 W시리즈 ",
  },
  {
    original: process.env.PUBLIC_URL + "/images/w/12.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/w/12.jpg",
    description: "원목마루 W시리즈 ",
  },
  {
    original: process.env.PUBLIC_URL + "/images/w/13.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/w/13.jpg",
    description: "원목마루 W시리즈 ",
  },
  {
    original: process.env.PUBLIC_URL + "/images/w/14.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/w/14.jpg",
    description: "원목마루 W시리즈 ",
  },
  {
    original: process.env.PUBLIC_URL + "/images/w/15.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/w/15.jpg",
    description: "원목마루 W시리즈 ",
  },
  {
    original: process.env.PUBLIC_URL + "/images/st.png",
    thumbnail: process.env.PUBLIC_URL + "/images/st.png",
  },
  {
    original: process.env.PUBLIC_URL + "/images/st_pattern.jpeg",
    thumbnail: process.env.PUBLIC_URL + "/images/st_pattern.jpeg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/st/1.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/st/1.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/st/2.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/st/2.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/st/3.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/st/3.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/st/4.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/st/4.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/st/5.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/st/5.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/st/6.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/st/6.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/st/7.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/st/7.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/st/8.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/st/8.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/st/9.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/st/9.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/st/10.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/st/10.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/st/11.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/st/11.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/st/12.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/st/12.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/b.png",
    thumbnail: process.env.PUBLIC_URL + "/images/b.png",
  },
  {
    original: process.env.PUBLIC_URL + "/images/b_pattern.jpeg",
    thumbnail: process.env.PUBLIC_URL + "/images/b_pattern.jpeg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/b/1.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/b/1.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/b/2.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/b/2.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/b/3.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/b/3.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/k.png",
    thumbnail: process.env.PUBLIC_URL + "/images/k.png",
  },
  {
    original: process.env.PUBLIC_URL + "/images/k_pattern.jpeg",
    thumbnail: process.env.PUBLIC_URL + "/images/k_pattern.jpeg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/k/1.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/k/1.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/k/2.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/k/2.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/k/3.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/k/3.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/gang.png",
    thumbnail: process.env.PUBLIC_URL + "/images/gang.png",
  },
  {
    original: process.env.PUBLIC_URL + "/images/gang_intro.jpeg",
    thumbnail: process.env.PUBLIC_URL + "/images/gang_intro.jpeg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/gang_pattern.jpeg",
    thumbnail: process.env.PUBLIC_URL + "/images/gang_pattern.jpeg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/gang/1.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/gang/1.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/gang/2.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/gang/2.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/gang/3.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/gang/3.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/gang/4.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/gang/4.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/gang/5.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/gang/5.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/gang/6.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/gang/6.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/gang/7.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/gang/7.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/gang/8.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/gang/8.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/gang/9.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/gang/9.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/gang/10.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/gang/10.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/gang/11.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/gang/11.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/gang/12.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/gang/12.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/gang/13.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/gang/13.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/gang/14.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/gang/14.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/gangw_pattern.jpeg",
    thumbnail: process.env.PUBLIC_URL + "/images/gangw_pattern.jpeg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/gang_w/1.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/gang_w/1.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/gang_w/2.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/gang_w/2.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/gang_w/3.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/gang_w/3.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/gang_w/4.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/gang_w/4.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/gang_w/5.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/gang_w/5.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/gang_w/6.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/gang_w/6.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/gang_w/7.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/gang_w/7.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/gang_w/8.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/gang_w/8.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/gang_w/9.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/gang_w/9.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/gang_w/10.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/gang_w/10.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/gang_w/11.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/gang_w/11.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/gang_w/12.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/gang_w/12.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/gangn_pattern.jpeg",
    thumbnail: process.env.PUBLIC_URL + "/images/gangn_pattern.jpeg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/gang_n/1.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/gang_n/1.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/gang_n/2.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/gang_n/2.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/gang_n/3.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/gang_n/3.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/gang_n/4.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/gang_n/4.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/gang_n/5.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/gang_n/5.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/gang_n/6.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/gang_n/6.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/gang_n/7.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/gang_n/7.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/gang_n/8.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/gang_n/8.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/gang_n/9.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/gang_n/9.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/cheon.jpeg",
    thumbnail: process.env.PUBLIC_URL + "/images/cheon.jpeg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/cheon_pattern.jpeg",
    thumbnail: process.env.PUBLIC_URL + "/images/cheon_pattern.jpeg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/cheon/1.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/cheon/1.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/cheon/2.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/cheon/2.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/cheon/3.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/cheon/3.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/cheon/4.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/cheon/4.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/cheon/5.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/cheon/5.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/cheon/6.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/cheon/6.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/hwang.jpeg",
    thumbnail: process.env.PUBLIC_URL + "/images/hwang.jpeg",
  },
  {
    original: process.env.PUBLIC_URL + "/images/hwang_intro.jpeg",
    thumbnail: process.env.PUBLIC_URL + "/images/hwang_intro.jpeg",
  },
];

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content" style={{
        backgroundImage: "url(" + process.env.PUBLIC_URL + `${props.bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%"

        // backgroundImage: `url("/images/front.png")`,
        // backgroundPosition: "center",
      }}>
        {props.children}
      </div>
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div
        className="page-content"
        style={{
          backgroundImage: "url(" + process.env.PUBLIC_URL + `${props.bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%"
        }}
      >
        {/* <h2 className="page-header">Page header - {props.number}</h2> */}
        {/* <div className="page-image"></div> */}
        <div className="page-text">{props.children}</div>
        {/* <div className="page-footer">{props.number + 1}</div> */}
      </div>
    </div >
  );
});

class DemoBook extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      page: 0,
      totalPage: 0,
    };
  }

  nextButtonClick = () => {
    this.flipBook.getPageFlip().flipNext();

  };

  prevButtonClick = () => {
    console.log(document.querySelector("#root > div > div.demo-book.stf__parent > div > div").style.left);
    document.querySelector("#root > div > div.demo-book.stf__parent > div > div").style.left = -1 * document.querySelector("#root > div > div.demo-book.stf__parent > div > div > div.page.page-cover.stf__item.--hard.--simple.--right").style.left;
    this.flipBook.getPageFlip().flipPrev();
    console.log(this.flipBook.getPageFlip());

  };

  movePage = (e) => {
    this.setState({
      page: e.data,
    });
    console.log(this.flipBook.getPageFlip());
    this.flipBook.getPageFlip().turnToPage(e);
  };

  onPage = (e) => {
    this.setState({
      page: e.data,
    });
  };

  openNav = () => {
    document.getElementById("sidenav").style.width = "250px";
    console.log("OPEN NAV");
    console.log("Position : " + document.getElementById("sidenav").style.position);
  };

  closeNav = () => {
    document.getElementById("sidenav").style.width = "0px";
    console.log("CLOSE NAV");
  };

  componentDidMount() {
    this.setState({
      totalPage: 118//this.flipBook.getPageFlip().getPageCount(),
    });

  }

  render() {
    return (
      <>
        <BrowserView>
          <div className="veryoutside">
            <HTMLFlipBook
              width={450}
              height={670}
              minWidth={300}
              maxWidth={1000}
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={true}
              onFlip={this.onPage}
              onChangeOrientation={this.onChangeOrientation}
              onChangeState={this.onChangeState}
              className="demo-book"
              ref={(el) => (this.flipBook = el)}
            >
              <PageCover bg={"/images/front.png"}></PageCover>
              <Page bg={"/images/contents.jpg"}></Page>
              <Page bg={"/images/"}>
                인증서
          </Page>
              <Page bg={"/images/wonmock_intro.jpeg"}></Page>
              <Page bg={"/images/wonmock.png"}></Page>
              <Page bg={"/images/s.png"}></Page>
              <Page bg={"/images/s_pattern.jpeg"}></Page>
              <Page bg={"/images/s/1.jpeg"}>
                원목마루 S시리즈 내추럴오크
          </Page>
              <Page bg={"/images/s/2.jpeg"}>
                원목마루 S시리즈 티크
          </Page>
              <Page bg={"/images/s/3.jpeg"}>
                원목마루 S시리즈 월넛
          </Page>
              <Page bg={"/images/s/4.jpeg"}>
                원목마루 S시리즈 멀바우
          </Page>
              <Page bg={"/images/s/5.jpeg"}>
                원목마루 S시리즈 두시에
          </Page>
              <Page bg={"/images/s/6.jpeg"}>
                원목마루 S시리즈 이로코
          </Page>
              <Page bg={"/images/s/7.jpeg"}>
                원목마루 S시리즈 카바랜덤
          </Page>
              <Page bg={"/images/s/8.jpeg"}>
                원목마루 S시리즈 버찌
          </Page>
              <Page bg={"/images/s/9.jpeg"}>
                원목마루 S시리즈 러스틱티크
          </Page>
              <Page bg={"/images/s/10.jpeg"}>
                원목마루 S시리즈 러스틱멀바우
          </Page>
              <Page bg={"/images/m.png"}></Page>
              <Page bg={"/images/m_pattern.jpeg"}></Page>
              <Page bg={"/images/m/1.jpg"}>
                원목마루 M시리즈 내추럴오크
          </Page>
              <Page bg={"/images/m/2.jpg"}>
                원목마루 M시리즈 샌드브라운
          </Page>
              <Page bg={"/images/m/3.jpg"}>
                원목마루 M시리즈 브라운토치
          </Page>
              <Page bg={"/images/m/4.jpg"}>
                원목마루 M시리즈 프렌치블랙
          </Page>
              <Page bg={"/images/w.png"}></Page>
              <Page bg={"/images/w_pattern.jpeg"}></Page>
              <Page bg={"/images/w/1.jpg"}>
                원목마루 W시리즈 내추럴오크
          </Page>
              <Page bg={"/images/w/2.jpg"}>
                원목마루 W시리즈 티크
          </Page>
              <Page bg={"/images/w/3.jpg"}>
                원목마루 W시리즈 샌드브라운
          </Page>
              <Page bg={"/images/w/4.jpg"}>
                원목마루 W시리즈 스노우베이지
          </Page>
              <Page bg={"/images/w/5.jpg"}>
                원목마루 W시리즈 워시오크
          </Page>
              <Page bg={"/images/w/6.jpg"}>
                원목마루 W시리즈 브라운오크
          </Page>
              <Page bg={"/images/w/7.jpg"}>
                원목마루 W시리즈 소프트그레이
          </Page>
              <Page bg={"/images/w/8.jpg"}>
                원목마루 W시리즈 월넛
          </Page>
              <Page bg={"/images/w/9.jpg"}>
                원목마루 W시리즈 멀바우
          </Page>
              <Page bg={"/images/w/10.jpg"}>
                원목마루 W시리즈 프렌치블랙
          </Page>
              <Page bg={"/images/w/11.jpg"}>
                원목마루 W시리즈 빈티지오크
          </Page>
              <Page bg={"/images/w/12.jpg"}>
                원목마루 W시리즈 빈티지샌드브라운
          </Page>
              <Page bg={"/images/w/13.jpg"}>
                원목마루 W시리즈 빈티지웨이브
          </Page>
              <Page bg={"/images/w/14.jpg"}>
                원목마루 W시리즈 러스틱티크
          </Page>
              <Page bg={"/images/w/15.jpg"}>
                원목마루 W시리즈 러스틱멀바우
          </Page>
              <Page bg={"/images/st.png"}></Page>
              <Page bg={"/images/st_pattern.jpeg"}></Page>
              <Page bg={"/images/st/1.jpg"}>
                원목마루 ST시리즈 내추럴오크
          </Page>
              <Page bg={"/images/st/2.jpg"}>
                원목마루 ST시리즈 화이트워시오크N
          </Page>
              <Page bg={"/images/st/3.jpg"}>
                원목마루 ST시리즈 카키브라운
          </Page>
              <Page bg={"/images/st/4.jpg"}>
                원목마루 ST시리즈 버건디로즈
          </Page>
              <Page bg={"/images/st/5.jpg"}>
                원목마루 ST시리즈 애쉬내추럴
          </Page>
              <Page bg={"/images/st/6.jpg"}>
                원목마루 ST시리즈 애쉬L.브라운
          </Page>
              <Page bg={"/images/st/7.jpg"}>
                원목마루 ST시리즈 애쉬그레이
          </Page>
              <Page bg={"/images/st/8.jpg"}>
                원목마루 ST시리즈 허니멀바우
          </Page>
              <Page bg={"/images/st/9.jpg"}>
                원목마루 ST시리즈 앤틱티크
          </Page>
              <Page bg={"/images/st/10.jpg"}>
                원목마루 ST시리즈 언더포레스트
          </Page>
              <Page bg={"/images/st/11.jpg"}>
                원목마루 ST시리즈 젠틀브라운
          </Page>
              <Page bg={"/images/st/12.jpg"}>
                원목마루 ST시리즈 코지다크
          </Page>
              <Page bg={"/images/b.png"}></Page>
              <Page bg={"/images/b_pattern.jpeg"}></Page>
              <Page bg={"/images/b/1.jpg"}>
                원목마루 B시리즈 내추럴오크
          </Page>
              <Page bg={"/images/b/2.jpg"}>
                원목마루 B시리즈 비치샌드
          </Page>
              <Page bg={"/images/b/3.jpg"}>
                원목마루 B시리즈 브라운리버
          </Page>
              <Page bg={"/images/k.png"}></Page>
              <Page bg={"/images/k_pattern.jpeg"}></Page>
              <Page bg={"/images/k/1.jpg"}>
                원목마루 K시리즈 내추럴오크
          </Page>
              <Page bg={"/images/k/2.jpg"}>
                원목마루 K시리즈 차밍마룬
          </Page>
              <Page bg={"/images/k/3.jpg"}>
                원목마루 K시리즈 모던차콜
          </Page>
              <Page bg={"/images/gang.png"}></Page>
              <Page bg={"/images/gang_intro.jpeg"}></Page>
              <Page bg={"/images/gang_pattern.jpeg"}>
              </Page>
              <Page bg={"/images/gang/1.jpg"}>
                강마루 내추럴티크
          </Page>
              <Page bg={"/images/gang/2.jpg"}>
                강마루 메이플
          </Page>
              <Page bg={"/images/gang/3.jpg"}>
                강마루 신브라운오크
          </Page>
              <Page bg={"/images/gang/4.jpg"}>
                강마루 블랙오크
          </Page>
              <Page bg={"/images/gang/5.jpg"}>
                강마루 오크내추럴
          </Page>
              <Page bg={"/images/gang/6.jpg"}>
                강마루 워시오크
          </Page>
              <Page bg={"/images/gang/7.jpg"}>
                강마루 마일드오크
          </Page>
              <Page bg={"/images/gang/8.jpg"}>
                강마루 화이트오크
          </Page>
              <Page bg={"/images/gang/9.jpg"}>
                강마루 화이트워시오크
          </Page>
              <Page bg={"/images/gang/10.jpg"}>
                강마루 그레이워시오크
          </Page>
              <Page bg={"/images/gang/11.jpg"}>
                강마루 시에라블랙
          </Page>
              <Page bg={"/images/gang/12.jpg"}>
                강마루 시에라샌드
          </Page>
              <Page bg={"/images/gang/13.jpg"}>
                강마루 시에라클라우드
          </Page>
              <Page bg={"/images/gang/14.jpg"}>
                강마루 토프그레이
          </Page>
              <Page bg={"/images/gangw_pattern.jpeg"}>
              </Page>
              <Page bg={"/images/gang_w/1.jpg"}>
                강마루 와이드라이트
          </Page>
              <Page bg={"/images/gang_w/2.jpg"}>
                강마루 와이드모던그레이
          </Page>
              <Page bg={"/images/gang_w/3.jpg"}>
                강마루 와이드블랙
          </Page>
              <Page bg={"/images/gang_w/4.jpg"}>
                강마루 와이드빈티지다크
          </Page>
              <Page bg={"/images/gang_w/5.jpg"}>
                강마루 와이드빈티지아이보리
          </Page>
              <Page bg={"/images/gang_w/6.jpg"}>
                강마루 와이드스모크
          </Page>
              <Page bg={"/images/gang_w/7.jpg"}>
                강마루 와이드앤틱
          </Page>
              <Page bg={"/images/gang_w/8.jpg"}>
                강마루 와이드오크
          </Page>
              <Page bg={"/images/gang_w/9.jpg"}>
                강마루 와이드크림
          </Page>
              <Page bg={"/images/gang_w/10.jpg"}>
                강마루 와이드화이트그레이
          </Page>
              <Page bg={"/images/gang_w/11.jpg"}>
                강마루 와이드빈티지프로스트
          </Page>
              <Page bg={"/images/gang_w/12.jpg"}>
                강마루 와이드오팔그레이
          </Page>
              <Page bg={"/images/gangn_pattern.jpeg"}></Page>
              <Page bg={"/images/gang_n/1.jpg"}>
                노블강마루 리얼블랙
          </Page>
              <Page bg={"/images/gang_n/2.jpg"}>
                노블강마루 리얼시티
          </Page>
              <Page bg={"/images/gang_n/3.jpg"}>
                노블강마루 리얼애쉬
          </Page>
              <Page bg={"/images/gang_n/4.jpg"}>
                노블강마루 리얼오크
          </Page>
              <Page bg={"/images/gang_n/5.jpg"}>
                노블강마루 리얼카카오
          </Page>
              <Page bg={"/images/gang_n/6.jpg"}>
                노블강마루 리얼티크
          </Page>
              <Page bg={"/images/gang_n/7.jpg"}>
                노블강마루 마인미스트
          </Page>
              <Page bg={"/images/gang_n/8.jpg"}>
                노블강마루 마인스웨이드
          </Page>
              <Page bg={"/images/gang_n/9.jpg"}>
                노블강마루 마인워시
          </Page>
              <Page bg={"/images/cheon.jpeg"}></Page>
              <Page bg={"/images/cheon_pattern.jpeg"}></Page>
              <Page bg={"/images/cheon/1.jpg"}>
                천연마루 애쉬아이보리
          </Page>
              <Page bg={"/images/cheon/2.jpg"}>
                천연마루 애쉬베이지
          </Page>
              <Page bg={"/images/cheon/3.jpg"}>
                천연마루 애쉬내추럴
          </Page>
              <Page bg={"/images/cheon/4.jpg"}>
                천연마루 애쉬브라운
          </Page>
              <Page bg={"/images/cheon/5.jpg"}>
                천연마루 애쉬모카
          </Page>
              <Page bg={"/images/cheon/6.jpg"}>
                천연마루 애쉬다크
          </Page>
              <Page bg={"/images/hwang.jpeg"}></Page>
              <Page bg={"/images/hwang_intro.jpeg"}></Page>
              <Page bg={"/images/"}>
                황토풀 인증서
          </Page>
              <Page bg={"/images/"}>
                오시는길
            <div width="100%"><iframe title="map" className="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12642.352997671429!2d127.18949133463865!3d37.61184852468095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cb690e1f0d159%3A0x98387b3205cc95ff!2z6rK96riw64-EIOuCqOyWkeyjvOyLnCDslpHsoJXroZw!5e0!3m2!1sko!2skr!4v1596842478655!5m2!1sko!2skr"
                  width="400" height="450" frameBorder="0" >
                </iframe></div>
                <p className="small">경기도 남양주시 양정로 106 (일패동) 구정하우징</p>
              </Page>
              <Page bg={"/images/"}>
                구정하우징 전시장
          </Page>
              <PageCover>www.kujunghousing.com<br></br>blog.naver.com/kujunghousing<br></br>031-576-4003</PageCover>
            </HTMLFlipBook>

            <div className="left" type="button" onClick={this.prevButtonClick}>
              <i className="fa fa-angle-left"></i>
            </div>
            <div className="right" type="button" onClick={this.nextButtonClick}>
              <i className="fa fa-angle-right"></i>
            </div>
            <div className="index">
              <div className="indexchild" onClick={() => this.movePage(0)}><span>표지</span></div>
              <div className="indexchild" onClick={() => this.movePage(1)}> 목차</div>
              <div className="indexchild" onClick={() => this.movePage(5)}>원목마루 S시리즈</div>
              <div className="indexchild" onClick={() => this.movePage(17)}>원목마루 M시리즈</div>
              <div className="indexchild" onClick={() => this.movePage(23)}>원목마루 W시리즈</div>
              <div className="indexchild" onClick={() => this.movePage(40)}>원목마루 ST시리즈</div>
              <div className="indexchild" onClick={() => this.movePage(54)}>원목마루 B시리즈</div>
              <div className="indexchild" onClick={() => this.movePage(59)}>원목마루 K시리즈</div>
              <div className="indexchild" onClick={() => this.movePage(65)}>강마루</div>
              <div className="indexchild" onClick={() => this.movePage(71)}>강마루 와이드</div>
              <div className="indexchild" onClick={() => this.movePage(93)}>노블 강마루</div>
              <div className="indexchild" onClick={() => this.movePage(105)}>천연마루</div>
              <div className="indexchild" onClick={() => this.movePage(111)}>친환경 접착제</div>
              <div className="indexchild" onClick={() => this.movePage(115)}>오시는길</div>
            </div>

            <div className="container">
              <div>
                <button className="smallbtn" type="button" onClick={this.prevButtonClick}>
                  <i className="fa fa-angle-left"></i>
                </button>
                <span>{this.state.page}</span>
                <span> / </span>
                <span>{this.state.totalPage}</span>
                <button className="smallbtn" type="button" onClick={this.nextButtonClick}>
                  <i className="fa fa-angle-right"></i>
                </button>
              </div>
              <div className="copyright">
                Copyright &#169; 구정하우징
          </div>
            </div>
            <div id="sidenav">
              <div className="closebtn" onClick={this.closeNav}>X</div>
              <div onClick={() => { this.movePage(0); this.closeNav(); }}>표지</div>
              <div onClick={() => { this.movePage(1); this.closeNav(); }}>목차</div>
              <div onClick={() => { this.movePage(5); this.closeNav(); }}>원목마루 S시리즈</div>
              <div onClick={() => { this.movePage(17); this.closeNav(); }}>원목마루 M시리즈</div>
              <div onClick={() => { this.movePage(23); this.closeNav(); }}>원목마루 W시리즈</div>
              <div onClick={() => { this.movePage(40); this.closeNav(); }}>원목마루 ST시리즈</div>
              <div onClick={() => { this.movePage(54); this.closeNav(); }}>원목마루 B시리즈</div>
              <div onClick={() => { this.movePage(59); this.closeNav(); }}>원목마루 K시리즈</div>
              <div onClick={() => { this.movePage(65); this.closeNav(); }}>강마루</div>
              <div onClick={() => { this.movePage(81); this.closeNav(); }}>강마루 와이드</div>
              <div onClick={() => { this.movePage(93); this.closeNav(); }}>노블 강마루</div>
              <div onClick={() => { this.movePage(105); this.closeNav(); }}>천연마루</div>
              <div onClick={() => { this.movePage(111); this.closeNav(); }}>친환경 접착제</div>
              <div onClick={() => { this.movePage(115); this.closeNav(); }}>오시는길</div>
            </div>
          </div >
        </BrowserView>
        <MobileView>
          <ImageGallery items={images} showFullscreenButton={false} showIndex={true} lazyLoad={true} showPlayButton={false}
            ref={(el) => (this.imageGallery = el)} />
          <div className="topbar">
            <div onClick={this.openNav}><i className="fa fa-bars"></i></div>
            <div>노바마루 총판 구정하우징</div>
            <div onClick={() => this.movePage(0)}><i className="fa fa-home"></i></div>
          </div>
          <div id="sidenav">
            <div className="closebtn" onClick={this.closeNav}>X</div>
            <div onClick={() => { this.imageGallery.slideToIndex(0); this.closeNav(); }}>표지</div>
            <div onClick={() => { this.imageGallery.slideToIndex(1); this.closeNav(); }}>목차</div>
            <div onClick={() => { this.imageGallery.slideToIndex(5); this.closeNav(); }}>원목마루 S시리즈</div>
            <div onClick={() => { this.imageGallery.slideToIndex(17); this.closeNav(); }}>원목마루 M시리즈</div>
            <div onClick={() => { this.imageGallery.slideToIndex(23); this.closeNav(); }}>원목마루 W시리즈</div>
            <div onClick={() => { this.imageGallery.slideToIndex(40); this.closeNav(); }}>원목마루 ST시리즈</div>
            <div onClick={() => { this.imageGallery.slideToIndex(54); this.closeNav(); }}>원목마루 B시리즈</div>
            <div onClick={() => { this.imageGallery.slideToIndex(59); this.closeNav(); }}>원목마루 K시리즈</div>
            <div onClick={() => { this.imageGallery.slideToIndex(65); this.closeNav(); }}>강마루</div>
            <div onClick={() => { this.imageGallery.slideToIndex(81); this.closeNav(); }}>강마루 와이드</div>
            <div onClick={() => { this.imageGallery.slideToIndex(93); this.closeNav(); }}>노블 강마루</div>
            <div onClick={() => { this.imageGallery.slideToIndex(105); this.closeNav(); }}>천연마루</div>
            <div onClick={() => { this.imageGallery.slideToIndex(111); this.closeNav(); }}>친환경 접착제</div>
            <div onClick={() => { this.imageGallery.slideToIndex(115); this.closeNav(); }}>오시는길</div>
          </div>
        </MobileView>
      </>
    );
  }
}
export default DemoBook;
