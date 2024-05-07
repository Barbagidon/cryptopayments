interface MetaImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

interface MetaImage {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string | null;
      caption: string | null;
      formats: {
        large: MetaImageFormat;
        small: MetaImageFormat;
        medium: MetaImageFormat;
        thumbnail: MetaImageFormat;
      };
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string | null;
      provider: string;
      provider_metadata: any; // Adjust type as needed
      createdAt: string;
      updatedAt: string;
    };
  };
}

interface IPageSEO {
  id: number;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  structuredData: any;
  canonicalURL: string;
  metaImage: MetaImage;
}

interface SeoDataDataAttributes {
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  seo: IPageSEO;
}

interface SeoData {
  id: number;
  attributes: SeoDataDataAttributes;
}

export interface ISeoResponse {
  data: SeoData;
}
