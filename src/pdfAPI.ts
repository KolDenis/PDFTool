import axios, { AxiosResponse } from 'axios';

const API_KEY='denisleft4@gmail.com_2ec568ea9fbe6e0cdc47415f59a3be84ae81d2de8392291d76ea74f5a2977d4ed495c1dc';

interface Links
{
    "presignedUrl": string;
    "url": string;
    "error": boolean;
    "status": number;
    "name": string;
    "remainingCredits": number;
}

export async function generateLink():Promise<Links | any>{
    const headers = {
        'x-api-key': API_KEY,
    };

    const params = {
        'name': 'my_pdf.pdf',
    };

    try{
        const res = await axios.get<Links>('https://api.pdf.co/v1/file/upload/get-presigned-ur', {
            headers,
            params,
        })
        return res.data;
    } catch(error){
        return error;
    }
} 

export async function uploadFile(presignedUrl: string, file: Uint8Array):Promise<void | any>{
    const headers = {
        'x-api-key': API_KEY,
        'Content-Type': 'application/octet-stream',
    };
    try{
        axios({
            method: 'PUT',
            url: presignedUrl,
            data: file,
            headers: headers
        })
    }catch(error){
        return error;
    }
    
}

export async function compressFile(url: string):Promise<any>{

    const headers = {
        'x-api-key': API_KEY,
    };

    const params = {
        url,
    };

    try{
        const res = await axios.post('https://api.pdf.co/v1/pdf/optimize', params, {
            headers
        })
        return res.data;
    } catch(error){
        return error;
    }
}

export async function mergeFile(url: string):Promise<any>{

    const headers = {
        'x-api-key': API_KEY,
    };

    const params = {
        url,
    };

    try{
        const res = await axios.post('https://api.pdf.co/v1/pdf/merge', params, {
            headers
        })
        return res.data;
    } catch(error){
        return error;
    }
}

export async function PDFFromImages(url: string):Promise<any>{

    const headers = {
        'x-api-key': API_KEY,
    };

    const params = {
        url,
    };

    try{
        const res = await axios.post('https://api.pdf.co/v1/pdf/convert/from/image', params, {
            headers
        })
        return res.data;
    } catch(error){
        return error;
    }
}

export async function PDFToJPG(url: string):Promise<any>{

    const headers = {
        'x-api-key': API_KEY,
    };

    const params = {
        url,
    };

    try{
        const res = await axios.post('https://api.pdf.co/v1/pdf/convert/from/image', params, {
            headers
        })
        res.data.url = res.data.urls;
        return res.data;
    } catch(error){
        return error;
    }
}

export async function PDFFromWord(url: string):Promise<any>{

    const headers = {
        'x-api-key': API_KEY,
    };

    const params = {
        url,
    };

    try{
        const res = await axios.post('https://api.pdf.co/v1/pdf/convert/from/image', params, {
            headers
        })
        return res.data;
    } catch(error){
        return error;
    }
}
export async function PDFToWord(url: string):Promise<any>{

    const headers = {
        'x-api-key': API_KEY,
    };

    const params = {
        url,
    };

    try{
        const res = await axios.post('https://api.pdf.co/v1/pdf/convert/from/image', params, {
            headers
        })
        return res.data;
    } catch(error){
        return error;
    }
}