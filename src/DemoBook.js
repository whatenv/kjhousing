import HTMLFlipBook from "react-pageflip";
import React from "react";
// import styled from "styled-components";

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content">
        <h2>{props.children}</h2>
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
          backgroundImage: `url(${props.bg})`,
          backgroundPosition: "center",
        }}
      >
        {/* <h2 className="page-header">Page header - {props.number}</h2> */}
        {/* <div className="page-image"></div> */}
        <div className="page-text">{props.children}</div>
        {/* <div className="page-footer">{props.number + 1}</div> */}
      </div>
    </div>
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
    this.flipBook.getPageFlip().flipPrev();
  };

  onPage = (e) => {
    this.setState({
      page: e.data,
    });
  };

  componentDidMount() {
    this.setState({
      totalPage: this.flipBook.getPageFlip().getPageCount(),
    });
  }

  render() {
    return (
      <div className="veryoutside">
        <HTMLFlipBook
          width={450}
          height={670}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          onFlip={this.onPage}
          onChangeOrientation={this.onChangeOrientation}
          onChangeState={this.onChangeState}
          className="demo-book"
          ref={(el) => (this.flipBook = el)}
        >
          <PageCover>broc.</PageCover>
          <Page number={1} bg={"./img/front.png"}></Page>
          <Page number={2} bg={"./img/contents.jpg"}></Page>
          <Page number={3} bg={"./img/"}>
            인증서
          </Page>
          <Page number={4} bg={"./img/wonmock_intro.jpeg"}></Page>
          <Page number={5} bg={"./img/wonmock.png"}></Page>
          <Page number={6} bg={"./img/s.png"}></Page>
          <Page number={7} bg={"./img/s_pattern.jpeg"}></Page>
          <Page number={8} bg={"./img/s/1.jpg"}>
            내추럴오크
          </Page>
          <Page number={9} bg={"./img/s/2.jpg"}>
            두시에
          </Page>
          <Page number={10} bg={"./img/s/3.jpg"}>
            러스틱멀바우
          </Page>
          <Page number={11} bg={"./img/s/4.jpg"}>
            러스틱티크
          </Page>
          <Page number={12} bg={"./img/s/5.jpg"}>
            멀바우
          </Page>
          <Page number={13} bg={"./img/s/6.jpg"}>
            버찌
          </Page>
          <Page number={14} bg={"./img/s/7.jpg"}>
            월넛
          </Page>
          <Page number={15} bg={"./img/s/8.jpg"}>
            이로코
          </Page>
          <Page number={16} bg={"./img/s/9.jpg"}>
            카바랜덤
          </Page>
          <Page number={17} bg={"./img/s/10.jpg"}>
            티크
          </Page>
          <Page number={18} bg={"./img/m.png"}></Page>
          <Page number={19} bg={"./img/m_pattern.jpeg"}></Page>
          <Page number={20} bg={"./img/m/1.jpg"}>
            내추럴오크
          </Page>
          <Page number={21} bg={"./img/m/2.jpg"}>
            브라운토치
          </Page>
          <Page number={22} bg={"./img/m/3.jpg"}>
            샌드브라운
          </Page>
          <Page number={23} bg={"./img/m/4.jpg"}>
            프렌치블랙
          </Page>
          <Page number={24} bg={"./img/w.png"}></Page>
          <Page number={25} bg={"./img/w_pattern.jpeg"}></Page>
          <Page number={26} bg={"./img/w/1.jpg"}>
            내추럴오크
          </Page>
          <Page number={27} bg={"./img/w/2.jpg"}>
            러스틱멀바우
          </Page>
          <Page number={28} bg={"./img/w/3.jpg"}>
            러스틱티크
          </Page>
          <Page number={29} bg={"./img/w/4.jpg"}>
            멀바우
          </Page>
          <Page number={30} bg={"./img/w/5.jpg"}>
            브라운오크
          </Page>
          <Page number={31} bg={"./img/w/6.jpg"}>
            빈티지샌드브라운
          </Page>
          <Page number={32} bg={"./img/w/7.jpg"}>
            빈티지오크
          </Page>
          <Page number={33} bg={"./img/w/8.jpg"}>
            빈티지웨이브
          </Page>
          <Page number={34} bg={"./img/w/9.jpg"}>
            샌드브라운
          </Page>
          <Page number={35} bg={"./img/w/10.jpg"}>
            소프트그레이
          </Page>
          <Page number={36} bg={"./img/w/11.jpg"}>
            스노우베이지
          </Page>
          <Page number={37} bg={"./img/w/12.jpg"}>
            워시오크
          </Page>
          <Page number={38} bg={"./img/w/13.jpg"}>
            월넛
          </Page>
          <Page number={39} bg={"./img/w/14.jpg"}>
            티크
          </Page>
          <Page number={40} bg={"./img/w/15.jpg"}>
            프렌치블랙
          </Page>
          <Page number={41} bg={"./img/st.png"}></Page>
          <Page number={42} bg={"./img/st_pattern.jpeg"}></Page>
          <Page number={43} bg={"./img/st/1.jpg"}>
            내추럴오크
          </Page>
          <Page number={44} bg={"./img/st/2.jpg"}>
            버건디로즈
          </Page>
          <Page number={45} bg={"./img/st/3.jpg"}>
            애쉬 L.브라운
          </Page>
          <Page number={46} bg={"./img/st/4.jpg"}>
            애쉬그레이
          </Page>
          <Page number={47} bg={"./img/st/5.jpg"}>
            애쉬내추럴
          </Page>
          <Page number={48} bg={"./img/st/6.jpg"}>
            언더포레스트
          </Page>
          <Page number={49} bg={"./img/st/7.jpg"}>
            젠틀브라운
          </Page>
          <Page number={50} bg={"./img/st/8.jpg"}>
            카키브라운
          </Page>
          <Page number={51} bg={"./img/st/9.jpg"}>
            코지다크
          </Page>
          <Page number={52} bg={"./img/st/10.jpg"}>
            화이트워시오크N
          </Page>
          <Page number={53} bg={"./img/b.png"}></Page>
          <Page number={54} bg={"./img/b_pattern.jpeg"}></Page>
          <Page number={55} bg={"./img/b/1.jpg"}>
            내추럴오크
          </Page>
          <Page number={56} bg={"./img/b/2.jpg"}>
            브라운리버
          </Page>
          <Page number={57} bg={"./img/b/3.jpg"}>
            비치샌드
          </Page>
          <Page number={58} bg={"./img/k.png"}></Page>
          <Page number={59} bg={"./img/k_pattern.jpeg"}></Page>
          <Page number={60} bg={"./img/k/1.jpg"}>
            내추럴오크
          </Page>
          <Page number={61} bg={"./img/k/2.jpg"}>
            차밍마룬
          </Page>
          <Page number={62} bg={"./img/k/3.jpg"}>
            모던차콜
          </Page>
          <Page number={63} bg={"./img/gang.png"}></Page>
          <Page number={64} bg={"./img/gang_intro.jpeg"}></Page>
          <Page number={65} bg={"./img/"}>
            강마루, 강마루 슬림 소개
          </Page>
          <Page number={66} bg={"./img/gang_pattern.jpeg"}>
            강마루 패턴컷
          </Page>
          <Page number={67} bg={"./img/gang/1.jpg"}>
            내추럴티크
          </Page>
          <Page number={68} bg={"./img/gang/2.jpg"}>
            메이플
          </Page>
          <Page number={69} bg={"./img/gang/3.jpg"}>
            신브라운오크
          </Page>
          <Page number={70} bg={"./img/gang/4.jpg"}>
            블랙오크
          </Page>
          <Page number={71} bg={"./img/gang/5.jpg"}>
            오크내추럴
          </Page>
          <Page number={72} bg={"./img/gang/6.jpg"}>
            워시오크
          </Page>
          <Page number={73} bg={"./img/gang/7.jpg"}>
            마일드오크
          </Page>
          <Page number={74} bg={"./img/gang/8.jpg"}>
            화이트오크
          </Page>
          <Page number={75} bg={"./img/gang/9.jpg"}>
            화이트워시오크
          </Page>
          <Page number={76} bg={"./img/gang/10.jpg"}>
            그레이워시오크
          </Page>
          <Page number={77} bg={"./img/gang/11.jpg"}>
            시에라블랙
          </Page>
          <Page number={78} bg={"./img/gang/12.jpg"}>
            시에라샌드
          </Page>
          <Page number={79} bg={"./img/gang/13.jpg"}>
            시에라클라우드
          </Page>
          <Page number={80} bg={"./img/gang/14.jpg"}>
            토프그레이
          </Page>
          <Page number={81} bg={"./img/"}>
            강마루와이드 소개
          </Page>
          <Page number={82} bg={"./img/gangw_pattern.jpeg"}>
            강마루와이드 패턴컷
          </Page>
          <Page number={83} bg={"./img/gang_w/1.jpg"}>
            와이드라이트
          </Page>
          <Page number={84} bg={"./img/gang_w/2.jpg"}>
            와이드모던그레이
          </Page>
          <Page number={85} bg={"./img/gang_w/3.jpg"}>
            와이드블랙
          </Page>
          <Page number={86} bg={"./img/gang_w/4.jpg"}>
            와이드빈티지다크
          </Page>
          <Page number={87} bg={"./img/gang_w/5.jpg"}>
            와이드빈티지아이보리
          </Page>
          <Page number={88} bg={"./img/gang_w/6.jpg"}>
            와이드스모크
          </Page>
          <Page number={89} bg={"./img/gang_w/7.jpg"}>
            와이드앤틱
          </Page>
          <Page number={90} bg={"./img/gang_w/8.jpg"}>
            와이드오크
          </Page>
          <Page number={91} bg={"./img/gang_w/9.jpg"}>
            와이드크림
          </Page>
          <Page number={92} bg={"./img/gang_w/10.jpg"}>
            와이드화이트그레이
          </Page>
          <Page number={93} bg={"./img/gang_w/11.jpg"}>
            와이드빈티지프로스트
          </Page>
          <Page number={94} bg={"./img/gang_w/12.jpg"}>
            와이드오팔그레이
          </Page>
          <Page number={95} bg={"./img/"}>
            노블강마루 소개
          </Page>
          <Page number={96} bg={"./img/gangn_pattern.jpeg"}></Page>
          <Page number={97} bg={"./img/gang_n/1.jpg"}>
            리얼블랙
          </Page>
          <Page number={98} bg={"./img/gang_n/2.jpg"}>
            리얼시티
          </Page>
          <Page number={99} bg={"./img/gang_n/3.jpg"}>
            리얼애쉬
          </Page>
          <Page number={100} bg={"./img/gang_n/4.jpg"}>
            리얼오크
          </Page>
          <Page number={101} bg={"./img/gang_n/5.jpg"}>
            리얼카카오
          </Page>
          <Page number={102} bg={"./img/gang_n/6.jpg"}>
            리얼티크
          </Page>
          <Page number={103} bg={"./img/gang_n/7.jpg"}>
            마인미스트
          </Page>
          <Page number={104} bg={"./img/gang_n/8.jpg"}>
            마인스웨이드
          </Page>
          <Page number={105} bg={"./img/gang_n/9.jpg"}>
            마인워시
          </Page>
          <Page number={106} bg={"./img/cheon.jpeg"}></Page>
          <Page number={107} bg={"./img/cheon.jpeg"}></Page>
          <Page number={108} bg={"./img/cheon_pattern.jpeg"}></Page>
          <Page number={109} bg={"./img/cheon/1.jpg"}>
            애쉬아이보리
          </Page>
          <Page number={110} bg={"./img/cheon/2.jpg"}>
            애쉬베이지
          </Page>
          <Page number={111} bg={"./img/cheon/3.jpg"}>
            애쉬내추럴
          </Page>
          <Page number={112} bg={"./img/cheon/4.jpg"}>
            애쉬브라운
          </Page>
          <Page number={113} bg={"./img/cheon/5.jpg"}>
            애쉬모카
          </Page>
          <Page number={114} bg={"./img/cheon/6.jpg"}>
            애쉬다크
          </Page>
          <Page number={115} bg={"./img/hwang.jpeg"}></Page>
          <Page number={116} bg={"./img/hwang_intro.jpeg"}></Page>
          <Page number={117} bg={"./img/"}>
            황토풀 인증서
          </Page>
          <Page number={118} bg={"./img/"}>
            오시는길
          </Page>
          <Page number={119} bg={"./img/"}>
            구정하우징 전시장
          </Page>
          <PageCover>THE END</PageCover>
        </HTMLFlipBook>

        <div className="container">
          <div>
            <button type="button" onClick={this.prevButtonClick}>
              Prev
            </button>
            [<span>{this.state.page}</span> of
            <span>{this.state.totalPage}</span>]
            <button type="button" onClick={this.nextButtonClick}>
              Next
            </button>
          </div>
          <div>
            Copyright &#169; 구정하우징 / 이 브로셔형 홈페이지의 저작권은
            구정하우징에게 있습니다.
          </div>
        </div>
      </div>
    );
  }
}
export default DemoBook;
