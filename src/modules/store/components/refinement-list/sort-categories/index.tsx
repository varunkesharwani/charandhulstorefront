"use client"

import { ChangeEvent } from "react"

import FilterRadioGroup from "@modules/common/components/filter-radio-group"

export type SortCategoryOption = "brand" | "model" 

type SortCategoriesProps = {
  sortByCategory: SortCategoryOption
  setQueryParams: (name: string, value: SortCategoryOption) => void
  'data-testid'?: string
}

const sortCategoryOption = [
  {
    value: "brand",
    label: "Brands",
  },
  {
    value: "model",
    label: "Models",
  },
]

const SortCategories = ({ 'data-testid': dataTestId, sortByCategory, setQueryParams }: SortCategoriesProps) => {
  const handleChange = (e: ChangeEvent<HTMLButtonElement>) => {
    const newSortBy = e.target.value as SortCategoryOption
    setQueryParams("sortBy", newSortBy)
  }

  return (
    <FilterRadioGroup
      title="Sort by Category"
      items={sortCategoryOption}
      value={sortByCategory}
      handleChange={handleChange}
      data-testid={dataTestId}
    />
  )
}

export default SortCategories