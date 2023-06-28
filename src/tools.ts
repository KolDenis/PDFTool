import * as routes from'./toolRoutes';
import combImg from './images/15.png';
import splitImg from './images/14.png';
import secImg from './images/1.png';
import openImg from './images/3.png';
import numImg from './images/2.png';
import watMarkImg from './images/4.png';
import signImg from './images/2.png';
import jtpImg from './images/6.png';
import ptjImg from './images/7.png';
import wtpImg from './images/9.png';
import ptwImg from './images/12.png';
import pptpImg from './images/8.png';
import ptppImg from './images/11.png';
import compImg from './images/13.png';
import ptoxImg from './images/10.png';


export interface Tool{
    title: string;
    img: string;
    route: string;
}

const tools : Tool[] = [
    {
        title: 'Об`єднати PDF',
        img: combImg,
        route: routes.routeCombinePDF,
    },
    {
        title: 'Розділити PDF',
        img: splitImg,
        route: routes.routeSplitPDF,
    },
    {
        title: 'Захистити PDF',
        img: secImg,
        route: routes.routeSecurePDF,
    },
    {
        title: 'Відкрити PDF',
        img: openImg,
        route: routes.routeOpenPDF,
    },
    {
        title: 'Номерація PDF',
        img: numImg,
        route: routes.routeNumberingPDF,
    },
    {
        title: 'Водяний знак',
        img: watMarkImg,
        route: routes.routeWatermarkPDF,
    },
    {
        title: 'Підписати PDF',
        img: signImg,
        route: routes.routeSignPDF,
    },
    {
        title: 'JPG to PDF',
        img: jtpImg,
        route: routes.routeJPGtoPDF,
    },
    {
        title: 'PDF to JPG',
        img: ptjImg,
        route: routes.routePDFtoJPG,
    },
    {
        title: 'Word to PDF',
        img: wtpImg,
        route: routes.routeWordtoPDF,
    },
    {
        title: 'PDF to Word',
        img: ptwImg,
        route: routes.routePDFtoWord,
    },
    {
        title: 'PowerPoint to PDF',
        img: pptpImg,
        route: routes.routePPtoPDF,
    },
    {
        title: 'PDF to PowerPoint',
        img: ptppImg,
        route: routes.routePDFtoPP,
    },
    {
        title: 'Стиснути PDF',
        img: compImg,
        route: routes.routeCompressPDF,
    },
    {
        title: 'PDF Excel',
        img: ptoxImg,
        route: routes.routePDFtoXLS,
    },
]

export function getInfoAbout(route: string) : Tool
{
    const filtered = tools.filter(tool => tool.route === route);
    console.log();
    return filtered[0];
}

export default tools;