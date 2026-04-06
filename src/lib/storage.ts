import { supabaseBrowser } from "@/lib/supabase-client";

function slugifyFileName(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9.\-_]+/g, "-")
    .replace(/-+/g, "-");
}

export async function uploadImageToWebsiteMedia(file: File, folder: string) {
  const ext = file.name.split(".").pop() || "jpg";
  const cleanName = slugifyFileName(file.name.replace(`.${ext}`, ""));
  const filePath = `${folder}/${Date.now()}-${cleanName}.${ext}`;

  const { error } = await supabaseBrowser.storage
    .from("website-media")
    .upload(filePath, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) {
    throw new Error(error.message);
  }

  const { data } = supabaseBrowser.storage
    .from("website-media")
    .getPublicUrl(filePath);

  return data.publicUrl;
}