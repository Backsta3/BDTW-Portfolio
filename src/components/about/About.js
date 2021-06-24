// import React from "react";
// import img1 from "../../img/editLogo.png";
// import "../../index.css";

// function About() {
//   return (
//     <div>
//       <link rel="shortcut icon" href="img/logo1.png" />
//       <meta charSet="UTF-8" />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
//       <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous" />
//       <link href="https://fonts.googleapis.com/css?family=Dosis" rel="stylesheet" />
//       <link rel="stylesheet" href="css/main.css" />
//       <title>About Me | Web Developer &amp; Programmer</title>
//       {/* Header */}
//       <header id="header-inner">
//         <div className="container">
//           <nav id="main-nav">
//             <a style={{borderBottom: 'none'}} href="index.html"><img src={img1} alt="" id="logo" /></a>
//             <ul>
//               <li><a href="index.html">Home</a></li>
//               <li><a href="about.html" className="current">About</a></li>
//               <li><a href="blog.html">Blog</a></li>
//               <li><a href="work.html">Work</a></li>
//               <li><a href="contact.html">Contact</a></li>
//             </ul>
//           </nav>
//         </div>
//       </header>
//       <section style={{background: 'url(img/bg-2.jpg) no-repeat center right/cover'}}>
//         <section id="about-a" className="text-center py-3">
//           <div className="container">
//             <h2 style={{color: 'lavenderblush'}} className="section-title">About Me</h2>
//             <div className="bottom-line" />
//             <p style={{color: 'lavenderblush'}} className="lead">
//               Hey,I am Fardin Bin Taher. I am a student. <br />
//               Basically, I am a web developer and designer. Also a learner as well as love to tech others.
//             </p>
//             <div className="about-info container">
//               <img src="img/circle-cropped.png" alt="" className="bio-image" />
//               <div className="bio bg-light">
//                 <h4>Your Project Is In Safe Hands</h4>
//                 <p>
//                   Before starting a project or anything I always prepare myself and be dedicated to works by saying myself I've to do it now. I'm assuring that I will never be lazy to do my works. Client Project is my project.
//                   By doing this carefully and accurately I can have more clients. I will never disappoint my clients
//                 </p>
//                 <br />
//                 <a target="blank" href="https://drive.google.com/u/1/uc?id=1O9wccR_WnM9dIJWzD2a20adTRTpEmMr5&export=download" className="btn-light"><i className="fa fa-download" aria-hidden="true" /> Download My Resume </a>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* Section B: Progress Bars */}
//         <section style={{color: 'lavenderblush'}} id="about-b" className="py-3 ">
//           <div className="container">
//             <h2 className="section-title">Technical Skills</h2>
//             <div className="bottom-line" />
//             <h4>Web Development:</h4>
//             <div className="progress">
//               <div style={{width: '70%'}} />
//             </div>
//             <h4>HTML &amp; CSS:</h4>
//             <div className="progress">
//               <div style={{width: '85%'}} />
//             </div>
//             <h4>JavaScript:</h4>
//             <div className="progress">
//               <div style={{width: '74%'}} />
//             </div>
//             <h4>React:</h4>
//             <div className="progress">
//               <div style={{width: '72%'}} />
//             </div>
//             <h4>Mongo Database:</h4>
//             <div className="progress">
//               <div style={{width: '48%'}} />
//             </div>
//             <h4>Python:</h4>
//             <div className="progress">
//               <div style={{width: '48%'}} />
//             </div>
//             <h4>C-Programming:</h4>
//             <div className="progress">
//               <div style={{width: '35%'}} />
//             </div>
//           </div>
//         </section>
//         {/* Section C: Logos */}
//         <section id="about-c" className="py-4 ">
//           <div className="container">
//             <div className="about-logos d-flex align-items-center justify-content-around">
//               <img style={{width: '90px', backgroundColor: 'lavenderblush'}} src="https://img.icons8.com/ios/452/javascript-logo.png" alt="" />
//               <img style={{width: '180px'}} src="https://www.import.io/wp-content/uploads/2017/10/React-logo-1.png" alt="" />
//               <img style={{width: '210px'}} src="img/python-logo.png" alt="" />
//               <img style={{width: '75px'}} src="https://i.pinimg.com/originals/41/95/cf/4195cf989fac0128a89669f40a1e3496.png" alt="" />
//               <img style={{width: '75px'}} src="https://i.pinimg.com/originals/99/f8/87/99f887833c475448723d3c9ac16c179b.png" alt="" />
//               <img style={{width: '75px'}} src="data:image/png;base64,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" alt="" />
//             </div>
//           </div>
//         </section>
//       </section>
//       {/* Footer */}
//       <footer id="main-footer">
//         <div className="footer-content container">
//           <p>Copyright © Fardin Bin Taher 2020. All Rights Reserved</p>
//           <div className="social">
//             <a href="https://www.facebook.com/darkstarfardin.darkstarfardin" target="”_blank”"><i className="fab fa-facebook" /></a>
//             <a href="https://twitter.com/BackstarF" target="”_blank”"><i className="fab fa-twitter" /></a>
//             <a href="https://www.instagram.com/backstar_fardin/" target="”_blank”"><i className="fab fa-instagram" /></a>
//             <a href="https://www.linkedin.com/in/fardin-bin-taher-5510851aa/" target="”_blank”"><i className="fab fa-linkedin" /></a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default About;
