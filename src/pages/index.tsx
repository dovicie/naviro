import { Inter } from "next/font/google";
import { Button, Select } from "@mantine/core";
import { useMediaQuery } from "@/lib/mantine/useMediaQuery";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const largerThanXs = useMediaQuery("xs");
  const largerThanSm = useMediaQuery("sm");
  const largerThanMd = useMediaQuery("md");
  const largerThanLg = useMediaQuery("lg");
  const largerThanXl = useMediaQuery("xl");
  return (
    <>
      <h1>Naviro</h1>
      <div className="bg-fuchsia-200 xs:bg-red-200 sm:bg-amber-200 md:bg-lime-200 lg:bg-emerald-200 xl:bg-cyan-200">
        <div>{`largerThanXs: ${largerThanXs}`}</div>
        <div>{`largerThanSm: ${largerThanSm}`}</div>
        <div>{`largerThanMd: ${largerThanMd}`}</div>
        <div>{`largerThanLg: ${largerThanLg}`}</div>
        <div>{`largerThanXl: ${largerThanXl}`}</div>
      </div>
      <Button color="orange" className="md:p-2">
        Settings
      </Button>
      <Select
        classNames={{
          label: "text-lg",
          item: "text-red-500",
        }}
        label="Your favorite framework/library"
        placeholder="Pick one"
        data={[
          { value: "react", label: "React" },
          { value: "ng", label: "Angular" },
          { value: "svelte", label: "Svelte" },
          { value: "vue", label: "Vue" },
        ]}
      />
    </>
  );
}
