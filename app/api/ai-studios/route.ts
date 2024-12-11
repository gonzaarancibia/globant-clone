import { NextResponse } from "next/server";

export async function GET() {
  const aiStudios = [
    {
      id: "Enterprise AI",
      img: "https://statics.globant.com/production/public/2024-05/news%20block-image-%20enterprise%20ai%20%282%29.jpg",
      title: "ENTERPRISE AI",
      description:
        "Boost your business productivity and solve corporate challenges with GenAI",
    },
    {
      id: "Connected Experiences",
      img: "https://statics.globant.com/production/public/2024-05/news%20block-image-connected%20%282%29.jpg",
      title: "CONNECTED EXPERIENCES",
      description: "Delight your customers to build lifelong fans",
    },
    {
      id: "Healthcare & Life Sciences",
      img: "https://statics.globant.com/production/public/2024-05/news%20block-image-HLS.jpg",
      title: "HEALTHCARE & LIFE SCIENCES",
      description:
        "Reinventing the life sciences ecosystem through tangible technologically-driven solutions",
    },
    {
      id: "Finance",
      img: "https://statics.globant.com/production/public/2024-05/news%20block-image-Finance.jpg",
      title: "FINANCE",
      description:
        "Helping financial organizations transform with cutting-edge AI technology and tailored solutions",
    },
  ];

  return NextResponse.json({ data: aiStudios });
}
