import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Signin from "./Login/Sigin";
import Profile from "./Login/Profile";

function App() {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    return <Signin />;
  }

  return (
    <div className="wrapper">
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/">
        <Profile />
      </Route>
    </div>
  );
}
export default App;

// import React from "react";
// // import { Routes, Route } from "react-router-dom";
// // import { UserList } from "./components/UserList";
// // import { UserDetails } from "./components/UserDetails";
// import "./App.css";
// import { Counter } from "./components/Counter";
// const App = () => {
//   return (
//     <div className="App">
//       {/* <Routes>
//         <Route path="/" element={<UserList />} />
//         <Route path="/users/:id" element={<UserDetails />} />
//       </Routes> */}
//       <Counter />
//     </div>
//   );
// };
