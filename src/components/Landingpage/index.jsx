import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import "./Landingpage.css";

function Landingpage(props) {
  const {
    afenUrl,
    polkaPetsUrl,
    defiNowUrl,
    plasmNetworkUrl,
    bondlyUrl,
    mailToUrl,
    twitterUrl,
    nftyConnectUrl,
    discordUrl,
    telegramUrl,
    whitePaperUrl,
    overlapGroup4,
    whitelogo081,
    text1,
    text2,
    whitepaper,
    joinTelegram,
    joinDiscord,
    overlapGroup9,
    useNftyConnect,
    telegram,
    vector2,
    whoWeAre,
    text3,
    whatWeDo,
    text4,
    docpic021,
    nftyConnect,
    text7,
    overlapGroup6,
    useNftyConnect2,
    spanText,
    spanText2,
    text6,
    ourPartners,
    text8,
    bondlyLogo,
    logomark2,
    overlapGroup3,
    polkaPetsLogo,
    overlapGroup7,
    defiNowLogo,
    overlapGroup1,
    plasmNetworkLogo,
    overlapGroup5,
    afenLogo,
    bondly,
    polkapets,
    defiNow,
    plasmNetwork,
    afen,
    overlapGroup,
    quickLinks,
    goTo,
    connectWithUs,
    whitepaper2,
    whoWeAre2,
    telegram2,
    whatWeDo2,
    nftyConnect2,
    whereWereGoing,
    ourPartners2,
    telegram3,
    vector3,
    vector4,
  } = props;


  return (
    <div class="container-center-horizontal">
      <div className="landingpage screen">
        <div className="flex-col-2">
          <div className="overlap-group4" style={{ backgroundImage: `url(${overlapGroup4})` }}>
            <img className="whitelogo-08-1" src={whitelogo081} />
            <h1 className="text-1 valign-text-middle">{text1}</h1>
            <div className="text-2 valign-text-middle">{text2}</div>
            <div className="flex-row-4">
              <div className="group-71">
                <div className="overlap-group12 border-2px-white">
                  <div onClick={()=> window.open(whitePaperUrl, "_blank")} className="whitepaper valign-text-middle rubik-medium-white-16px">{whitepaper}</div>
                </div>
              </div>
              <div className="group-">
                <div className="overlap-group10 border-2px-white">
                  <div onClick={()=> window.open(telegramUrl, "_blank")} className="join-telegram valign-text-middle rubik-medium-white-16px">{joinTelegram}</div>
                </div>
              </div>
              <div className="group-">
                <div className="overlap-group11 border-2px-white">
                  <div onClick={()=> window.open(discordUrl, "_blank")}  className="join-discord valign-text-middle rubik-medium-white-16px">{joinDiscord}</div>
                </div>
              </div>
              <div className="group-">
                <div onClick={()=> window.open(nftyConnectUrl, "_blank")} className="overlap-group9" style={{ backgroundImage: `url(${overlapGroup9})` }}>
                  <div  className="use-nfty-connect-1 valign-text-middle rubik-medium-white-16px">{useNftyConnect}</div>
                </div>
              </div>
            </div>
            <div className="flex-row">
              <div onClick={()=> window.open(telegramUrl, "_blank")}  className="telegram" style={{ backgroundImage: `url(${telegram})` }}></div>
              <div onClick={()=> window.open(twitterUrl, "_blank")} className="twitter-3">
                <img
                  className="vector-1"
                  src="https://anima-uploads.s3.amazonaws.com/projects/604174b10b47003ff33c5cb1/releases/60893f86ff56b5643d73ca0c/img/vector-3@2x.svg"
                />
              </div>
              <div onClick= {() => window.open(mailToUrl)} className="envelope-fill-1">
                <img className="vector" src={vector2} />
              </div>
            </div>
          </div>
          <div id="wwa" className="who-we-are valign-text-middle">{whoWeAre}</div>
          <div className="text-3 valign-text-middle rubik-light-black-24px">{text3}</div>
          <div id="wwd" className="what-we-do-1 valign-text-middle">{whatWeDo}</div>
          <div className="text-4 valign-text-middle rubik-light-black-24px">{text4}</div>
        </div>
        <div className="flex-row-6">
          <img className="doc-pic-02-1" src={docpic021} />
          <div className="flex-col">
            <div className="overlap-group2">
              <div className="nfty-connect-1 valign-text-middle rubik-bold-black-30px">{nftyConnect}</div>
              <p className="text-7 valign-text-middle rubik-light-black-16px">{text7}</p>
            </div>
            <div className="overlap-group6" style={{ backgroundImage: `url(${overlapGroup6})` }}>
              <div onClick={()=> window.open(nftyConnectUrl, "_blank")} className="use-nfty-connect valign-text-middle">{useNftyConnect2}</div>
            </div>
            <div className="text-5 valign-text-middle rubik-bold-black-30px">
              <span>
                <span>{spanText}</span>
                <span className="span1 ">{spanText2}</span>
              </span>
            </div>
            <p className="text-6 valign-text-middle rubik-light-black-16px">{text6}</p>
          </div>
        </div>
        <div className="flex-col-1">
          <div id="op" className="our-partners valign-text-middle">{ourPartners}</div>
          <div className="text-8 valign-text-middle rubik-light-black-24px">{text8}</div>
          <div className="flex-row-8">
            <div onClick={()=> window.open(bondlyUrl, "_blank")}  className="overlap-group8" style={{ backgroundImage: `url(${bondlyLogo})` }}>
              <img className="logomark-2" src={logomark2} />
            </div>
            <div onClick={()=> window.open(polkaPetsUrl, "_blank")}  className="overlap-group-1" style={{ backgroundImage: `url(${overlapGroup3})` }}>
              <img className="x400x400-1" src={polkaPetsLogo} />
            </div>
            <div onClick={()=> window.open(defiNowUrl, "_blank")}  className="overlap-group7" style={{ backgroundImage: `url(${overlapGroup7})` }}>
              <img className="mask-group" src={defiNowLogo} />
            </div>
            <div onClick={()=> window.open(plasmNetworkUrl, "_blank")} className="overlap-group-1" style={{ backgroundImage: `url(${overlapGroup1})` }}>
              <img className="x400x400-1" src={plasmNetworkLogo} />
            </div>
            <div onClick={()=> window.open(afenUrl, "_blank")}  className="overlap-group5" style={{ backgroundImage: `url(${overlapGroup5})` }}>
              <img className="x400x400-1" src={afenLogo} />
            </div>
          </div>
          <div className="flex-row-3">
            <div onClick={()=> window.open(bondlyUrl, "_blank")}  className="bondly valign-text-middle rubik-medium-black-24px">{bondly}</div>
            <div onClick={()=> window.open(polkaPetsUrl, "_blank")}  className="polkapets valign-text-middle rubik-medium-black-24px">{polkapets}</div>
            <div onClick={()=> window.open(defiNowUrl, "_blank")}  className="de-fi-now valign-text-middle rubik-medium-black-24px">{defiNow}</div>
            <div onClick={()=> window.open(plasmNetworkUrl, "_blank")}  className="plasm-network valign-text-middle rubik-medium-black-24px">{plasmNetwork}</div>
            <div onClick={()=> window.open(afenUrl, "_blank")}  className="afen valign-text-middle rubik-medium-black-24px">{afen}</div>
          </div>
          <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup})` }}>
            <div className="group-43">
              <div className="quick-links valign-text-middle rubik-bold-white-30px">{quickLinks}</div>
              <div className="go-to valign-text-middle rubik-bold-white-30px">{goTo}</div>
              <div className="connect-with-us valign-text-middle rubik-bold-white-30px">{
              connectWithUs}</div>
            </div>
            <div className="flex-row-7">
              <div className="flex-col-3">
                <div className="flex-row-2">
                  <div onClick={()=> window.open(whitePaperUrl, "_blank")}  className="whitepaper-1 valign-text-middle rubik-normal-white-16px">{whitepaper2}</div>
                  <div className="who-we-are-1 valign-text-middle rubik-normal-white-16px"><Link to="/#wwa">{whoWeAre2}</Link></div>
                </div>
                <div className="flex-row-1">
                  <div onClick={()=> window.open(telegramUrl, "_blank")}  className="telegram-2 valign-text-middle rubik-normal-white-16px">{telegram2}</div>
                  <div  className="what-we-do valign-text-middle rubik-normal-white-16px"><Link to="/#wwd">{whatWeDo2}</Link></div>
                </div>
                <div className="flex-row-5">
                  <div onClick={()=> window.open(nftyConnectUrl, "_blank")}  className="nfty-connect valign-text-middle rubik-normal-white-16px">{nftyConnect2}</div>
                  <div className="where-were-going valign-text-middle rubik-normal-white-16px"><Link to="/#">{whereWereGoing}</Link></div>
                </div>
                <div className="our-partners-1 valign-text-middle rubik-normal-white-16px"><Link to="/#op">{ourPartners2}</Link></div>
              </div>
              <div onClick={()=> window.open(telegramUrl, "_blank")} className="telegram-1" style={{ backgroundImage: `url(${telegram3})` }}></div>
              <div onClick={()=> window.open(twitterUrl, "_blank")} className="twitter-2">
                <img className="vector-3" src={vector3} />
              </div>
              <div onClick= {() => window.open(mailToUrl)} label="Email Us" className="envelope-fill">
                <img className="vector-2" src={vector4} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
