import { useEffect, useState } from 'react';

function useWaitForAssets(propAssetUrls) {
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [assetUrls] = useState(propAssetUrls);

  useEffect(() => {
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
            asset.onload = () => {increaseCount();};
            asset.onerror = () => {increaseCount();};
        });
    }
  }, [assetUrls]);

  return assetsLoaded;
}

export default useWaitForAssets;
