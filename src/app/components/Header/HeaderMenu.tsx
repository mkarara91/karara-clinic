import React from 'react';
import style from "./HeaderMenu.module.scss"
import HeaderMenuItem from "./HeaderMenuItem";
import {HeaderItem} from "../../datatypes/Header";

const items: HeaderItem[] = [
	{
		text: "الرئيسية",
		active: true,
		id: "home",
        to: "/"
	},
    {
        text: "سيرة ذاتية",
        active: true,
        id: "about",
        to: "/about"
    },
	{
		text: "ساعات العمل",
		active: true,
		id: "opening-time",
        to: "/workingHours"
	},
	{
		text: "محاضرات",
		active: true,
		id: "lectures",
        to: "/lectures"
	}];

class HeaderMenu extends React.Component {

	render() {
		return (
			<div className={style.headerMenu}>

				<input type="checkbox" />

				<span></span>
				<span></span>
				<span></span>

				<ul className={style.menu}>
					{items.map((item, key) => <HeaderMenuItem  item={item} key={key} to={item.to}/>)}
				</ul>
			</div>
		);
	}
}

export default HeaderMenu;