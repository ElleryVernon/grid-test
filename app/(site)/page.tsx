"use client";

import React, { useState } from "react";
import GridLayout, { Layout } from "react-grid-layout";

const MyResponsiveGrid = () => {
	const [layout, setLayout] = useState<Layout[]>([
		{ i: "a", x: 0, y: 0, w: 1, h: 3 },
		{ i: "b", x: 1, y: 0, w: 2, h: 1.5 },
		{ i: "c", x: 1, y: 1.5, w: 2, h: 3 },
		{ i: "d", x: 0, y: 3, w: 1, h: 6 },
		{ i: "e", x: 1, y: 4.5, w: 2, h: 6 },
		{ i: "f", x: 0, y: 9999, w: 4, h: 1.5 }
	]);
	const [mobileLayout, setMobileLayout] = useState<Layout[]>([
		{ i: "a", x: 0, y: 0, w: 1, h: 3 },
		{ i: "b", x: 1, y: 0, w: 2, h: 1.5 },
		{ i: "c", x: 1, y: 1.5, w: 2, h: 3 },
		{ i: "d", x: 0, y: 3, w: 1, h: 6 },
		{ i: "e", x: 1, y: 4.5, w: 2, h: 6 }
	]);

	const handleLayoutChange = (newLayout: Layout[]) => {
		setLayout(newLayout);
		console.log(newLayout);
	};

	const handleMobileLayoutChange = (newLayout: Layout[]) => {
		setMobileLayout(newLayout);
		console.log(newLayout);
	};

	return (
		<>
			<main className="hidden desktop:flex">
				<GridLayout
					className="layout"
					layout={layout}
					cols={4}
					rowHeight={30}
					width={820}
					margin={[32, 32]}
					onLayoutChange={handleLayoutChange}
				>
					<div
						key="a"
						className={`border-[0.5px] rounded-[20px] p-4 bg-white  border-[#E1E1E1] cursor-pointer flex items-center justify-center text-xl font-semibold shadow-sm`}
					>
						A
					</div>
					<div
						key="b"
						className={`border-[0.5px] rounded-[20px] p-4 bg-white  border-[#E1E1E1] cursor-pointer flex items-center justify-center text-xl font-semibold shadow-sm`}
					>
						B
					</div>
					<div
						key="c"
						className={`border-[0.5px] rounded-[20px] p-4 bg-white  border-[#E1E1E1] cursor-pointer flex items-center justify-center text-xl font-semibold shadow-sm`}
					>
						C
					</div>
					<div
						key="d"
						className={`border-[0.5px] rounded-[20px] p-4 bg-white  border-[#E1E1E1] cursor-pointer flex items-center justify-center text-xl font-semibold shadow-sm`}
					>
						D
					</div>
					<div
						key="e"
						className={`border-[0.5px] rounded-[20px] p-4 bg-white  border-[#E1E1E1] cursor-pointer flex items-center justify-center text-xl font-semibold shadow-sm`}
					>
						E
					</div>
					<div
						key="f"
						className={`border-[0.5px] rounded-[20px] p-4 bg-white border-white hover:border-[#E1E1E1] cursor-pointer flex items-center justify-center text-xl font-semibold hover:shadow-sm`}
					>
						Section Title
					</div>
				</GridLayout>
			</main>
			<main className="flex desktop:hidden w-full justify-center">
				<div className="w-[412px]">
					<GridLayout
						className="layout"
						layout={mobileLayout}
						cols={2}
						rowHeight={30}
						width={380}
						margin={[32, 32]}
						containerPadding={[24, 24]}
						onLayoutChange={handleMobileLayoutChange}
					>
						<div
							key="a"
							className={`border-[0.5px] rounded-[20px] p-4 bg-white  border-[#E1E1E1] cursor-pointer flex items-center justify-center text-xl font-semibold shadow-sm`}
						>
							A
						</div>
						<div
							key="b"
							className={`border-[0.5px] rounded-[20px] p-4 bg-white  border-[#E1E1E1] cursor-pointer flex items-center justify-center text-xl font-semibold shadow-sm`}
						>
							B
						</div>
						<div
							key="c"
							className={`border-[0.5px] rounded-[20px] p-4 bg-white  border-[#E1E1E1] cursor-pointer flex items-center justify-center text-xl font-semibold shadow-sm`}
						>
							C
						</div>
						<div
							key="d"
							className={`border-[0.5px] rounded-[20px] p-4 bg-white  border-[#E1E1E1] cursor-pointer flex items-center justify-center text-xl font-semibold shadow-sm`}
						>
							D
						</div>
						<div
							key="e"
							className={`border-[0.5px] rounded-[20px] p-4 bg-white  border-[#E1E1E1] cursor-pointer flex items-center justify-center text-xl font-semibold shadow-sm`}
						>
							E
						</div>
					</GridLayout>
				</div>
			</main>
		</>
	);
};

export default MyResponsiveGrid;
