import React from "react";
import {HeaderItem} from "../../datatypes/Header";
import style from "./HeaderMenu.module.scss";

interface Prop {
    item: HeaderItem,
    key: number
}

const HeaderMenuItem = (props: Prop) => {
    return (
        <a id={props.item.id} className={style.headerMenuItem}>
            {props.item.text}
        </a>
    )
};

export default HeaderMenuItem;