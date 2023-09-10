export interface SearchRes {
    href: string;
    items?: (ItemsEntity)[] | null;
    limit: number;
    next: string;
    offset: number;
    previous?: null;
    total: number;
  }
  export interface ItemsEntity {
    album: Album;
    artists?: (ArtistsEntity)[] | null;
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: ExternalIds;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    is_local: boolean;
    is_playable: boolean;
    name: string;
    popularity: number;
    preview_url?: string | null;
    track_number: number;
    type: string;
    uri: string;
  }
  export interface Album {
    album_type: string;
    artists?: (ArtistsEntity)[] | null;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    images?: (ImagesEntity)[] | null;
    is_playable: boolean;
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
  }
  export interface ArtistsEntity {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }
  export interface ExternalUrls {
    spotify: string;
  }
  export interface ImagesEntity {
    height: number;
    url: string;
    width: number;
  }
  export interface ExternalIds {
    isrc: string;
  }
  