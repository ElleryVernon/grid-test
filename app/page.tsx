"use client";

import React, { useState } from "react";
import GridLayout, { Layout } from "react-grid-layout";

const MyResponsiveGrid = () => {
	const [currentLayout, setCurrentLayout] = useState<Layout[] | null>(null);

	const handleLayoutChange = (layout: Layout[]) => {
		setCurrentLayout(() => layout);
		console.log(layout);
	};

	const layouts = {
		lg: [
			{ i: "1", x: 0, y: 0, w: 1, h: 1 },
			{ i: "2", x: 1, y: 0, w: 1, h: 1 },
			{ i: "3", x: 2, y: 0, w: 1, h: 1 },
			{ i: "4", x: 3, y: 2, w: 1, h: 1 },
			{ i: "5", x: 4, y: 0, w: 1, h: 1 },
		],
		sm: [
			{ i: "1", x: 0, y: 0, w: 1, h: 1 },
			{ i: "2", x: 2, y: 0, w: 1, h: 1 },
			{ i: "3", x: 4, y: 0, w: 1, h: 1 },
			{ i: "4", x: 4, y: 2, w: 1, h: 1 },
			{ i: "5", x: 4, y: 0, w: 1, h: 1 },
		],
	};

	return (
		// <GridLayout
		// 	className="layout"
		// 	layouts={currentLayout || layouts}
		// 	breakpoints={{ sm: 1200, xxs: 0 }}
		// 	cols={{ sm: 4, xxs: 2 }}
		// 	onLayoutChange={handleLayoutChange}
		// 	margin={[32, 32]}
		// 	autoSize={true}
		// 	width={128}
		// 	containerPadding={[64, 64]}
		// >
		// 	<div
		// 		key="1"
		// 		className={`border-[0.5px] rounded-[20px] p-4 bg-white  border-[#E1E1E1] cursor-pointer flex items-center justify-center text-xl font-semibold shadow-sm`}
		// 	>
		// 		1
		// 	</div>
		// 	<div
		// 		key="2"
		// 		className={`border-[0.5px] rounded-[20px] p-4 bg-white  border-[#E1E1E1]  cursor-pointer flex items-center justify-center text-xl font-semibold shadow-sm`}
		// 	>
		// 		2
		// 	</div>
		// 	<div
		// 		key="3"
		// 		className={`border-[0.5px] rounded-[20px] p-4 bg-white  border-[#E1E1E1]   cursor-pointer flex items-center justify-center text-xl font-semibold shadow-sm`}
		// 	>
		// 		3
		// 	</div>
		// 	<div
		// 		key="4"
		// 		className={`border-[0.5px] rounded-[20px] p-4 bg-white  border-[#E1E1E1]   cursor-pointer flex items-center justify-center text-xl font-semibold shadow-sm`}
		// 	>
		// 		4
		// 	</div>
		// 	<div
		// 		key="5"
		// 		className={`border-[0.5px] rounded-[20px] p-4 bg-white  border-[#E1E1E1]   cursor-pointer flex items-center justify-center text-xl font-semibold shadow-sm`}
		// 	>
		// 		5
		// 	</div>
		// </GridLayout>
		<>
			<main className="hidden desktop:flex">
				<GridLayout
					className="layout"
					cols={4}
					rowHeight={30}
					width={820}
					margin={[32, 32]}
					onLayoutChange={handleLayoutChange}
				>
					<div
						key="a"
						data-grid={{ x: 0, y: 0, w: 1, h: 3 }}
						className={`border-[0.5px] rounded-[20px] p-4 bg-white  border-[#E1E1E1] cursor-pointer flex items-center justify-center text-xl font-semibold shadow-sm`}
					>
						A
					</div>
					<div
						key="b"
						data-grid={{ x: 1, y: 0, w: 2, h: 1.5 }}
						className={`border-[0.5px] rounded-[20px] p-4 bg-white  border-[#E1E1E1] cursor-pointer flex items-center justify-center text-xl font-semibold shadow-sm`}
					>
						B
					</div>
					<div
						key="c"
						data-grid={{ x: 1, y: 1.5, w: 2, h: 3 }}
						className={`border-[0.5px] rounded-[20px] p-4 bg-white  border-[#E1E1E1] cursor-pointer flex items-center justify-center text-xl font-semibold shadow-sm`}
					>
						C
					</div>
					<div
						key="d"
						data-grid={{ x: 0, y: 3, w: 1, h: 6 }}
						className={`border-[0.5px] rounded-[20px] p-4 bg-white  border-[#E1E1E1] cursor-pointer flex items-center justify-center text-xl font-semibold shadow-sm`}
					>
						D
					</div>
					<div
						key="e"
						data-grid={{ x: 1, y: 4.5, w: 2, h: 6 }}
						className={`border-[0.5px] rounded-[20px] p-4 bg-white  border-[#E1E1E1] cursor-pointer flex items-center justify-center text-xl font-semibold shadow-sm`}
					>
						E
					</div>
					<div
						key="f"
						data-grid={{ x: 0, y: 10.5, w: 4, h: 1.5 }}
						className={`border-[0.5px] rounded-[20px] p-4 bg-white border-white hover:border-[#E1E1E1] cursor-pointer flex items-center justify-center text-xl font-semibold hover:shadow-sm`}
					>
						Section Title
					</div>
				</GridLayout>
			</main>
			<main className="flex desktop:hidden w-full justify-center">
				<div className="w-[380px]">
					<GridLayout
						className="layout"
						cols={2}
						rowHeight={30}
						width={380}
						margin={[32, 32]}
						containerPadding={[24, 24]}
						onLayoutChange={handleLayoutChange}
					>
						<div
							key="a"
							data-grid={{ x: 0, y: 0, w: 1, h: 3 }}
							className={`border-[0.5px] rounded-[20px] p-4 bg-white  border-[#E1E1E1] cursor-pointer flex items-center justify-center text-xl font-semibold shadow-sm`}
						>
							A
						</div>
						<div
							key="b"
							data-grid={{ x: 1, y: 0, w: 2, h: 1.5 }}
							className={`border-[0.5px] rounded-[20px] p-4 bg-white  border-[#E1E1E1] cursor-pointer flex items-center justify-center text-xl font-semibold shadow-sm`}
						>
							B
						</div>
						<div
							key="c"
							data-grid={{ x: 1, y: 1.5, w: 2, h: 3 }}
							className={`border-[0.5px] rounded-[20px] p-4 bg-white  border-[#E1E1E1] cursor-pointer flex items-center justify-center text-xl font-semibold shadow-sm`}
						>
							C
						</div>
						<div
							key="d"
							data-grid={{ x: 0, y: 3, w: 1, h: 6 }}
							className={`border-[0.5px] rounded-[20px] p-4 bg-white  border-[#E1E1E1] cursor-pointer flex items-center justify-center text-xl font-semibold shadow-sm`}
						>
							D
						</div>
						<div
							key="e"
							data-grid={{ x: 1, y: 4.5, w: 2, h: 6 }}
							className={`border-[0.5px] rounded-[20px] p-4 bg-white  border-[#E1E1E1] cursor-pointer flex items-center justify-center text-xl font-semibold shadow-sm`}
						>
							E
						</div>
						<div
							key="f"
							data-grid={{ x: 0, y: 10.5, w: 4, h: 1.5 }}
							className={`border-[0.5px] rounded-[20px] p-4 bg-white border-white hover:border-[#E1E1E1] cursor-pointer flex items-center justify-center text-xl font-semibold hover:shadow-sm`}
						>
							Section Title
						</div>
					</GridLayout>
				</div>
			</main>
		</>
	);
};

export default MyResponsiveGrid;
