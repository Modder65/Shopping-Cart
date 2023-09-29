import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Store } from "./components/Store";
import { Cart } from "./components/Cart";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
    {
      path: "/store",
      element: (
        <Layout>
          <Store />
        </Layout>
      ),
    },
    {
      path: "/cart",
      element: (
        <Layout>
          <Cart />
        </Layout>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
