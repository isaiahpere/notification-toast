import Toast from "@/components/toast";

import { IconsKeys } from "@/components/toast";

export default function Home() {
  // custom hook - useToast(position)

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="text-center text-4xl font-bold">Toas Notifications</h1>
      <Toast type={IconsKeys.success} message="You got a toast!" />
    </main>
  );
}
