// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// /// REACT ROUTER REFACTOR HERE

// import { CouponProvider } from "./context/CouponContext";
// import { GlobalProvider } from "./context/GlobalContext";
// import Home from "./components/home/Home";
// import CouponView from "./components/coupons/CouponView";
// import UserView from "./components/users/UserView";
// import "./App.scss";
// import Header from "./components/core/header/Header";
// import FooterNav from "./components/core/footer/FooterNav";
// import Settings from "./components/settings/Settings";

// function App() {
//   return (
//     <Router>
//       <GlobalProvider>
//         <CouponProvider>
//           <Header />
//           <Switch>
//             <Route path="/" exact>
//               <Home />
//             </Route>
//             <Route path="/coupons">
//               <CouponView />
//             </Route>
//             <Route path="/users">
//               <UserView />
//             </Route>
//             <Route path="/settings">
//               <Settings />
//             </Route>
//           </Switch>
//           <FooterNav />
//         </CouponProvider>
//       </GlobalProvider>
//     </Router>
//   );
// }

// export default App;
