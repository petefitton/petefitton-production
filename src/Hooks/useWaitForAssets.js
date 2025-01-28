import { useEffect, useState } from 'react';

function useWaitForAssets(propAssetUrls) {
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [assetUrls] = useState(propAssetUrls);

  useEffect(() => {
    // console.log(assetUrls);
    if (assetUrls != null) {
        let loadedCount = 0;

        function increaseCount() {
        loadedCount++;
        if (loadedCount === assetUrls.length) {
            setAssetsLoaded(true);
        }
        }

        assetUrls.forEach(url => {
        const asset = new Image();
        asset.src = url;
        asset.onload = () => {
            increaseCount();
        };
        asset.onerror = () => {
            // console.error(`Failed to load asset at ${url}`);
            increaseCount();
        };
        });
    }
    else {
        // console.log("undefined asset urls")
    }
  }, [assetUrls]);

  return assetsLoaded;
}

export default useWaitForAssets;
