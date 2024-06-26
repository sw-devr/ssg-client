"use server"

export type BigCategoriesData = {
  count: number
  bigCategories: Categories
}

export type Categories = {
  id: number
  name: string
}[]

export async function getBigCategories(): Promise<BigCategoriesData | null> {
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/categories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (res.ok) {
      const data = await res.json()
      return data.result
    }
    return null
  } catch (error) {
    return null
  }
}

export type MiddleCategoriesData = {
  bigCategoryId: number
  middleCategories: Categories
}

export async function getMiddleCategories(
  bigCtegoryId: number,
): Promise<MiddleCategoriesData | null> {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/categories/middle/${bigCtegoryId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    )

    if (res.ok) {
      const data = await res.json()
      return data.result
    }
    return null
  } catch (error) {
    return null
  }
}

export type SmallCategoriesData = {
  middleCategoryId: number
  smallCategories: Categories
}

export async function getSmallCategories(
  middleCtegoryId: number,
): Promise<SmallCategoriesData | null> {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/categories/small/${middleCtegoryId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    )

    if (res.ok) {
      const data = await res.json()
      return data.result
    }
    return null
  } catch (error) {
    return null
  }
}

export type CategoryName = {
  categoryName: string
}

export async function getBigCategoryName(
  bigCtegoryId: number,
): Promise<CategoryName | null> {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/categories/big/name/${bigCtegoryId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
    const data = await res.json()
    return data.result
  } catch (error) {
    return null
  }
}
export async function getMidCategoryName(
  midCtegoryId: number,
): Promise<CategoryName | null> {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/categories/middle/name/${midCtegoryId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
    const data = await res.json()
    return data.result
  } catch (error) {
    return null
  }
}
export async function getSmallCategoryName(
  smallCtegoryId: number,
): Promise<CategoryName | null> {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/categories/small/name/${smallCtegoryId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
    const data = await res.json()
    return data.result
  } catch (error) {
    return null
  }
}
