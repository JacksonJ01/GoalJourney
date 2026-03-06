import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data, error } = await supabase
    .from("profiles")
    .select("*");

  console.log("DATA:", data);
  console.log("ERROR:", error);

  return (
    <div className="p-10">
      <h1>Supabase Test</h1>
      <p>Check your terminal for output.</p>
    </div>
  );
}