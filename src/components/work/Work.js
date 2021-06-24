// import React from "react";

// function Work(props) {
//   return (
//     <div>
//       <link rel="shortcut icon" href="img/logo1.png" />
//       <meta charSet="UTF-8" />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
//       <link
//         rel="stylesheet"
//         href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
//         integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
//         crossOrigin="anonymous"
//       />
//       <link
//         href="https://fonts.googleapis.com/css?family=Dosis"
//         rel="stylesheet"
//       />
//       <link rel="stylesheet" href="css/main.css" />
//       <title>My Work | Web Projects</title>
//       <header id="header-inner">
//         <div className="container">
//           <nav id="main-nav">
//             <a style={{ borderBottom: "none" }} href="index.html">
//               <img src="img/logo1.png" alt="" id="logo" />
//             </a>
//             <ul>
//               <li>
//                 <a href="index.html">Home</a>
//               </li>
//               <li>
//                 <a href="about.html">About</a>
//               </li>
//               <li>
//                 <a href="blog.html">Blog</a>
//               </li>
//               <li>
//                 <a href="work.html" className="current">
//                   Work
//                 </a>
//               </li>
//               <li>
//                 <a href="contact.html">Contact</a>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </header>
//       <section
//         style={{
//           background: "url(img/bg-3.jpg) no-repeat center right/cover",
//           color: "lavenderblush",
//         }}
//         id="work-a"
//         className="text-center py-3"
//       >
//         <div className="container">
//           <h2 className="section-title">My Work</h2>
//           <div className="bottom-line" />
//           <p className="lead">Some of my projects</p>
//           <div className="items">
//             <div className="item">
//               <div className="item-image">
//                 <img src="img/items/item1.png" alt="" />
//               </div>
//               <div className="item-text">
//                 <div className="item-text-wrap">
//                   <p className="item-text-category">Website</p>
//                   <h2 className="item-text-title">Creative Agency</h2>
//                 </div>
//               </div>
//             </div>
//             <div className="item">
//               <div className="item-image">
//                 <img src="img/items/item2.png" alt="" />
//               </div>
//               <div className="item-text">
//                 <div className="item-text-wrap">
//                   <p className="item-text-category">Website</p>
//                   <h2 className="item-text-title">Volunteering Site</h2>
//                 </div>
//               </div>
//             </div>
//             <div className="item">
//               <div className="item-image">
//                 <img src="img/items/item3.png" alt="" />
//               </div>
//               <div className="item-text">
//                 <div className="item-text-wrap">
//                   <p className="item-text-category">Website</p>
//                   <h2 className="item-text-title">Traveling Website</h2>
//                 </div>
//               </div>
//             </div>
//             <div className="item">
//               <div className="item-image">
//                 <img src="img/items/item4.png" alt="" />
//               </div>
//               <div className="item-text">
//                 <div className="item-text-wrap">
//                   <p className="item-text-category">Hot-Gadgets Website</p>
//                   <h2 className="item-text-title">
//                     An E-Commerce site like Amazon
//                   </h2>
//                 </div>
//               </div>
//             </div>
//             <div className="item">
//               <div className="item-image">
//                 <img src="img/items/item5.png" alt="" />
//               </div>
//               <div className="item-text">
//                 <div className="item-text-wrap">
//                   <p className="item-text-category">Website</p>
//                   <h2 className="item-text-title">A Social Media site</h2>
//                 </div>
//               </div>
//             </div>
//             <div className="item">
//               <div className="item-image">
//                 <img src="img/items/item6.png" alt="" />
//               </div>
//               <div className="item-text">
//                 <div className="item-text-wrap">
//                   <p className="item-text-category">React Website</p>
//                   <h2 className="item-text-title">
//                     An online course purchasing site
//                   </h2>
//                 </div>
//               </div>
//             </div>
//             <div className="item">
//               <div className="item-image">
//                 <img src="img/items/item7.png" alt="" />
//               </div>
//               <div className="item-text">
//                 <div className="item-text-wrap">
//                   <p className="item-text-category">JavaScript Website</p>
//                   <h2 className="item-text-title">Lyrics finder site</h2>
//                 </div>
//               </div>
//             </div>
//             <div className="item">
//               <div className="item-image">
//                 <img src="img/items/item8.png" alt="" />
//               </div>
//               <div className="item-text">
//                 <div className="item-text-wrap">
//                   <p className="item-text-category">Web Applications</p>
//                   <h2 className="item-text-title">Pin matcher security app</h2>
//                 </div>
//               </div>
//             </div>
//             <div className="item">
//               <div className="item-image">
//                 <img src="img/items/item9.png" alt="" />
//               </div>
//               <div className="item-text">
//                 <div className="item-text-wrap">
//                   <p className="item-text-category">Social Network Concept</p>
//                   <h2 className="item-text-title">E-School</h2>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Footer */}
//       <footer id="main-footer">
//         <div className="footer-content container">
//           <p>Copyright © Fardin Bin Taher 2020. All Rights Reserved</p>
//           <div className="social">
//             <a
//               href="https://www.facebook.com/darkstarfardin.darkstarfardin"
//               target="”_blank”"
//             >
//               <i className="fab fa-facebook" />
//             </a>
//             <a href="https://twitter.com/BackstarF" target="”_blank”">
//               <i className="fab fa-twitter" />
//             </a>
//             <a
//               href="https://www.instagram.com/backstar_fardin/"
//               target="”_blank”"
//             >
//               <i className="fab fa-instagram" />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/fardin-bin-taher-5510851aa/"
//               target="”_blank”"
//             >
//               <i className="fab fa-linkedin" />
//             </a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Work;
