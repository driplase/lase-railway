import RouteMapSVG, { width, height } from "@/components/RouteMapSVG";
import { ImageResponse } from "takumi-js/response";

export function GET(request: Request) {
  return new ImageResponse(<RouteMapSVG />, {
    width,
    height,
  });
}