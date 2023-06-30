import { FC } from "react";
import ToolPage from "./pages/ToolPage";
import Main from "./pages/Main";
import * as routes from'./toolRoutes';
import ErrorPage from "./pages/Error";

interface Page{
    path: string;
    component: FC;
}

const publicRoutes : Page[] = [
    {
        path: '/',
        component: Main,
    },
    {
        path: '/error',
        component: ErrorPage,
    },
    {
        path: routes.routeCompressPDF,
        component: ToolPage,
    },
    {
        path: routes.routeSecurePDF,
        component: ToolPage,
    },
    {
        path: routes.routeOpenPDF,
        component: ToolPage,
    },
    {
        path: routes.routeNumberingPDF,
        component: ToolPage,
    },
    {
        path: routes.routeWatermarkPDF,
        component: ToolPage,
    },
    {
        path: routes.routeSignPDF,
        component: ToolPage,
    },
    {
        path: routes.routeSplitPDF,
        component: ToolPage,
    },
    {
        path: routes.routeCombinePDF,
        component: ToolPage,
    },
    {
        path: routes.routePDFtoJPG,
        component: ToolPage,
    },
    {
        path: routes.routeJPGtoPDF,
        component: ToolPage,
    },
    {
        path: routes.routePDFtoWord,
        component: ToolPage,
    },
    {
        path: routes.routeWordtoPDF,
        component: ToolPage,
    },
    {
        path: routes.routePDFtoPP,
        component: ToolPage,
    },
    {
        path: routes.routePPtoPDF,
        component: ToolPage,
    },
    {
        path: routes.routePDFtoXLS,
        component: ToolPage,
    },
];

export default publicRoutes;