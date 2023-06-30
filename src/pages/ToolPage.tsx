import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { getInfoAbout } from '../tools';
import UploadFileComponent from './UploadFileComponent';
import '../styles/ToolPage.css';

const ToolPage = () => {
    const location = useLocation();
    const toolInfo = getInfoAbout(location.pathname);
    const [fileUrls, setUrls] = useState<string[]>([]);
    const [readyFile, setReadyFile] = useState<any>(null);
    const [converting, setConverting] = useState<boolean>(false);

    function convert()
    {
        setConverting(true);
        toolInfo.query(fileUrls.join(',')).then(res=>{
            setReadyFile(res.url);
            setConverting(false);
        });
    }

    return (
        <div className='toolPage'>
            {
                readyFile?
                <>
                    {
                        Array.isArray(readyFile)?
                        <>
                        {
                            readyFile.map((file, index)=>(
                                <a href={file} key={index}>файл {index+1}</a>
                            ))
                        }
                        </>:
                        <a href={readyFile}>Готовий файл</a>
                    }
                </>:
                <>
                {
                    converting?
                    <h1 className='toolPageTitle'>Конвертація...</h1>:
                    <>
                    {
                        fileUrls.length === 0?
                        <UploadFileComponent tool={toolInfo} setUrls={setUrls}></UploadFileComponent>:
                        <button onClick={convert} className='toolPageChangeFile'>{toolInfo.title}</button>
                    }
                    </>
                }
                </>
            }
        </div>
    )
}

export default ToolPage;