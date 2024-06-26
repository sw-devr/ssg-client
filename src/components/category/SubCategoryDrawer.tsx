import { Categories } from "@/actions/category/category"
import Image from "next/image"
import Link from "next/link"

export default function SubCategoryDrawer({
  bigCtgId,
  midCtgId,
  existingSmall,
  isOpenAllCategory,
  selectedIndex,
  handleDrawer,
  subCategories,
}: {
  bigCtgId: number
  midCtgId: number
  existingSmall: boolean
  isOpenAllCategory: boolean
  selectedIndex: number
  handleDrawer: (index: number) => void
  subCategories: Categories
}) {
  return (
    <>
      <div
        className={`fixed h-full bottom-[40%] w-full ${
          isOpenAllCategory ? "z-20 bg-[#383838c7] animate-fade-in" : "z-[-10]"
        }`}
        onClick={() => handleDrawer(selectedIndex)}
      ></div>
      <div
        id="drawer"
        className={`fixed z-20 bg-white bottom-0 w-full h-[70%] max-h-[560px] rounded-t-[20px] transform ${
          isOpenAllCategory ? "translate-y-0" : "translate-y-full"
        } transition-transform duration-200 ease-in-out`}
      >
        <div className="flex flex-col items-center border-b-[1px]">
          <div className="w-[40px] h-[4px] mt-2 bg-[#e5e5e5] rounded-sm"></div>
          <h3 className="h-10 text-center pt-2 font-bold">전체 카테고리</h3>
          <div
            className="absolute top-[23px] right-4"
            onClick={() => handleDrawer(selectedIndex)}
          >
            <Image
              width="19"
              height="19"
              src="https://img.icons8.com/ios/50/delete-sign--v1.png"
              alt="전체 카테고리 닫기"
            />
          </div>
        </div>
        <div
          className="fixed w-full h-full overflow-y-auto"
          style={{ height: "calc(80%)" }}
        >
          <ul className="flex flex-col px-5 py-3 text-sm">
            {subCategories.map((subCtg, index) => (
              <Link
                key={subCtg.id}
                className="w-full h-[44px] flex flex-row gap-2 items-center"
                href={
                  existingSmall
                    ? `/categoryItems?big=${bigCtgId}&mid=${midCtgId}&small=${subCtg.id}`
                    : `/categoryItems?big=${bigCtgId}&mid=${subCtg.id}`
                }
                onClick={() => handleDrawer(index)}
              >
                <input
                  id={`subCategory-${subCtg.id}`}
                  name={`subCategory-${subCtg.id}`}
                  type="radio"
                  onChange={() => handleDrawer(index)}
                  checked={selectedIndex === index}
                  className={`w-[13px] h-[13px] rounded-full appearance-none ring-1  ring-offset-2 ${
                    selectedIndex === index
                      ? "bg-[#FE5B5B] ring-[#FE5B5B]"
                      : "bg-white ring-gray-400"
                  }`}
                />
                <label
                  htmlFor={`subCategory-${subCtg.id}`}
                  className={`w-full ${selectedIndex === index && "font-bold"}`}
                >
                  {subCtg.name}
                </label>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
