import { lazy } from "react";
import { Layout as ComponentsLayout } from "src/layouts/components";

const IndexPage = lazy(() => import("src/pages"));
const FormsPage = lazy(() => import("src/pages/forms"));

import Error404Page from "src/pages/404";

export const routes = [
  {
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
      {
        path: "forms",
        element: (
          <ComponentsLayout title="Forms">
            <FormsPage />
          </ComponentsLayout>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Error404Page />,
  },
];
