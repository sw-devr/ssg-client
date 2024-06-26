import React from "react"
// import CartIcon from '@/images/svgs/CartIcon'
import { ProductDataType } from "@/types/productDataType"
import Image from "next/image"
import {
  getItemBasicInfo,
  getItemBrand,
  getItemCalc,
  getItemThumbnail,
} from "@/actions/item"
import { faArrowUpAZ } from "@fortawesome/free-solid-svg-icons"
// import FillStarIcon from '@/images/svgs/FillStarIcon'

export default async function PopularProduct({
  id,
  src,
  store,
  brand,
  name,
  price,
  sale,
  salePrice,
  reviewRating,
  reviewCount,
  imageUrl,
  alt,
}: ProductDataType) {
  const info = await getItemBasicInfo(id)
  const thumbnail = await getItemThumbnail(id)
  const itemBrand = await getItemBrand(id)
  const calc = await getItemCalc(id)

  return (
    <div>
      <div className="relative pt-[0.625rem] pb-5">
        <div className="relative">
          <a href={`/item/${id}`}>
            <div className="relative">
              <div className="overflow-hidden justify-center items-center">
                {thumbnail && (
                  <Image
                    src={thumbnail.url}
                    fill
                    alt={thumbnail.alt}
                    objectFit="cover"
                    className="will-change-auto max-w-[100%]"
                  />
                )}
                <div className=" bg-slate-700 w-[175.2px] h-[200px]"></div>
              </div>
            </div>
          </a>
          {/* --------순위-------- */}
          <div className="flex absolute justify-between pointer-events-none top-0 right-0 left-0">
            <div className="flex-shrink-0 max-w-[100%] ml-auto">
              <div className="flex flex-row items-center">
                <div className="flex items-center align-top h-[1.25rem] pr-[0.25rem] text-[10px] bg-white text-red-600">
                  ▲1
                  <span className="border-0 h-[1px] w-[1px] -my-[1px] -ml-[1px] -mr-[1px] overflow-hidden text-nowrap absolute p-0 collapse">
                    순위변동정보
                  </span>
                </div>
                <div className="flex justify-center items-center w-5 h-5 p-[6px] bg-gray-600 text-white text-[11px] font-medium">
                  {id}
                  <span className="border-0 h-[1px] w-[1px] -my-[1px] -ml-[1px] -mr[1px] p-0 overflow-hidden absolute">
                    위
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* --------순위-------- */}
        </div>
        {/* --------좋아요/장바구니-------- */}
        <div className=" flex items-center pt-[0.125rem] pb-[0.125rem] ">
          <p className="text-xs">{/* {store === null ? '' : store} */}</p>
          <div className="flex-grow flex-shrink basis-[0%] self-stretch justify-self-stretch"></div>
          <button className="inline-flex justify-center align-middle items-center w-7 h-7">
            <div className="w-[20px] h-[20px]">
              <Image
                width="20"
                height="20"
                src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/external-heart-love-those-icons-lineal-those-icons.png"
                alt="external-heart-love-those-icons-lineal-those-icons"
              />
            </div>
          </button>
          <button className="inline-flex justify-center items-center w-7 h-7">
            {/* <CartIcon /> */}
          </button>
        </div>
        {/* --------좋아요/장바구니-------- */}
        <a className="block mt-[0.625rem] pr-[1.25rem]">
          {/* --------브랜드, 이름-------- */}
          <p className="text-ellipsis line-clamp-2 text-sm">
            <span className="font-bold">{itemBrand?.name}</span>
            {info?.itemName}
          </p>
          {/* --------브랜드, 이름-------- */}
          {sale === null ? (
            <div className="flex flex-col">
              <em className="mt-0 -me-0 mb-0 ms-[0.25rem] not-italic font-semibold">
                <span className="border-0 w-[1px] h-[1px] -my-px -mx-px px-0 py-0 overflow-hidden whitespace-nowrap absolute">
                  판매가격
                </span>
                {price}원
              </em>
            </div>
          ) : (
            <div className="mt-[0.25rem]">
              <div className="flex flex-col">
                <del className="block text-xs text-gray-500">
                  <span className="border-0 h-[1px] w-[1px] -my-px -mx-px p-0 overflow-hidden absolute whitespace-nowrap">
                    정상가격
                  </span>
                  {info?.discountRate === 0 ? null : info?.price + "원"}
                </del>
                <div className="mt-[0.125rem] mb-0 flex flex-row">
                  <em className="block font-semibold text-base not-italic text-red-500">
                    <span className="border-0 w-[1px] h-[1px] -my-px -mx-px px-0 py-0 overflow-hidden whitespace-nowrap absolute ">
                      할인율
                    </span>
                    {info?.discountRate === 0 ? null : info?.discountRate + "%"}
                  </em>
                  <em className="mt-0 -me-0 mb-0 ms-[0.25rem] font-semibold not-italic">
                    <span className="border-0 w-[1px] h-[1px] -my-px -mx-px px-0 py-0 overflow-hidden whitespace-nowrap absolute">
                      판매가격
                    </span>
                    {info &&
                      info?.price * Math.abs((info?.discountRate - 100) / 100)}
                    원
                  </em>
                </div>
              </div>
            </div>
          )}
          <div className="flex flex-row items-center text-xs mt-1 whitespace-nowrap text-gray-400">
            <div className="w-3">{/* <FillStarIcon /> */}</div>
            <p className="mt-0 me-0 mb-0 ms-1">
              <span className="border-0 w-[1px] h-[1px] -my-px -mx-px px-0 py-0 overflow-hidden whitespace-nowrap absolute">
                리뷰 별점
              </span>
              {calc?.averageStar}
              <span className="border-0 w-[1px] h-[1px] -my-px -mx-px px-0 py-0 overflow-hidden whitespace-nowrap absolute">
                점
              </span>
            </p>
            <div className="w-[1px] h-[11px] pr-2"></div>
            <p>
              <span className="border-0 w-[1px] h-[1px] -my-px -mx-px px-0 py-0 overflow-hidden whitespace-nowrap absolute">
                리뷰 갯수
              </span>
              {calc?.reviewCount}건
            </p>
          </div>
        </a>
      </div>
    </div>
  )
}
