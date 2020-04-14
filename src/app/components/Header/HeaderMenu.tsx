import React from 'react';
import style from "./HeaderMenu.module.scss"
import HeaderMenuItem from "./HeaderMenuItem";
import {HeaderItem} from "../../datatypes/Header";

const items: HeaderItem[] = [
	{
		text: "الرئيسية",
		active: true,
		id: "home"
	},
	{
		text: "ساعات العمل",
		active: true,
		id: "opening-time"
	},
	{
		text: "محاضرات",
		active: true,
		id: "lectures"
	}];

class HeaderMenu extends React.Component {

	render() {
		return (
			<div className={style.headerMenu}>
				{items.map((item, key) => <HeaderMenuItem  item={item} key={key}/>)}
			</div>
		);
	}
}

export default HeaderMenu;