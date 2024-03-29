export async function loadImageFromSrcSet({ src, srcSet, sizes }: any) {
  return new Promise((resolve, reject) => {
    const srcSetString = srcSetToString(srcSet);

    try {
      if (!src && !srcSet) {
        throw new Error("No image src or srcSet provided");
      }

      let tempImage = new Image();

      if (src) {
        tempImage.src = src;
      }

      if (srcSetString) {
        tempImage.srcset = srcSetString;
      }

      if (sizes) {
        tempImage.sizes = sizes;
      }

      const onLoad = () => {
        tempImage.removeEventListener("load", onLoad);
        const source = tempImage.currentSrc;
        // @ts-ignore
        tempImage = null;
        resolve(source);
      };

      tempImage.addEventListener("load", onLoad);
    } catch (error) {
      reject(`Error loading ${srcSetString}: ${error}`);
    }
  });
}

export function srcSetToString(srcSet = []) {
  if (typeof srcSet === "string") {
    return srcSet;
  }

  return srcSet.map((item: any) => `${item.src} ${item.width}w`).join(", ");
}

export async function generateImage(width = 1, height = 1) {
  return new Promise((resolve) => {
    const canvas = document.createElement("canvas");
    const ctx: any = canvas.getContext("2d");

    canvas.width = width;
    canvas.height = height;

    ctx.fillStyle = "rgba(0, 0, 0, 0)";
    ctx.fillRect(0, 0, width, height);

    canvas.toBlob(async (blob) => {
      if (blob) {
      const image = URL?.createObjectURL(blob);
      canvas.remove();
      resolve(image);
      }
    });
  });
}

export async function resolveSrcFromSrcSet({ srcSet, sizes }: any) {
  const stringSrcSet = srcSetToString(srcSet);

  const sources = await Promise.all(
    stringSrcSet.split(", ").map(async (srcString) => {
      const [src, width] = srcString.split(" ");
      const size = Number(width?.replace("w", ""));
      const image = await generateImage(size);
      return { src, image, width };
    })
  );

  const fakeSrcSet = sources
    .map(({ image, width }) => `${image} ${width}`)
    .join(", ");
  const fakeSrc = await loadImageFromSrcSet({ srcSet: fakeSrcSet, sizes });

  const output: any = sources.find((src) => src.image === fakeSrc);
  return output.src;
}
