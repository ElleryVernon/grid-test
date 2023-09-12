"use client";

import React, { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

const MyResponsiveGrid = () => {
	const layouts = {
		lg: [
			{ i: "1", x: 0, y: 0, w: 2, h: 2 },
			{ i: "2", x: 2, y: 0, w: 2, h: 2 },
			{ i: "3", x: 4, y: 0, w: 4, h: 2 },
			{ i: "4", x: 4, y: 2, w: 5, h: 1 },
			{ i: "5", x: 4, y: 0, w: 3, h: 2 },
		],
		md: [
			{ i: "1", x: 0, y: 0, w: 2, h: 2 },
			{ i: "2", x: 2, y: 0, w: 2, h: 2 },
			{ i: "3", x: 4, y: 0, w: 4, h: 2 },
			{ i: "4", x: 4, y: 2, w: 5, h: 1 },
			{ i: "5", x: 4, y: 0, w: 3, h: 2 },
		],
		sm: [
			{ i: "1", x: 0, y: 0, w: 2, h: 2 },
			{ i: "2", x: 2, y: 0, w: 2, h: 2 },
			{ i: "3", x: 4, y: 0, w: 4, h: 2 },
			{ i: "4", x: 4, y: 2, w: 5, h: 1 },
			{ i: "5", x: 4, y: 0, w: 3, h: 2 },
		],
		xs: [
			{ i: "1", x: 0, y: 0, w: 2, h: 2 },
			{ i: "2", x: 2, y: 0, w: 2, h: 2 },
			{ i: "3", x: 4, y: 0, w: 4, h: 2 },
			{ i: "4", x: 4, y: 2, w: 5, h: 1 },
			{ i: "5", x: 4, y: 0, w: 3, h: 2 },
		],
		xxs: [
			{ i: "1", x: 0, y: 0, w: 2, h: 2 },
			{ i: "2", x: 2, y: 0, w: 2, h: 2 },
			{ i: "3", x: 4, y: 0, w: 4, h: 2 },
			{ i: "4", x: 4, y: 2, w: 5, h: 1 },
			{ i: "5", x: 4, y: 0, w: 3, h: 2 },
		],
	};

	return (
		<ResponsiveGridLayout
			className="layout"
			layouts={layouts}
			breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
			cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
			onDragStart={(layout, oldItem, newItem, placeholder, e, element) => {
				element.classList.remove("notDragging");
				element.classList.add("dragging");
			}}
			onDragStop={(layout, oldItem, newItem, placeholder, e, element) => {
				element.classList.remove("dragging");
				element.classList.add("notDragging");
			}}
		>
			<div
				key="1"
				className={`border rounded-2xl p-4 bg-white shdow  border-neutral-200 cursor-pointer flex items-center justify-center text-xl font-semibold`}
			>
				1
			</div>
			<div
				key="2"
				className={`border rounded-2xl p-4 bg-white border-neutral-200  cursor-pointer flex items-center justify-center text-xl font-semibold`}
			>
				2
			</div>
			<div
				key="3"
				className={`border rounded-2xl p-4 bg-white border-neutral-200  cursor-pointer flex items-center justify-center text-xl font-semibold`}
			>
				3
			</div>
			<div
				key="4"
				className={`border rounded-2xl p-4 bg-white border-neutral-200  cursor-pointer flex items-center justify-center text-xl font-semibold`}
			>
				4
			</div>
			<div
				key="5"
				className={`border rounded-2xl p-4 bg-white border-neutral-200  cursor-pointer flex items-center justify-center text-xl font-semibold`}
			>
				5
			</div>
		</ResponsiveGridLayout>
	);
};

export default MyResponsiveGrid;
