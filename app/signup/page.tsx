"use client";

import Image from "next/image";
import React from "react";

const Signup = () => {
	return (
		<main className="flex items-stretch h-screen w-full">
			<div className="flex-1 flex items-center justify-center px-10">
				<div>
					<h2 className="font-bold text-[23px] leading-[32px] text-[#000000]">
						첫 단계, 나만의 링크를 생성해보세요!
					</h2>
					<h2 className="text-[15px] leading-[36px] font-normal mt-3 text-neutral-600">
						아직까지 좋은 링크들이 많이 남아있어요, 서둘러요!
					</h2>
					<div className="flex w-full bg-neutral-100 p-3 mt-12 mb-6 rounded-md text-[12px]">
						<p className="text-neutral-600">bento.me/</p>
						<input
							type="text"
							className="outline-none px-[2px] w-[320px] bg-neutral-100"
							placeholder="나의 이름을 적어보세요."
						/>
					</div>
					<button className="text-[11px] text-neutral-600">아니면 로그인하기</button>
				</div>
			</div>
			<div className="flex-1 relative hidden desktop-sm:flex">
				<Image
					src="https://images.unsplash.com/photo-1513171920216-2640b288471b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1709&q=80"
					fill
					objectFit="cover"
					alt="signup background"
					quality={100}
					priority
					className="absolute"
				/>
			</div>
		</main>
	);
};

export default Signup;
