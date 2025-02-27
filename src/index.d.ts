/// <reference types="svelte" />

declare module "@pfzone/svelte-zoom/index.svelte" {
  import type { Component } from "svelte";
  type ZoomComponent = Component<
    {
      src?: string; // Source image URL
      alt?: string; // Alt text for the image
      scale?: number; // Zoom scale factor
      maxScale?: number; // Maximum zoom scale
      minScale?: number; // Minimum zoom scale
      scrollPan?: boolean; // Enable/disable scroll panning
    },
    {
      zoomIn(): void;
      zoomOut(): void;
      reset(): void;
    }
  >;
  export default ZoomComponent;
}
