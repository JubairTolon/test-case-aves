import Footer from "./components/layout/footer"
import Header from "./components/layout/header"
import SocialProofCard from "./components/social-proof-card"
import { useThemeStore } from "./store/use-theme-store"

function App() {
  const {theme} = useThemeStore()

  return (
    <div className={theme}>
      <div className="bg-white dark:bg-gray-950 dark:text-white h-screen w-full">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 mt-16">
            <section className="text-center max-w-2xl mx-auto space-y-6">
              <h1 className="text-6xl font-bold">
                Refreshingly Sustainable: <span className="text-blue-500">Boxed Water</span> 
              </h1>
              <p className="text-xl">
                Opt for a more eco-friendly way to stay hydrated with our fully recyclable cartons.
              </p>
              <button className="py-3 px-5 text-white text-lg rounded-lg bg-blue-500">
                Shop now
              </button>
            </section>
            <section className="mt-16">
              <h2 className="text-3xl font-semibold text-center mb-6">
                A Little Love from Our Customers
              </h2>
              <div className="flex flex-row gap-6 max-w-4xl mx-auto">
                <SocialProofCard />
                <SocialProofCard />
                <SocialProofCard />
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
