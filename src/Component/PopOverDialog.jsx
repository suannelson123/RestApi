import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogOverlay } from "@radix-ui/react-dialog";

const PopOverDialog = ({
  name,
  flag,
  population,
  region,
  capital,
  nativeName,
  subregion,
  topLevelDomain,
  languages,
  currencies,
  borders,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" variant="outline" className="flex mx-auto">
          Show Details...
        </Button>
      </DialogTrigger>

      <DialogOverlay className="relative flex items-center justify-center">
        <DialogContent className="w-full max-w-[1000px] max-h-[90vh] h-full overflow-y-auto p-10 ">
          <DialogHeader>
            <div className="xl:flex justify-around gap-5">
              <div className="xl:flex flex-col justify-center xl:flex-1">
                <img
                  className="w-full h-[250px] object-contain aspect-square mb-10 lg:mb-0"
                  src={flag}
                  alt={name}
                />
              </div>

              <div className="text-left space-y-4 lg:flex lg:place-items-center xl:flex-1 xl:basis-[10%] lg:justify-center lg:gap-5">
                <div className="[&>p]:font-bold [&>p]:text-primary [&>p]:lg:text-[1.2rem] space-y-2">
                  <DialogTitle className="text-left  xl:mt-5 lg:text-[2rem] xl:mb-5">
                    {name}
                  </DialogTitle>
                  <DialogDescription>
                    Native name:
                    <span className=" ml-2 font-light">{nativeName}</span>
                  </DialogDescription>
                  <DialogDescription>
                    Population:
                    <span className="font-light ml-2">
                      {population.toLocaleString("en-Us")}
                    </span>
                  </DialogDescription>
                  <DialogDescription>
                    Region:
                    <span className="font-light ml-2">{region}</span>
                  </DialogDescription>
                  <DialogDescription>
                    Sub Region:
                    <span className="font-light ml-2">{subregion}</span>
                  </DialogDescription>
                  <DialogDescription>
                    Capital:
                    <span className="font-light ml-2">{capital}</span>
                  </DialogDescription>
                </div>

                <hr className="my-5" />

                <div className="[&>p]:font-bold [&>p]:text-primary [&>p]:lg:text-[1.2rem] space-y-2">
                  <DialogDescription>
                    Top Level Domain:
                    <span className="font-light ml-2">
                      {topLevelDomain || "N/A"}
                    </span>
                  </DialogDescription>
                  <DialogDescription>
                    Currencies:
                    <span className="font-light ml-2">
                      {currencies?.map((item) => item.code) || "N/A"}
                    </span>
                  </DialogDescription>
                  <DialogDescription>
                    Languages:
                    <span className="font-light ml-2">
                      {languages?.map((item) => item.name).join(", ") || "N/A"}
                    </span>
                  </DialogDescription>
                  <DialogDescription className="flex flex-col">
                    <span className="lg:block lg:mb-2">Border Countries:</span>
                    <span className="grid grid-cols-2  md:grid-cols-3 gap-5 w-[max-content]">
                      {borders?.map((border, index) => (
                        <Button className="max-w-[max-content]" key={index}>
                          {border}
                        </Button>
                      )) || "N/A"}
                    </span>
                  </DialogDescription>
                </div>
              </div>
            </div>
          </DialogHeader>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
};
export default PopOverDialog;
