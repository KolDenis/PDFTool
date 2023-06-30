import React, { useState, useEffect, useRef } from 'react'
import { Tool, getInfoAbout} from '../tools';
import { useNavigate } from 'react-router-dom';
import '../styles/ToolPage.css';
import useUploadFile from '../hooks/useUploadFile';

interface Props{
    tool: Tool
    setUrls: (urls:string[])=>void
}

const UploadFileComponent = ({tool, setUrls}:Props) => {
    const navigate = useNavigate();

    const inputRef = useRef<HTMLInputElement>(null);
    const [inputedUrls, setInputedUrls] = useState<string>('');
    const [isFileByLink, setIsFileByLink] = useState<boolean>(false);

    const [loadFile, urls, uploading, error] = useUploadFile();

    useEffect(()=>{
        if(uploading) return;
        if(!uploading && urls.length === 0) return;
        setUrls(urls.filter((url): url is string => url !== undefined));

    }, [uploading]);

    useEffect(()=>{
        if(error)
        {
            const errorData = error.response.data;
            navigate('/error', {state: {code: errorData.errorCode, message: errorData.message}});
        }
    }, [error]);

    const inputFileHandle = (event: any) => {
        let validFiles: File[] = Array.from<File>(event.target.files).filter((f:File)=>{
            const fileT:string = '.' + f.name.split('.').pop();
            if (tool.fileTypes.includes(fileT)) {
                return f;
              }
        })
        
        if(tool.numberFiles == 1){
            validFiles = validFiles.filter((_:any, index:number) => index===0);
        }

        loadFile(validFiles);
    };

    function changeType(){
        setIsFileByLink(!isFileByLink);
    };

    function changeFile(){
        if(inputRef.current != null){
            inputRef.current.click();
        } 
    }

    function submitUrl(event:any)
    {
        setUrls(inputedUrls.split(','));
    }

    return (
        <>
            <div className='toolPageTitle'>{tool.title}</div>
            <div className='toolPageButtons'>
            {
                !uploading && urls.length === 0?
                <>
                    {
                        isFileByLink?
                        <div className='toolPagePlaceInput'>
                            <input type="text" className='toolPageInputURL' placeholder='url' value={inputedUrls} onChange={event=>setInputedUrls(event.target.value)}/>
                            <button  className='toolPageInputSubmit' onClick={submitUrl}>Підтвердити</button>
                        </div>:
                        <button className="toolPageChangeFile" onClick={changeFile}>Вибрати файл</button>
                    }
                    <button className="toolPageButtonType" onClick={changeType}>{isFileByLink?'file':'url'}</button>
                </>:<></>
            }
            {
                uploading?
                <h1>Завантаження...</h1>:<></>
            }
            </div>
            <input ref={inputRef} accept={tool.fileTypes.join(', ')} type='file' multiple className="toolPageFile" style={{display: 'none'}} onChange={inputFileHandle}></input>
        </>
    )
}
export default UploadFileComponent;