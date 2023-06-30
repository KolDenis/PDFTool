import * as routes from'./toolRoutes';
import combImg from './images/15.png';
import splitImg from './images/14.png';
import secImg from './images/1.png';
import openImg from './images/3.png';
import numImg from './images/2.png';
import watMarkImg from './images/4.png';
import signImg from './images/5.png';
import jtpImg from './images/6.png';
import ptjImg from './images/7.png';
import wtpImg from './images/9.png';
import ptwImg from './images/12.png';
import pptpImg from './images/8.png';
import ptppImg from './images/11.png';
import compImg from './images/13.png';
import ptoxImg from './images/10.png';

import { PDFFromImages, PDFFromWord, PDFToJPG, PDFToWord, compressFile, mergeFile } from './pdfAPI';

export interface Tool{
    title: string;
    img: string;
    route: string;
    fileTypes: string[];
    numberFiles: number;
    query: (urls: string)=>Promise<any>;
}

const tools : Tool[] = [
    {
        title: 'Об`єднати PDF',
        img: combImg,
        route: routes.routeCombinePDF,
        fileTypes: ['.pdf'],
        numberFiles: 0,
        query: mergeFile,
    },
    {
        title: 'Стиснути PDF',
        img: compImg,
        route: routes.routeCompressPDF,
        fileTypes: ['.pdf'],
        numberFiles: 1,
        query: compressFile,
    },
    {
        title: 'Images to PDF',
        img: jtpImg,
        route: routes.routeJPGtoPDF,
        fileTypes: ['.jpg', '.pdf'],
        numberFiles: 0,
        query: PDFFromImages,
    },
    {
        title: 'PDF to JPG',
        img: ptjImg,
        route: routes.routePDFtoJPG,
        fileTypes: ['.pdf'],
        numberFiles: 1,
        query: PDFToJPG,
    },
    {
        title: 'Word to PDF',
        img: wtpImg,
        route: routes.routeWordtoPDF,
        fileTypes: ['.docx'],
        numberFiles: 1,
        query: PDFFromWord,
    },
    {
        title: 'PDF to Word',
        img: ptwImg,
        route: routes.routePDFtoWord,
        fileTypes: ['.pdf'],
        numberFiles: 1,
        query: PDFToWord,
    },
]

export function getInfoAbout(route: string) : Tool
{
    const filtered = tools.filter(tool => tool.route === route);
    console.log();
    return filtered[0];
}

export default tools;