/* eslint-disable react/no-unknown-property  -- TODO */
import { ImageResponse } from "next/og";

export async function GET(req: Request): Promise<ImageResponse> {
  const { searchParams } = new URL(req.url);

  // ?title=<title>
  const hasTitle = searchParams.has("title");
  const title = hasTitle
    ? searchParams.get("title").slice(0, 100)
    : "Deluxe UI";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          fontWeight: "bold",
        }}
      >
        <div
          style={{ fontWeight: "bold!important" }}
          tw="text-6xl text-white rounded-lg flex items-center justify-center w-full h-full"
        >
          <img
            alt="deluxe ui logo"
            height={256}
            src="https://res.cloudinary.com/dri9txuuv/image/upload/v1703732142/w3tecxr0tmutk6jcl31u.png"
            tw="w-24 h-24 rounded-full mr-8"
            width={256}
          />
          {title}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
