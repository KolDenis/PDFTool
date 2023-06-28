import { useState, useEffect } from "react";
import { generateLink, uploadFile } from '../pdfAPI';

function useUploadFile()
{
    const [error, setError] = useState<any>(null);

    const [loadedFile, setloadedFile] = useState<Uint8Array>();
    const [uploading, setUploading] = useState<boolean>(false);
    
    const [presignedUrl, setPresignedUrl] = useState<string>('');
    const [url, setUrl] = useState<string>('');

    useEffect(()=>{
        if(!loadedFile) return;

        try{
            generateLink().then((res: any)=>{
                setPresignedUrl(res.data.presignedUrl);
                setUrl(res.data.url);
                console.log(res.data.presignedUrl)
            });

        } catch(error: any) {
            setError(error.response.data)
        } 
    }, [loadedFile]);

     useEffect(()=>{
        if(presignedUrl.length === 0) return;
        if(!loadedFile) return;

        try{
            uploadFile(presignedUrl, loadedFile).then(()=>{
                setUploading(false);
            });
        } catch(error: any) {
            setError(error.response.data);
        }
    }, [presignedUrl]);

    async function loadFile(fileName: any)
    {
        if (fileName.length === 0) return;

        setError(null);
        setUploading(true);

        const reader = new FileReader();
        
        reader.onload = (event: any) => {
            const fileData = event.target.result;
            const byteArray = new Uint8Array(fileData);
            setloadedFile(byteArray);
        };
    
        reader.readAsArrayBuffer(fileName);
    }

    return [loadFile, url, uploading, error];
}

export default useUploadFile;

