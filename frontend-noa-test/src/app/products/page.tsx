import { ProductsCarousel } from "./components/ProductsCarousel";
import { ProductsDatagrid } from "./components/ProductsDatagrid";
import { WelcomeBar } from "./components/WelcomeBar";

export default function Products({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const params = searchParams;
  return (
    <>
      {!params?.category && <>
        <WelcomeBar />
        <ProductsCarousel />
      </>}
      <ProductsDatagrid category={params?.category as string ?? ""} />
    </>
  )
}
