"use client";

import React, { useState } from "react";
import GridLayout, { Layout, WidthProvider } from "react-grid-layout";
import Image from "next/image";

const ResponsiveGridLayout = WidthProvider(GridLayout);

const MyResponsiveGrid = () => {
	const [layout, setLayout] = useState<Layout[]>([
		{ i: "a", x: 0, y: 0, w: 1, h: 3 },
		{ i: "b", x: 1, y: 0, w: 2, h: 1.5 },
		{ i: "c", x: 1, y: 1.5, w: 2, h: 3 },
		{ i: "d", x: 0, y: 3, w: 1, h: 6 },
		{ i: "e", x: 1, y: 4.5, w: 2, h: 6 },
		{ i: "f", x: 0, y: 9999, w: 4, h: 1.5 },
	]);
	const [mobileLayout, setMobileLayout] = useState<Layout[]>([
		{ i: "a", x: 0, y: 1.5, w: 1, h: 3 },
		{ i: "b", x: 1, y: 0, w: 2, h: 1.5 },
		{ i: "c", x: 1, y: 0, w: 2, h: 3 },
		{ i: "d", x: 2, y: 3, w: 1, h: 6 },
		{ i: "e", x: 1, y: 4.5, w: 2, h: 6 },
	]);
	const [isEditMode, setIsEditMode] = useState(false);
	const [selectedItem, setSelectedItem] = useState<string | null>(null);

	const handleLayoutChange = (newLayout: Layout[]) => {
		if (!isEditMode) {
			setLayout(newLayout);
			console.log(newLayout);
		}
	};

	const handleMobileLayoutChange = (newLayout: Layout[]) => {
		if (isEditMode) {
			setMobileLayout(newLayout);
			console.log(newLayout);
		}
	};

	const toggleEditMode = () => {
		setIsEditMode(!isEditMode);
		setSelectedItem(null);
	};

	const handleItemClick = (key: string) => {
		if (isEditMode) {
			setSelectedItem(key === selectedItem ? null : key);
		}
	};

	return (
		<div className="flex flex-col min-[900px]:flex-row items-center min-[900px]:items-start justify-center max-w-[1440px] mt-2 min-[900px]:mt-6 mx-auto">
			<aside className="min-[900px]:w-full max-w-lg px-4 py-8 min-[900px]:ml-10 w-[384px]">
				<header className="flex flex-col items-start min-w-[384px]">
					<figure className="w-28 h-28 min-[900px]:w-[164px] min-[900px]:h-[164px] rounded-full overflow-hidden mb-4 bg-gray-200 border border-gray-300">
						<Image
							src="https://www.lemonsound.co/_next/image?url=https%3A%2F%2Fkudvyikhzyxkecfehhco.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fartist_profiles%2F176%2Favatar.png&w=1080&q=75"
							alt="Seumgmin Yeom 프로필 이미지"
							width={184}
							height={184}
							className="object-cover w-full h-full"
						/>
					</figure>
					<h1 className="font-bold mb-2 text-3xl min-[900px]:text-4xl text-center min-[900px]:text-left">
						Seumgmin Yeom
					</h1>
				</header>
				<section className="text-[15px] min-[900px]:text-lg text-neutral-700 leading-relaxed">
					<p className="min-[900px]:text-left leading-relaxed">
						작곡 | 음악감독 <br />
						<br />
						안녕하십니까, 작곡가 염승민입니다.
						<br />
						영화를 포함한 게임, 가요 스트링편곡 등 다양한 작업 속 다양한 장르의 곡을 작편곡합니다.
						<br />
						*업로드된 음원과 영상은 모두 포트폴리오 결과물입니다!
					</p>
					<ul className="list-disc list-inside mt-4 leading-relaxed">
						<li>장편산업 [길위에 김대중]</li>
						<li>단편독립 [거북이의 꿈]</li>
						<li>단편독립 [카게온나]</li>
						<li>단편독립 [lost her]</li>
						<li>단편독립 [해피]</li>
						<li>단편독립 [비둘기 살인마]</li>
						<li>단편독립 [도시 속 시도]</li>
						<li>단편독립 [금주는 긁지않은 복권]</li>
						<li>단편독립 [무해]</li>
						<li>창작뮤지컬 [나의 노래]</li>
						<li>창작뮤지컬 [셈여림]</li>
					</ul>
					<p className="mt-4 leading-relaxed">그 외 앨범 작편곡 및 발매</p>
				</section>
			</aside>
			<main className="w-full flex justify-center">
				<section className="hidden min-[900px]:flex max-w-[800px] justify-center relative">
					<div className="w-[800px]">
						<ResponsiveGridLayout
							className="layout"
							layout={layout}
							width={800}
							cols={4}
							rowHeight={30}
							margin={[16, 16]}
							onLayoutChange={handleLayoutChange}
							isDraggable={isEditMode}
							isResizable={false}
							compactType="vertical"
							preventCollision={false}
						>
							{["a", "b", "c", "d", "e", "f"].map((key) => (
								<article
									key={key}
									className={`relative border-[0.5px] rounded-[20px] p-4 bg-white border-[#E1E1E1] ${
										isEditMode ? "cursor-move" : "cursor-pointer"
									} flex items-center justify-center text-xl font-semibold shadow-sm`}
									onClick={() => handleItemClick(key)}
								>
									{key.toUpperCase()}
								</article>
							))}
						</ResponsiveGridLayout>
					</div>
				</section>
				<section className="flex min-[900px]:hidden justify-center relative w-[384px]">
					<div className="w-[384px]">
						<ResponsiveGridLayout
							className="layout"
							layout={mobileLayout}
							cols={2}
							width={384}
							rowHeight={30}
							margin={[16, 16]}
							containerPadding={[24, 24]}
							onLayoutChange={handleMobileLayoutChange}
							isDraggable={isEditMode}
							isResizable={false}
							draggableHandle=".drag-handle"
						>
							{["a", "b", "c", "d", "e"].map((key) => (
								<article
									key={key}
									className={`relative border-[0.5px] rounded-[20px] p-4 bg-white border-[#E1E1E1] cursor-pointer flex items-center justify-center text-xl font-semibold shadow-sm ${
										selectedItem === key ? "ring-2 ring-black" : ""
									}`}
									onClick={() => handleItemClick(key)}
								>
									{key.toUpperCase()}
									{isEditMode && selectedItem === key && (
										<div className="absolute inset-0 flex items-center justify-center">
											<div className="drag-handle w-8 h-8 bg-black rounded-full flex items-center justify-center text-white cursor-move pb-0.5">
												↕
											</div>
										</div>
									)}
								</article>
							))}
						</ResponsiveGridLayout>
					</div>
				</section>
			</main>
			<nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
				<button
					onClick={toggleEditMode}
					className="px-6 py-2 text-white rounded-xl font-bold shadow-lg transition-all duration-300 border border-gray-300 bg-[#50DD77] hover:bg-opacity-90 relative overflow-hidden group"
				>
					<span className="relative z-10">{isEditMode ? "저장" : "편집"}</span>
					<div className="absolute inset-0 bg-white opacity-20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
				</button>
			</nav>
		</div>
	);
};

export default MyResponsiveGrid;
