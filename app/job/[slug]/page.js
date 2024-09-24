import Link from "next/link";

export default function Home() {
  return (
    <main className="my-12">
      <div className="text-center">
        <h1 className="text-5xl">Mintly</h1>
        <p className="text-2xl">Refreshing the mint tin experience with Mintly: where freshness meets style.</p>
      </div>
      <div className="w-full h-64 rounded-xl bg-gray-200" />
      <div class="mt-12 grid grid-cols-2 gap-12">
        <div className="flex flex-col justify-between">
          <h4 className="uppercase text-2xl">Process</h4>

          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-2xl">Client</span>
              <span className="text-gray-400">Mintly</span>
            </div>
            <hr />
            <div className="flex flex-col">
              <span className="text-2xl">Category</span>
              <span className="text-gray-400">Confectionary</span>
            </div>
            <hr />
            <div className="flex flex-col">
              <span className="text-2xl">Role</span>
              <span className="text-gray-400">Packaging Design</span>
            </div>
            <hr />
            <div className="flex flex-col">
              <span className="text-2xl">Project URL</span>
              <span className="text-gray-400">https://google.com</span>
            </div>
            <hr />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="text-2xl font-bold mb-6">Desafio</h4>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur. Sed donec ac at nulla sed sed in. Faucibus sit facilisis quis natoque scelerisque. Felis aliquet senectus volutpat amet turpis enim sed dui. Arcu dignissim consectetur curabitur justo orci. Pretium sapien neque consectetur quam sed elementum. Amet tellus id ultricies cursus. Velit at nulla nulla fusce nisl justo et. Integer vestibulum ut libero arcu orci. Vel sociis viverra nibh elit. Turpis nibh justo aliquet aliquet nulla varius ullamcorper. Volutpat ac amet 
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-6">Solução</h4>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur. Turpis mi vulputate diam tristique tincidunt dictum quisque id. Volutpat vitae sapien elit iaculis id ullamcorper ipsum turpis nullam. Purus netus facilisis sagittis diam leo ultricies. Ut dolor imperdiet volutpat pulvinar sit. Consectetur et fermentum nisl enim quis phasellus pellentesque nunc. Purus ac varius magna velit pharetra aliquet sit.
            </p>
            <p className="text-xl">
              Donec dignissim pretium luctus facilisi eu. Aliquet sed mauris aliquet varius consectetur sed in. Consectetur egestas convallis commodo in massa sollicitudin. Turpis et vulputate massa tristique egestas a at. Facilisi a ultricies duis suscipit eget aliquam metus proin. Purus vivamus elit massa elementum mi fermentum rutrum pretium tortor. Mollis urna dui sed magnis quis tellus ipsum eget sed nisl mauris.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-8">
        <Link href="#" className="job">
          <div className="w-full aspect-square rounded-xl bg-gray-200" />
        </Link>
        <Link href="#" className="job">
          <div className="w-full aspect-square rounded-xl bg-gray-200" />
        </Link>
        <Link href="#" className="job">
          <div className="w-full aspect-square rounded-xl bg-gray-200" />
        </Link>
        <Link href="#" className="job">
          <div className="w-full aspect-square rounded-xl bg-gray-200" />
        </Link>
      </div>
    </main>
  )
}
