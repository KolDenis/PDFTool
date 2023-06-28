import axios from 'axios';

const API_KEY='kolotseidenis@gmail.com_3ca171f94542e1471c19008d0d6be9e2fdb516915ec421e3e9b92774881efb3fccb3dd2a';

interface Links
{
    "presignedUrl": string;
    "url": string;
    "error": boolean;
    "status": number;
    "name": string;
    "remainingCredits": number;
}

export async function generateLink(){
    const headers = {
        'x-api-key': API_KEY,
    };

    const params = {
        'name': 'my_pdf.pdf',
    };

    const res = axios.get<Links>('https://api.pdf.co/v1/file/upload/get-presigned-url', {
        headers,
        params,
    })

    return res;
} 

export async function uploadFile(presignedUrl: string, file: Uint8Array){
    const headers = {
        'x-api-key': API_KEY,
        'Content-Type': 'application/octet-stream',
    };

    /*await axios.put(presignedUrl, loadedFile, {
        headers: headers
    });*/
    const res = axios({
        method: 'PUT',
        url: presignedUrl,
        data: file,
        headers: headers
    })

    return res;
}

export async function compressFile(url: string){

    const headers = {
        'x-api-key': API_KEY,
    };

    const params = {
        url,
      };

    const res = axios.post('https://api.pdf.co/v1/pdf/optimize', params, {
        headers
    })

    return res;
}