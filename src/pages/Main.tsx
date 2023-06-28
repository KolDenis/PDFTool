import React from 'react'
import '../styles/Main.css';
import ToolItem from '../components/ToolItem';
import tools from '../tools';


const Main = () => {
    
    return (
        <div className="Main">
            <div className="mainTextPlace">
                <div className="mainTitle">
                    Олайн інструмент для обробки PDF файлів.
                </div>
                <div className="mainDiscription">
                    Полностью бесплатные онлайн-инструменты для объединения, разделения, сжатия PDF-файлов, преобразования документов Office в PDF-файлы, преобразования PDF-файлов в JPG и JPG в PDF. Без необходимости установки.
                </div>
            </div>
            <div className="mainGridTools">
            {
                tools.map((tool, index)=>(
                    <ToolItem title={tool.title} img={tool.img} link={tool.route} key={index}></ToolItem>
                ))
            }
            </div>
        </div>
    )
}

export default Main;