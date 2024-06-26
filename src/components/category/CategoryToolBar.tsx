import backArrow from "@/asset/images/backArrow.svg"
import Link from "next/link"
import Image from "next/image"
import CategoryHeart from "./CategoryHeart"
import { getIsClipedCategory } from "@/actions/clip/categoryClip"

export type Category = {
  id: number | undefined
  name: string
}

type CategoryProductListToolBarProps = {
  bigCategory: Category
  midCategory: Category
  smallCategory: Category
}

export default async function CategoryToolBar({
  bigCategory,
  midCategory,
  smallCategory,
}: CategoryProductListToolBarProps) {
  const superCategory = smallCategory.id ? midCategory : bigCategory
  const subCategory = smallCategory.id ? smallCategory : midCategory

  let superPath = `/categoryItems?big=${superCategory.id}`
  if (smallCategory.id) {
    superPath = `/categoryItems?big=${bigCategory.id}&mid=${midCategory.id}`
  }

  let subPath = `/categoryItems?big=${bigCategory.id}&mid=${midCategory.id}`
  if (smallCategory.id) {
    subPath = `/categoryItems?big=${bigCategory.id}&mid=${midCategory.id}&small=${smallCategory.id}`
  }
  let isCliped = false
  if (bigCategory.id) {
    const result = await getIsClipedCategory({
      bigCategoryId: bigCategory.id,
      middleCategoryId: midCategory.id,
      smallCategoryId: smallCategory.id,
    })
    isCliped = result ? result.isCliped : false
  }

  return (
    <div className="flex flex-row w-full h-[46px] bg-white items-center pl-3 pr-3 sticky top-0 z-10">
      <div className="pr-3 items-center flex">
        {subCategory.id ? (
          <Link
            href={superPath}
            className="inline-flex flex-wrap content-center"
          >
            <span className="text-gray-600 text-sm text-ellipsis">
              {superCategory.name}
            </span>
          </Link>
        ) : (
          <Link
            href={"/category"}
            className="inline-flex flex-wrap content-center"
          >
            <span className="text-gray-600 text-sm text-ellipsis">
              전체보기
            </span>
          </Link>
        )}
        <div className="w-3 h-3 inline-block flex-shrink-0 align-middle mx-1">
          <Image
            width="24"
            height="24"
            src="https://img.icons8.com/material-rounded/24/expand-arrow--v1.png"
            alt="구분자"
            className="-rotate-90"
          />
        </div>
        <button className="inline-flex h-8 justify-center items-center">
          {subCategory.id ? (
            <Link href={subPath}>
              <span className="text-sm font-bold overflow-hidden text-ellipsis">
                {subCategory.name}
              </span>
            </Link>
          ) : (
            <Link href={"/category"}>
              <span className="text-sm font-bold overflow-hidden text-ellipsis">
                {superCategory.name}
              </span>
            </Link>
          )}
        </button>
      </div>
      <div className="flex-grow flex-shrink basis-0 justify-stretch self-stretch"></div>
      <div className="w-8 h-8 flex justify-center items-center flex-grow-0 flex-shrink-0 basis-auto">
        {bigCategory.id && (
          <CategoryHeart
            clipCategoryId={{
              bigCategoryId: bigCategory.id,
              middleCategoryId: midCategory.id,
              smallCategoryId: smallCategory.id,
            }}
            isCliped={isCliped}
          />
        )}
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
    </div>
  )
}
