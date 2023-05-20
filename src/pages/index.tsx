import { Button, Select } from "@mantine/core";
import { Inter } from "next/font/google";
import { useMediaQuery } from "src/lib/mantine/useMediaQuery";

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
      <div className="m-6 bg-fuchsia-200 xs:bg-red-200 sm:bg-amber-200 md:bg-lime-200 lg:bg-emerald-200 xl:bg-cyan-200">
        <div>{`largerThanXs: ${largerThanXs}`}</div>
        <div>{`largerThanSm: ${largerThanSm}`}</div>
        <div>{`largerThanMd: ${largerThanMd}`}</div>
        <div>{`largerThanLg: ${largerThanLg}`}</div>
        <div>{`largerThanXl: ${largerThanXl}`}</div>
      </div>
      <Button className="md:p-2" color="orange">
        Settings
      </Button>
      <Select
        classNames={{
          item: "text-red-500",
          label: "text-lg",
        }}
        data={[
          { label: "React", value: "react" },
          { label: "Angular", value: "ng" },
          { label: "Svelte", value: "svelte" },
          { label: "Vue", value: "vue" },
        ]}
        label="Your favorite framework/library"
        placeholder="Pick one"
      />
    </>
  );
}
