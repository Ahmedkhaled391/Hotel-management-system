import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kjvypedeuajgsyeupzds.supabase.co";
const supabaseKey = "sb_publishable_XAIpyUqRIwJToJnL2SeuBA_2Xi8r-ah";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
export { supabaseUrl };
