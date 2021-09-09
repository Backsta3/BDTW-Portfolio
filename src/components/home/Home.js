import React from "react";
import { Link } from "react-router-dom";
import Work from "../work/Work";
import "../../index.css";
import img1 from "../../img/editLogo.png";
import rana from "../../img/Member Logo/Rana 03.png";
import rhisul from "../../img/Member Logo/cornelRhisul.png";
import nadim from "../../img/Member Logo/NADIM.png";
import fardin from "../../img/Member Logo/Fardin.png";
import sakib from "../../img/Member Logo/Sakib.png";
import mahadi from "../../img/Member Logo/Mahadi.png";
import hasib from "../../img/Member Logo/Hasib.png";
import rifat from "../../img/Member Logo/CBR_RIFAT.png";
import saiful from "../../img/Member Logo/Saiful.png";
import joy from "../../img/Member Logo/Joy.png";
import dhrubo from "../../img/Member Logo/Dhrubo.png";
import shihab from "../../img/Member Logo/Shihab.png";
import muttakin from "../../img/Member Logo/Muktakin.png";
import shahed from "../../img/Member Logo/Shahed op.png";
import zihad from "../../img/Member Logo/ZIHAD.png";
import ahamed from "../../img/Member Logo/Ahamed.png";
import masud from "../../img/Member Logo/Masud.png";
import mahruz from "../../img/Member Logo/Mharuz.png";
import redwan from "../../img/Member Logo/Redwan.png";
import tanzil from "../../img/Member Logo/Tazil.png";
import imgDC from "../../img/DiscordBannerSmall.gif";
import imgEv1 from "../../img/bd_tiger_warrior_4.gif";
import imgEv2 from "../../img/INVITATION_CARD_1K_2021.png";
import imgEv3 from "../../img/bd_tiger_warrior.jpg";

