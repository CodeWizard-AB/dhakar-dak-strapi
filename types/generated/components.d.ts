import type { Schema, Struct } from '@strapi/strapi';

export interface ArticleSource extends Struct.ComponentSchema {
  collectionName: 'components_article_sources';
  info: {
    displayName: 'source';
  };
  attributes: {
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface EpaperPage extends Struct.ComponentSchema {
  collectionName: 'components_epaper_pages';
  info: {
    displayName: 'page';
  };
  attributes: {
    caption: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    pageNumber: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    canonicalUrl: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    noIndex: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    ogDescription: Schema.Attribute.Text;
    ogImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ogTitle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'article.source': ArticleSource;
      'epaper.page': EpaperPage;
      'seo.seo': SeoSeo;
    }
  }
}
