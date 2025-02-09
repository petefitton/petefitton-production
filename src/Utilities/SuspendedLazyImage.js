import React, { lazy, Suspense } from 'react';

const LazyImg = lazy(() => import("./LazyImg"));

export default function SuspendedLazyImg(props) {
    return (
        <Suspense fallback={props.fallback}>
            <LazyImg {...props} />
        </Suspense>
    );
}