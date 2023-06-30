import { useState, useEffect } from "react";
import { generateLink, uploadFile } from '../pdfAPI';

interface UploadedFile{
    file: Uint8Array,
    url?: string,
    presignedUrl?: string,
}

function useUploadFile(): [(files: File[])=>Promise<void>, (string | undefined)[], boolean, any]
{
    const [error, setError] = useState<any>(null);
    const [UploadedFiles, setUploadedFile] = useState<UploadedFile[]>([]);
    const [uploading, setUploading] = useState<boolean>(false);
    const [numberUploadedFiles, setNumberUploadedFiles] = useState<number>(0);
    const [numberFiles, setNumberFiles] = useState<number>(0);

    useEffect(()=>{
        if(!uploading) return;

        if(numberUploadedFiles === numberFiles){
            setUploading(false);
        }

    }, [numberUploadedFiles]);

    useEffect(()=>{
        console.log('asdf-------------------------');
        console.log(numberFiles);
        console.log(UploadedFiles.length);
        console.log(UploadedFiles.filter((file)=>file.file && file.url && file.presignedUrl).length);
        if(error){
            setUploading(false);
            return;
        }

        if(UploadedFiles.length != numberFiles) return;

        if(UploadedFiles.filter((file)=>file.file && file.url && file.presignedUrl).length != numberFiles) return;

        setNumberUploadedFiles(0);

        UploadedFiles.map((file)=>{
            console.log(file);
            if(!file.presignedUrl) return;

            
            uploadFile(file.presignedUrl, file.file).then((res)=>{
                if(res instanceof Error)
                {
                    setError(res);
                    return;
                }
                    
                setNumberUploadedFiles(numberUploadedFiles+1);
            });
        });
    }, [UploadedFiles]);

    async function loadFiles(files: File[])
    {
        if (files.length === 0) return;

        setError(null);
        setUploading(true);
        setNumberFiles(files.length);
        //setUploadedFile([]);

        files.map((file:File)=>{
            const reader = new FileReader();
        
            reader.onload = (event: any) => {
                const fileData = event.target.result;
                const byteArray = new Uint8Array(fileData);

                let upF:UploadedFile = {
                    file: byteArray
                }

                generateLink().then((res)=>{
                    if(res instanceof Error)
                    {
                        setError(res);
                        return; 
                    }

                    upF = {
                        ...upF,
                        url: res.url,
                        presignedUrl: res.presignedUrl,
                    }
                    setUploadedFile([...UploadedFiles, upF]);
                });
            };

            reader.readAsArrayBuffer(file);
        });
    }

    return [loadFiles, UploadedFiles.map(file=>file.url), uploading, error];
}

export default useUploadFile;

