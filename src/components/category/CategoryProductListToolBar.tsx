"use client"

import backArrow from "@/asset/images/backArrow.svg"
import Link from "next/link"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
// import CategoryListModal from '@/components/modal/CategoryListModal';

export default function CategoryProductListToolBar() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const router = useRouter()

  return (
    <div className="flex flex-row w-full h-[46px] bg-white items-center pl-3 pr-3 sticky top-0 z-10">
      <div className="items-center h-full">
        <Link
          href="#"
          className="h-full flex flex-wrap justify-center items-center"
          onClick={(e) => {
            e.preventDefault()
            router.back()
          }}
        >
          <div className="w-5 h-5 inline-block flex-shrink-0 align-middle">
            <Image alt="이전 페이지" src={backArrow} width={30} height={30} />
          </div>
        </Link>
      </div>
      <div className="pl-5 pr-3 items-center flex">
        <div className="inline-flex flex-wrap content-center">
          <p className="text-gray-600 text-sm text-ellipsis">대/중/소분류</p>
        </div>
        <div className="w-3 h-3 inline-block flex-shrink-0 align-middle mx-1">
          <Image
            width="24"
            height="24"
            src="https://img.icons8.com/material-rounded/24/expand-arrow--v1.png"
            alt="하위 카테고리 펼치기"
            className="-rotate-90"
          />
        </div>
        <button
          onClick={() => setIsOpenModal(!isOpenModal)}
          className="inline-flex h-8 justify-center items-center"
        >
          <p className="text-sm font-bold overflow-hidden text-ellipsis">
            중/소/세부분류
          </p>
          <div
            className={`w-4 h-4 inline-block ${
              isOpenModal ? "rotate-180" : ""
            } flex justify-center items-center`}
          >
            <Image
              width="10"
              height="10"
              src="https://img.icons8.com/material-sharp/24/give-way--v1.png"
              alt="중"
            />
          </div>
        </button>
      </div>
      <div className="flex-grow flex-shrink basis-0 justify-stretch self-stretch"></div>
      <div className="w-8 h-8 flex justify-center items-center flex-grow-0 flex-shrink-0 basis-auto">
        <button className="flex justify-center items-center">
          <div className="w-6 h-6 inline-block flex-shrink-0 align-middle">
            <Image
              width="20"
              height="20"
              src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/external-heart-love-those-icons-lineal-those-icons.png"
              alt="카테고리 좋아요"
            />
          </div>
        </button>
      </div>
      <div className="w-8 h-8 flex justify-center items-center flex-grow-0 flex-shrink-0 basis-auto">
        <button className="flex">
          <div className="w-6 h-6 inline-block flex-shrink-0 align-middle">
            <Image
              width="20"
              height="20"
              src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/external-share-interface-kiranshastry-lineal-kiranshastry-2.png"
              alt="공유"
            />
          </div>
        </button>
      </div>
      {/* {isOpenModal && <CategoryListModal />} */}
    </div>
  )
}
