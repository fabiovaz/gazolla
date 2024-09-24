import Link from "next/link";

export default function Home() {
  return (
    <main className="my-12">
      <div className="inline-flex py-1 px-4 rounded-xl bg-gray-100">
        Open to Work
      </div>
      <h1 className="text-5xl max-w-3xl text-balance leading-tight">Desenvolvimento de marcas, sites e produtos impactantes por meio de designs simples, funcionais e visualmente atraentes.</h1>

      <div className="grid grid-cols-2 gap-8">
        <Link href="/job/a" className="job">
          <div className="w-full aspect-square rounded-xl bg-gray-200" />
          <h3 className="mt-2 text-3xl text-semibold">Cantto Tecnologia</h3>
          <h4 className="text-xl text-gray-400">Identidade Visual</h4>
        </Link>
        <Link href="/job/b" className="job">
          <div className="w-full aspect-square rounded-xl bg-gray-200" />
          <h3 className="mt-2 text-3xl text-semibold">Cantto Tecnologia</h3>
          <h4 className="text-xl text-gray-400">Identidade Visual</h4>
        </Link>
        <Link href="/job/c" className="job">
          <div className="w-full aspect-square rounded-xl bg-gray-200" />
          <h3 className="mt-2 text-3xl text-semibold">Cantto Tecnologia</h3>
          <h4 className="text-xl text-gray-400">Identidade Visual</h4>
        </Link>
        <Link href="/job/d" className="job">
          <div className="w-full aspect-square rounded-xl bg-gray-200" />
          <h3 className="mt-2 text-3xl text-semibold">Cantto Tecnologia</h3>
          <h4 className="text-xl text-gray-400">Identidade Visual</h4>
        </Link>
      </div>
    </main>
  )
}
