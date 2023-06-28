import React, { useState, useEffect, useRef } from 'react'
import { getInfoAbout} from '../tools';
import { useLocation } from 'react-router-dom';
import '../styles/ToolPage.css';
import useUploadFile from '../hooks/useUploadFile';
import { compressFile } from "../pdfAPI";

const CompressPDF = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const location = useLocation();
    const [toolInfo, setToolinfo] = useState(getInfoAbout(location.pathname));
    const [isFileByLink, setIsFileByLink] = useState<boolean>(false);
    const [loadFile, url, uploading, failed, error] = useUploadFile();
    const [compressedFileUrl, setCompressedFileUrl] = useState<string>('');

    useEffect(()=>{
        if(!uploading && url != ''){
            compressFile(url).then((res)=>{
                setCompressedFileUrl(res.data.url);
            });
        }
    }, [uploading]);

    const inputFileHandle = (event: any) => {
        const file = event.target.files[0];
        loadFile(file);
    };

    function changeType(){
        setIsFileByLink(!isFileByLink);
    };

    function changeFile(){
        if(inputRef.current != null){
            inputRef.current.click();
        } 
    }

    return (
        <div className='toolPage'>
            <div className='toolPageTitle'>{toolInfo.title}</div>
            <div className='toolPageButtons'>
                {
                    isFileByLink?
                    <div className='toolPagePlaceInput'>
                        <input type="text" className='toolPageInputURL' placeholder='url'/>
                        <button  className='toolPageInputSubmit'>Підтвердити</button>
                    </div>:
                    <button className="toolPageChangeFile" onClick={changeFile}>Вибрати файл</button>
                }
                <button className="toolPageButtonType" onClick={changeType}>{isFileByLink?'f':'l'}</button>
            </div>

            <input ref={inputRef} type='file' className="toolPageFile" style={{display: 'none'}} onChange={inputFileHandle}></input>\
            <h1>{compressedFileUrl}</h1>
        </div>
    )
}

export default CompressPDF;