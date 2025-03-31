import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Github, { githubLoader } from "./components/Github/Github.jsx";
import User from "./components/User/User.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      {
        path: "github",
        element: <Github />,
        loader: githubLoader,
      },
      {
        path: "user",
        element: <User />,
        children: [{ path: ":userid", element: <User /> }],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="contact" element={<Contact />} />
//           <Route loader={githubLoader} path="github" element={<Github />} />
//           <Route path="user/" element={<User />}>
//             <Route path=":userid" element={<User />} />
//           </Route>
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   </StrictMode>
// );
