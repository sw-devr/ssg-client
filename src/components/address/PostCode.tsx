"use client"
// import HeaderTitle from '@/components/ui/HeaderTitle'
import React, { useState } from "react"
import DaumPostcodeEmbed from "react-daum-postcode"
interface AddaddressProps {
  modalOpen: boolean
  setModalOpen: (value: boolean) => void
  setFullAddress: (value: string) => void
  setDetailAddress: (value: string) => void
  setZipCode: (value: string) => void
}
export default function Postcode({
  modalOpen,
  setModalOpen,
  setFullAddress,
  setDetailAddress,
  setZipCode,
}: AddaddressProps) {
  const [fullAddr, setFullAddr] = useState("")
  const [detailAddr, setDetailAddr] = useState("")
  const [zCode, setzCode] = useState("")
  const [jibunAddr, setJibunAddr] = useState("")

  const settingDetailAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetailAddr(e.target.value)
  }
  let zonecode = ""
  let full = ""
  let extraAddress = ""
  let jibunAddress = ""

  const handleComplete = (data: any) => {
    zonecode = data.zonecode
    full = data.address
    extraAddress = ""
    jibunAddress = data.jibunAddress
    jibunAddress = data.jibunAddress

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName
      }
      full += extraAddress !== "" ? ` (${extraAddress})` : ""
    }
    setFullAddr(full)
    setzCode(zonecode)
    setFullAddress(full)
    setZipCode(zonecode)
    setJibunAddr(jibunAddress)
  }
  const closeModal = () => {
    setDetailAddr(detailAddr)
    setDetailAddress(detailAddr)
    setModalOpen(false)
  }

  // TODO: 모달창 스크롤되게 만들기
  return (
    modalOpen && (
      <div
        className="bg-white top-0 left-0 right-0 bottom-0"
        style={{ zIndex: "1000", position: "fixed" }}
      >
        {/* <HeaderTitle title="배송지 추가" /> */}
        <div className="">
          <DaumPostcodeEmbed onComplete={handleComplete} autoClose={false} />
        </div>
        <div className="mx-5 my-5">
          <ul className="flex flex-col gap-2 h-28 justify-between">
            <li className="">
              <span className="absolute mr-3 px-2 py-1 w-24 bg-[#F6F6F6] text-center text-[#928888]">
                우편번호
              </span>
              <span className="absolute left-32">{zCode}</span>
            </li>
            <li className="">
              <span className="absolute mr-3 px-2 py-1 w-24 bg-[#F6F6F6] text-center text-[#928888]">
                도로명 주소
              </span>
              <span className="absolute left-32">{fullAddr}</span>
            </li>
            <li className="">
              <span className="absolute mr-3 px-2 py-1 w-24 bg-[#F6F6F6] text-center text-[#928888]">
                지번 주소
              </span>
              <span className="absolute left-32">{jibunAddr}</span>
            </li>
          </ul>
        </div>
        <div className="px-5 pt-7 w-full">
          <input
            type="text"
            className=" w-full h-10 pl-2"
            style={{ border: "1px solid " }}
            onChange={settingDetailAddress}
            placeholder="상세주소를 입력해주세요."
          />
          <div className="flex justify-center">
            <button
              className="w-full h-10 mt-3 font-bold bg-[#FF5452] text-white"
              onClick={() => {
                closeModal()
              }}
              // style={{ backgroundColor: "red", color: "white" }}
            >
              확인
            </button>
          </div>
        </div>
      </div>
    )
  )
}