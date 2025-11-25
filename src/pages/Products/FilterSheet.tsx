import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export default function FilterSheet({ category }: { category: string }) {
  const renderFilters = () => {
    if (category === "Plants" || category === "Flowers") {
      return (
        <div className="flex flex-col gap-6 mt-6">
          <FilterGroup title="Light" options={["Bright", "Medium", "Low"]} />
          <FilterGroup title="Water" options={["Often", "Moderate", "Rare"]} />
          <FilterGroup title="Size" options={["Small", "Medium", "Large"]} />
        </div>
      )
    }
    if (category === "Vases") {
      return (
        <div className="flex flex-col gap-6 mt-6">
          <FilterGroup title="Material" options={["Ceramic", "Glass", "Stone", "Metal"]} />
        </div>
      )
    }
    return <p className="text-neutral-500 mt-6">No filters available for this category.</p>
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="rounded-full border border-neutral-200 text-sm text-neutral-700 px-4 py-2"
        >
          Filter ▾
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[320px] bg-white/80 backdrop-blur-sm">
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
        </SheetHeader>
        {renderFilters()}
      </SheetContent>
    </Sheet>
  )
}

function FilterGroup({
  title,
  options,
}: {
  title: string
  options: string[]
}) {
  return (
    <div>
      <h4 className="font-medium text-neutral-700 mb-2">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            className="px-3 py-1.5 rounded-full border border-neutral-200 text-neutral-600 hover:bg-neutral-100 transition"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
}
