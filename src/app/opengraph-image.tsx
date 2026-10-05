import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { profile } from "@/data/portfolio";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Generated images can't read the page's CSS variables; these mirror the theme.
const background = "#06110d";
const accent = "#c8ff00";
const heading = "#eef5f1";
const body = "#9db0a7";

export default async function Image() {
  const photo = await readFile(join(process.cwd(), "public", profile.photo));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: "0 96px",
          background,
          borderBottom: `12px solid ${accent}`,
        }}
      >
        <div
          style={{
            display: "flex",
            width: 280,
            height: 280,
            borderRadius: 9999,
            overflow: "hidden",
            border: `6px solid ${accent}`,
            flexShrink: 0,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse only renders plain <img>. */}
          <img
            src={photoSrc}
            alt=""
            width={420}
            height={560}
            style={{ objectFit: "cover", marginTop: -40, marginLeft: -70 }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 700, color: heading }}>
            {profile.name}
          </div>
          <div style={{ fontSize: 40, color: accent, marginTop: 8 }}>
            {profile.role}
          </div>
          <div style={{ fontSize: 28, color: body, marginTop: 28, maxWidth: 640 }}>
            {profile.tagline}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
