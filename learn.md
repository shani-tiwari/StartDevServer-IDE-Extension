- can add `head` tag before `body` to add Gtag with `dangerouslySetInnerHTML`
- prefer - `GoogleTagManager` component from `@next/third-parties/google` (ss available)

* createPortal() by react-dom
- move the children to `document.body` (modal must be on top of everything)
- not SSR friendly
