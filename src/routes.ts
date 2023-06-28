import { FC } from "react";
import CompressPDF from "./pages/CompressPDF";
import Main from "./pages/Main";
import * as routes from'./toolRoutes';

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
        path: routes.routeCompressPDF,
        component: CompressPDF,
    },
    {
        path: routes.routeSecurePDF,
        component: CompressPDF,
    },
    {
        path: routes.routeOpenPDF,
        component: CompressPDF,
    },
    {
        path: routes.routeNumberingPDF,
        component: CompressPDF,
    },
    {
        path: routes.routeWatermarkPDF,
        component: CompressPDF,
    },
    {
        path: routes.routeSignPDF,
        component: CompressPDF,
    },
    {
        path: routes.routeSplitPDF,
        component: CompressPDF,
    },
    {
        path: routes.routeCombinePDF,
        component: CompressPDF,
    },
    {
        path: routes.routePDFtoJPG,
        component: CompressPDF,
    },
    {
        path: routes.routeJPGtoPDF,
        component: CompressPDF,
    },
    {
        path: routes.routePDFtoWord,
        component: CompressPDF,
    },
    {
        path: routes.routeWordtoPDF,
        component: CompressPDF,
    },
    {
        path: routes.routePDFtoPP,
        component: CompressPDF,
    },
    {
        path: routes.routePPtoPDF,
        component: CompressPDF,
    },
    {
        path: routes.routePDFtoXLS,
        component: CompressPDF,
    },
];

export default publicRoutes;