function Home() {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
        crossOrigin="anonymous"
      />

      <header id="header-home">
        <div className="container">
          <nav id="main-nav">
            <a style={{ borderBottom: "none" }} href="index.html">
              <img src={img1} alt="" id="logo" />
            </a>
            <ul>
              <li>
                <a href="#header-home" className="current">
                  Home
                </a>
              </li>
              <li>
                <a href="#home-a">Members</a>
              </li>
              <li>
                <a href="#home-b">Event</a>
              </li>
              <li>
                <a href="../work/Work.js">Social</a>
              </li>
              {/* <Link to="/contact">Contact</Link> */}
            </ul>
          </nav>
          <div style={{ alignItems: "center", marginTop: 100 }}>
            <div style={{}}>
              <p
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                  color: "lightgreen",
                }}
              >
                Bangladesh Tiger Warrior is a gaming server which was founded by
                eight gamers.
              </p>
              <p
                style={{
                  textAlign: "center",
                  padding: 30,
                  fontSize: 18,
                  justifyContent: "center",
                  color: "#f1f367",
                }}
              >
                A Warriors Never Worries About His Fear
              </p>
              <div style={{ alignItems: "center" }}>
                <a
                  style={{ color: "white" }}
                  href={"https://discord.gg/9Yd9VNfduV"}
                  target="blank"
                >
                  <img
                    style={{ height: 60, width: 400, alignItems: "center" }}
                    src={imgDC}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="secoundBg">
        <section id="home-a" className="text-center py-2">
          <div className="container">
            <h2
              style={{
                color: "#cdcfcf",
              }}
              className="section-title neonText"
            >
              Founding Members & Higher Authority
            </h2>
            <div className="bottom-line " />
            <div>
              <h2 style={{ color: "#ff0000" }} className="section-title">
                King
              </h2>

              <img
                style={{
                  borderRadius: "50%",
                  width: 260,
                  height: 250,
                  margin: 30,
                }}
                src={rana}
                alt=""
              />
              <h2
                style={{ color: "rgb(255, 81, 0)" }}
                className="section-title"
              >
                Higher Admin
              </h2>

              <img
                style={{
                  borderRadius: "50%",
                  width: 260,
                  height: 250,
                  margin: 30,
                }}
                src={rhisul}
                alt=""
              />
              <img
                style={{
                  borderRadius: "50%",
                  width: 260,
                  height: 250,
                  margin: 30,
                }}
                src={fardin}
                alt=""
              />
              {/* <h1 style={{ color: "pink" }}>
                হ্যালো মেয়েরা, আমি রাইসুল। সবাই আমাকে নক দিবা। আই লাভ লেডিস
                😘😘😘😘
              </h1> */}
              <h2 style={{ color: "#f7813e" }} className="section-title">
                Founding Members
              </h2>

              <img
                style={{
                  borderRadius: "50%",
                  width: 260,
                  height: 250,
                  margin: 30,
                }}
                src={nadim}
                alt=""
              />
              <img
                style={{
                  borderRadius: "50%",
                  width: 260,
                  height: 250,
                  margin: 30,
                }}
                src={sakib}
                alt=""
              />

              <h2
                style={{
                  color: "#cdcfcf",
                }}
                className="section-title neonText"
              >
                Management Team
              </h2>
              <div className="bottom-line" />
              <h2 style={{ color: "#ffd208" }} className="section-title">
                Server Manager
              </h2>
              <img
                style={{
                  borderRadius: "50%",
                  width: 260,
                  height: 250,
                  margin: 30,
                }}
                src={mahadi}
                alt=""
              />
              <img
                style={{
                  borderRadius: "50%",
                  width: 260,
                  height: 250,
                  margin: 30,
                }}
                src={hasib}
                alt=""
              />
              <h2 style={{ color: "#1288f4" }} className="section-title">
                Moderator
              </h2>
              <img
                style={{
                  borderRadius: "50%",
                  width: 260,
                  height: 250,
                  margin: 30,
                }}
                src={sakib}
                alt=""
              />
              <img
                style={{
                  borderRadius: "50%",
                  width: 260,
                  height: 250,
                  margin: 30,
                }}
                src={rifat}
                alt=""
              />
              <img
                style={{
                  borderRadius: "50%",
                  width: 260,
                  height: 250,
                  margin: 30,
                }}
                src={saiful}
                alt=""
              />

              <h2 style={{ color: "#2bb315" }} className="section-title">
                Crew Manager
              </h2>
              <img
                style={{
                  borderRadius: "50%",
                  width: 260,
                  height: 250,
                  margin: 30,
                }}
                src={shihab}
                alt=""
              />
              <img
                style={{
                  borderRadius: "50%",
                  width: 260,
                  height: 250,
                  margin: 30,
                }}
                src={tanzil}
                alt=""
              />
              <img
                style={{
                  borderRadius: "50%",
                  width: 260,
                  height: 250,
                  margin: 30,
                }}
                src={muttakin}
                alt=""
              />
              <h2 style={{ color: "#14e159" }} className="section-title">
                BDTW Family
              </h2>

              <img
                style={{
                  borderRadius: "50%",
                  width: 260,
                  height: 250,
                  margin: 30,
                }}
                src={ahamed}
                alt=""
              />
              <img
                style={{
                  borderRadius: "50%",
                  width: 260,
                  height: 250,
                  margin: 30,
                }}
                src={masud}
                alt=""
              />
              <img
                style={{
                  borderRadius: "50%",
                  width: 260,
                  height: 250,
                  margin: 30,
                }}
                src={shahed}
                alt=""
              />
              <img
                style={{
                  borderRadius: "50%",
                  width: 260,
                  height: 250,
                  margin: 30,
                }}
                src={zihad}
                alt=""
              />
              <img
                style={{
                  borderRadius: "50%",
                  width: 260,
                  height: 250,
                  margin: 30,
                }}
                src={mahruz}
                alt=""
              />
              <img
                style={{
                  borderRadius: "50%",
                  width: 260,
                  height: 250,
                  margin: 30,
                }}
                src={redwan}
                alt=""
              />
            </div>
          </div>
        </section>

        {/* Section C: Process */}
      </section>
      <section className="thirdBg">
        <section id="home-b" className="text-center py-2">
          <div className="container">
            <h2
              style={{
                color: "#cdcfcf",
              }}
              className="section-title neonAn"
            >
              1kSpecialEvent
            </h2>
            <div className="bottom-line " />
            <div>
              <p
                style={{
                  color: "cyan",
                  backgroundColor: "black",
                  textAlign: "center",
                  borderRadius: "2%",
                  border: "cyan 2px solid",
                }}
              >
                <br /> ╔════════════ ≪≫°✺°≪ ≫ ════════════╗ <br /> Bangladesh
                Tiger Warrior (BDTW) <br /> ╚════════════ ≪≫°✺°≪ ≫ ════════════╝{" "}
                <br />
                <br /> Assalamualaikum, Recently 1000 members of Bangladesh
                Tiger Warrior have been filled and many thanks to all of you for
                building this family. An event "1k Special Night" has been
                organized on the occasion of our 1000 members which is the
                second biggest event of Bangladesh Tiger Warrior. We sincerely
                invite you to the event. All of you are cordially invited and
                make our event success. Thank you. <br />
                <br /> সম্প্রতি আমাদের বাংলাদেশ টাইগার ওয়ারিয়র পরিবারে ১ হাজার
                সদস্যের পরিবার হয়ে উঠেছে এবং এই পরিবার গড়ে তোলার জন্য আপনাদের
                সবাইকে অসংখ্য ধন্যবাদ। আমাদের ১ হাজার সদস্য পূর্তি উপলক্ষে “1k
                Special Night" অনুষ্ঠানের আয়োজন করা হয়েছে যা বাংলাদেশ টাইগার
                ওয়ারিয়রের সবচেয়ে বড় দ্বিতীয় ইভেন্ট। আপনাদের সবাইকে আন্তরিকতার
                সাথে আমন্ত্রণ জানাই “1k Special Night" অনুষ্ঠানে। <br /> <br />{" "}
                »» ──────────ஓ๑ EVENT DETAILS ๑ஓ─────────── «« <br /> DATE :
                09/09/2021 <br />
                TIME : 8.00 PM (bdt) ; 7.30 PM (ist) <br /> DAY : THURSDAY{" "}
                <br /> »» ─────────────ஓ๑ hearts ๑ஓ────────────── «« <br />{" "}
                ❖❖Art/Drawing Competition <br /> 1st prize - 1000 Tk (Gift
                Card/Cash) + CERTIFICATE <br />
                ❖❖Mobile Photography Competition <br /> 1st prize - 1000 Tk
                (Gift Card/Cash) + CERTIFICATE <br /> And digital participation
                certificates for all who participate! <br /> ❖❖ Event timeline:{" "}
                <br /> ✦ Registration date :20th August to 30th August <br /> ✦
                Submission date: 20th August to 30th August <br /> ✦ Results
                date: 09th September <br /> ✦ Grand Event: 09th September
                starting from 8:00 PM (onwards) <br /> »» ────────-───ஓ๑
                REGISTRATION ๑ஓ ─────────── «« <br /> ❖ Invite link :
                https://discord.gg/9Yd9VNfduV <br />
                Chocophilia Facebook Page :
                https://www.facebook.com/chocophilia.shop <br /> »» ──────────ஓ๑
                REGISTRATION ๑ஓ ──────────── «« <br /> Channel Name :
                𝙍𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙩𝙞𝙤𝙣 ( In ＥＶＥＮＴ ＲＯＯＭ category) <br />{" "}
                Registration Time: 9:00 am to 12:00 am <br /> Support Team :
                @⩤|𝐒𝐄𝐑𝐕𝐄𝐑 𝐌𝐀𝐍𝐀𝐆𝐄𝐑|⩥ (Mahadi & Hasib) <br /> <br />
              </p>

              <img
                id="imgEv1"
                style={{
                  borderRadius: "2%",
                  border: "cyan 2px solid",
                  width: 800,
                  height: 450,
                  margin: 30,
                }}
                src={imgEv1}
                alt=""
              />

              <img
                style={{
                  borderRadius: "2%",
                  border: "cyan 2px solid",
                  width: "30%",
                  height: "30%",
                  margin: 30,
                }}
                src={imgEv2}
                alt=""
              />
              <img
                style={{
                  borderRadius: "2%",
                  border: "cyan 2px solid",
                  width: "90%",
                  height: "100%",
                  margin: 30,
                }}
                src={imgEv3}
                alt=""
              />
              <a
                style={{
                  margin: 30,
                  color: "black",

                  backgroundColor: "cyan",
                  alignItems: "center",
                  borderRadius: 30,
                  border: "green 5px solid",
                }}
                href="https://bdtw-lottery.web.app/"
                target="_blank"
              >
                Event Prizepool
              </a>
            </div>
          </div>
        </section>

        {/* Section C: Process */}
      </section>
      <footer id="main-footer">
        <div className="footer-content container">
          <p>Developed 🛠️ By Fardin Bin Taher</p>
          <p>Copyright © BDTW 2021, All Rights Reserved</p>
          <div className="social">
            <a
              href="https://www.facebook.com/BD-%F0%9D%90%93%F0%9D%90%88%F0%9D%90%86%F0%9D%90%84%F0%9D%90%91-%F0%9D%90%96%F0%9D%90%80%F0%9D%90%91%F0%9D%90%91%F0%9D%90%88%F0%9D%90%8E%F0%9D%90%91-100183988724139"
              target="”_blank”"
            >
              <i className="fab fa-facebook" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCCBcx0SzT9BfLgjLLDTbFXA"
              target="”_blank”"
            >
              <i className="fab fa-youtube" />
            </a>
            <a
              href="https://www.instagram.com/backstar_fardin/"
              target="”_blank”"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              href="https://www.linkedin.com/in/fardin-bin-taher-5510851aa/"
              target="”_blank”"
            >
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
