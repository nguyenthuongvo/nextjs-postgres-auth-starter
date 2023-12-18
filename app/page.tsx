import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: 'Cấu hình tiêu chuẩn',
    href: 'node',
    imageSrc: '/image/Pi Node.jpg',
    imageAlt: "X99 XZ DU99D4 DUAL Xeon 26863 V4",
    price: '1150 Pi',
    option0: 'CPU: DUAL Xeon 26863 V4 X2',
    option1: '32 nhân 64 luồng',
    option2: 'RAM: 64GB DDR4 2133',
    option3: 'Ổ cứng: NVME 500GB',
  },
  {
    id: 2,
    name: 'Cấu hình nâng cao',
    href: 'node',
    imageSrc: '/image/Pi Node.jpg',
    imageAlt: "X99 XZ DU99D4 DUAL Xeon 26863 V4",
    price: '2250 Pi',
    option0: 'CPU: DUAL Xeon 26863 V4 X2',
    option1: '32 nhân 64 luồng',
    option2: 'RAM: 64GB DDR4 2133',
    option3: 'Ổ cứng: NVME 500GB',
  },
]

export default function Home() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Danh sách Pi Cloud Node</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative border border-gray-300 rounded-lg p-2">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-black-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-black-500">{product.option0}</p>
                  <p className="mt-1 text-sm text-black-500">{product.option1}</p>
                  <p className="mt-1 text-sm text-black-500">{product.option2}</p>
                  <p className="mt-1 text-sm text-black-500">{product.option3}</p>
                </div>
                <p className="text-sm font-medium text-black-900">{product.price}</p>
              </div>
              <div className="mt-4 flex justify-between">
                <a href="/pi-cloud-node-1" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Thuê ngay</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
