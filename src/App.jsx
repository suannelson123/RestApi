import { useContext } from "react";
import { ThemeProvider } from "./components/ui/theme-provider";
import { ApiContext } from "./ContextApi/Context";
import { Search } from "lucide-react";
import { CountryCard, Navbar, SearchInput, Selection } from "./Component";
import { twMerge } from "tailwind-merge";
import SkeletonCard from "./Component/Skeleton";

function App() {
  const { data, loading } = useContext(ApiContext);

  const cardBreakpoints =
    "sm:grid-cols-[repeat(1,_minmax(min-content,100%))] md:grid-cols-[repeat(2,_minmax(min-content,100%))] lg:grid-cols-[repeat(4,_minmax(min-content,100%))]";

  return (
    <div className="container py-10 min-h-[100vh]">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar />
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:mt-10 lg:justify-between">
          <div className="mt-[5rem] flex items-center relative lg:w-[50%] ">
            <span>
              {/* search icon */}
              <Search className="absolute top-[50%] -translate-y-[50%] right-5" />
            </span>
            <SearchInput className="shadow-lg p-6 relative" />
          </div>
          <Selection className="lg:flex-1" />
        </div>

        <main
          className={twMerge("my-10 grid gap-5 lg:gap-10", cardBreakpoints)}
        >
          {loading ? (
            <SkeletonCard cardBreakpoints={cardBreakpoints} />
          ) : Array.isArray(data) ? (
            data.map((countries) => (
              <CountryCard
                key={countries.name}
                name={countries.name}
                flag={countries.flags.svg}
                population={countries.population}
                region={countries.region}
                capital={countries.capital}
                nativeName={countries.nativeName}
                subregion={countries.subregion}
                topLevelDomain={countries?.topLevelDomain[0]} //array
                languages={countries?.languages} //array
                currencies={countries?.currencies} //array
                borders={countries?.borders} //array
              />
            ))
          ) : data ? (
            <CountryCard
              key={data.name}
              name={data.name}
              flag={data.flags.svg}
              population={data.population}
              region={data.continent}
              capital={data.capital}
              nativeName={data.nativeName}
              subregion={data.subregion}
              topLevelDomain={data?.topLevelDomain[0]} //array
              languages={data?.languages} //array
              currencies={data?.currencies} //array
              borders={data?.borders} //array
            />
          ) : (
            <p>No countries found</p>
          )}
        </main>
      </ThemeProvider>
    </div>
  );
}

export default App;
