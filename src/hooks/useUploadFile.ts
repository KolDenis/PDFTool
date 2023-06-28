import { useState, useEffect } from "react";
import axios from 'axios';

const API_KEY='kolotseidenis@gmail.com_3ca171f94542e1471c19008d0d6be9e2fdb516915ec421e3e9b92774881efb3fccb3dd2a';

function useUploadFile()
{
    const [error, setError] = useState<any>();
    const [failed, setFailed] = useState<boolean>(false);

    const [loadedFile, setloadedFile] = useState<Uint8Array>();
    const [uploading, setUploading] = useState<boolean>(false);
    
    const [presignedUrl, setPresignedUrl] = useState<string>('');
    const [url, setUrl] = useState<string>('');

    useEffect(()=>{
        if(!loadedFile) return;

        const headers = {
            'x-api-key': API_KEY,
        };

        const params = {
            'name': 'file.pdf',
        };

        try{
            axios.get('https://api.pdf.co/v1/file/upload/get-presigned-url', {
                headers,
                params,
            }).then((res: any)=>{
                setPresignedUrl(res.data.presignedUrl);
                setUrl(res.data.url);
                console.log(res.data.presignedUrl)
            });

        } catch(error: any) {
            setError(error.response.data)
            setFailed(true);
        } 
    }, [loadedFile]);

     useEffect(()=>{
        if(presignedUrl.length === 0) return;

        const headers = {
            'x-api-key': API_KEY,
            'Content-Type': 'application/octet-stream',
        };

        try{
        /*await axios.put(presignedUrl, loadedFile, {
            headers: headers
        });*/
            axios({
                method: 'PUT',
                url: presignedUrl,
                data: loadedFile,
                headers: headers
            }).then(()=>{
                setUploading(false);
            });
        } catch(error: any) {
            setError(error.response.data);
            setFailed(true);
        }
    }, [presignedUrl]);

    async function loadFile(fileName: any)
    {
        if (fileName.length === 0) return;

        setFailed(false);
        setUploading(true);

        const reader = new FileReader();
        
        reader.onload = (event: any) => {
            const fileData = event.target.result;
            const byteArray = new Uint8Array(fileData);
            setloadedFile(byteArray);
            console.log(byteArray);
        };
    
        reader.readAsArrayBuffer(fileName);
    }

    return [loadFile, url, uploading, failed, error];
}

export default useUploadFile;

