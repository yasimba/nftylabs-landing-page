import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Landingpage from "./components/Landingpage";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|landingpage)">
          <Landingpage {...landingpageData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const landingpageData = {
    bondlyUrl: "https://bondly.finance/",
    afenUrl: "https://afengroup.com/",
    polkapetsUrl: "t.me/polkapetworld",
    plasmNetworkUrl: "https://www.plasmnet.io/",
    defiNowUrl: "https://www.youtube.com/c/definow",
    mailToUrl: "mailto:Nftylabs@gmail.com",
    twitterUrl: "https://twitter.com/NFTYLab",
    nftyConnectUrl: "https://www.nftylabs.org/",
    discordUrl: "https://discord.gg/3S9nyp7Zga",
    telegramUrl: "https://t.me/joinchat/Ud9ibOvOa9WMhSkr",
    whitePaperUrl: "https://app.gitbook.com/@rulimio/s/nfty-labs/nfty-connect-project-scope",
    overlapGroup4: "https://anima-uploads.s3.amazonaws.com/projects/604174b10b47003ff33c5cb1/releases/60893f86ff56b5643d73ca0c/img/rectangle-30@1x.png",
    whitelogo081: "https://anima-uploads.s3.amazonaws.com/projects/604174b10b47003ff33c5cb1/releases/60893f86ff56b5643d73ca0c/img/whitelogo-08-1@2x.svg",
    text1: "Revolutionizing the Utility  Within NFTs",
    text2: "As NFTs begin to grow, adapt, and mature, NFTY Labs will be a leading project that spearheads the era of utility coming in this new ecosystem.",
    whitepaper: "Whitepaper",
    joinTelegram: "Join Telegram",
    joinDiscord: "Join Discord",
    overlapGroup9: "https://anima-uploads.s3.amazonaws.com/projects/604174b10b47003ff33c5cb1/releases/60893f86ff56b5643d73ca0c/img/rectangle-160@2x.svg",
    useNftyConnect: "Use NFTY Connect",
    telegram: "https://anima-uploads.s3.amazonaws.com/projects/604174b10b47003ff33c5cb1/releases/60893f86ff56b5643d73ca0c/img/vector-5@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/604174b10b47003ff33c5cb1/releases/60893f86ff56b5643d73ca0c/img/vector-4@2x.svg",
    whoWeAre: "Who We Are",
    text3: "NFTY Labs was created with the goal of building community-based tools to foster the newly found growth within the NFT ecosystem. While creating new found standards and tech for NFTs, NFTY Labs was also founded with the idea of enabling cross-chain NFT standards and practices.",
    whatWeDo: "What We Do",
    text4: "As NFTs continue to change the landscape within the oncoming digital economy, NFTY Labs will help spearhead the tech created for these new NFT ecosystems to ensure they flourish.",
    docpic021: "https://anima-uploads.s3.amazonaws.com/projects/604174b10b47003ff33c5cb1/releases/60893f86ff56b5643d73ca0c/img/docpic-02-1@2x.png",
    nftyConnect: "NFTY Connect",
    text7: "Verify ownership of assets to enter into token gates and promotions & receive benefits randing from physical goods to VIP group exclusive access.",
    overlapGroup6: "https://anima-uploads.s3.amazonaws.com/projects/604174b10b47003ff33c5cb1/releases/60893f86ff56b5643d73ca0c/img/rectangle-55@2x.svg",
    useNftyConnect2: "Use NFTY Connect",
    spanText: <>NFTY Time<br /></>,
    spanText2: "(Coming Soon)",
    text6: "A reputation management system that reqards those that hold NFTs for longer periods of time and provides ranks for community members to receive future benefits.",
    ourPartners: "Our Partners",
    text8: "We are grateful for our awesome partners!",
    bondlyLogo: "https://anima-uploads.s3.amazonaws.com/projects/604174b10b47003ff33c5cb1/releases/60893f86ff56b5643d73ca0c/img/ellipse-22@2x.svg",
    logomark2: "https://anima-uploads.s3.amazonaws.com/projects/604174b10b47003ff33c5cb1/releases/60893f86ff56b5643d73ca0c/img/logomark-2@2x.svg",
    overlapGroup3: "https://anima-uploads.s3.amazonaws.com/projects/604174b10b47003ff33c5cb1/releases/60893f86ff56b5643d73ca0c/img/ellipse-22@2x.svg",
    polkaPetsLogo: "https://anima-uploads.s3.amazonaws.com/projects/604174b10b47003ff33c5cb1/releases/60893f86ff56b5643d73ca0c/img/ugzfh3el-400x400-1@2x.png",
    overlapGroup7: "https://anima-uploads.s3.amazonaws.com/projects/604174b10b47003ff33c5cb1/releases/60893f86ff56b5643d73ca0c/img/ellipse-24@2x.svg",
    defiNowLogo: "https://anima-uploads.s3.amazonaws.com/projects/604174b10b47003ff33c5cb1/releases/60893f86ff56b5643d73ca0c/img/mask-group@2x.svg",
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/604174b10b47003ff33c5cb1/releases/60893f86ff56b5643d73ca0c/img/ellipse-22@2x.svg",
    plasmNetworkLogo: "https://anima-uploads.s3.amazonaws.com/projects/604174b10b47003ff33c5cb1/releases/60893f86ff56b5643d73ca0c/img/frcvtpfp-400x400-1@2x.png",
    overlapGroup5: "https://anima-uploads.s3.amazonaws.com/projects/604174b10b47003ff33c5cb1/releases/60893f86ff56b5643d73ca0c/img/ellipse-22@2x.svg",
    afenLogo: "https://anima-uploads.s3.amazonaws.com/projects/604174b10b47003ff33c5cb1/releases/60893f86ff56b5643d73ca0c/img/xf-pogfp-400x400-1@2x.png",
    bondly: "Bondly",
    polkapets: "Polkapets",
    defiNow: "DeFi NOW",
    plasmNetwork: "Plasm Network",
    afen: "AFEN",
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/604174b10b47003ff33c5cb1/releases/60893f86ff56b5643d73ca0c/img/rectangle-159@1x.svg",
    quickLinks: "Quick Links",
    goTo: "Go To",
    connectWithUs: "Connect With Us",
    whitepaper2: "Whitepaper",
    whoWeAre2: "Who We Are",
    telegram2: "Telegram",
    whatWeDo2: "What We Do",
    nftyConnect2: "NFTY Connect",
    whereWereGoing: "Where We’re Going",
    ourPartners2: "Our Partners",
    telegram3: "https://anima-uploads.s3.amazonaws.com/projects/604174b10b47003ff33c5cb1/releases/60893f86ff56b5643d73ca0c/img/vector-2@2x.svg",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/604174b10b47003ff33c5cb1/releases/60893f86ff56b5643d73ca0c/img/vector@2x.svg",
    vector4: "https://anima-uploads.s3.amazonaws.com/projects/604174b10b47003ff33c5cb1/releases/60893f86ff56b5643d73ca0c/img/vector-1@2x.svg",
};

