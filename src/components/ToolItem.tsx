import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/ToolItem.css';

interface Props{
    title: string;
    img: string;
    link: string;
}

const ToolItem = ({title, img, link}:Props) => {
    return (
        <Link to={link} className="ToolItem">
            <img src={img} className='toolImg'></img>
            <div className='toolTitle'>{title}</div>
        </Link>
    )
}

export default ToolItem;