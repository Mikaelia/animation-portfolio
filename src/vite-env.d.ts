/// <reference types="vite/client" />

interface ImportMeta {
  readonly env: ImportMetaEnv;
  glob: (
    pattern: string,
    options?: any,
  ) => Record<string, () => Promise<string>>;
}

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  // more env variables...
}
