import React from "react";
import {HeaderItem} from "../../datatypes/Header";
import style from "./HeaderMenu.module.scss";
import {Link} from "react-router-dom";

interface Prop {
    item: HeaderItem,
    key: number,
    to: string
}

const HeaderMenuItem = (props: Prop) => {
    return (
        <Link to={props.to} id={props.item.id} className={style.headerMenuItem}>
            {props.item.text}
        </Link>
    )
};

export default HeaderMenuItem;