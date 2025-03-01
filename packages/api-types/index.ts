// import { type BlocksContent } from '@strapi/blocks-react-renderer';

/* Strapi */
interface StrapiPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface StrapiMeta {
  pagination?: StrapiPagination;
}

interface StrapiError {
  status: number;
  name: string;
  message: string;
  details: unknown;
}

export interface StrapiResponseSuccess<T> {
  data: T[];
  meta: StrapiMeta;
}

export interface StrapiSingleResponseSuccess<T> {
  data: T | null;
  meta: StrapiMeta;
}

export interface StrapiResponseFailure {
  data: null;
  error: StrapiError;
}

export interface StrapiRelation<T> {
  data: T;
}

export interface StrapiObj<T> {
  id: number;
  attributes: Omit<T, "id">;
}

/* Media */
interface MediaFile {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
}

export interface Media {
  id: number;
  attributes: {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
      small: MediaFile;
      thumbnail: MediaFile;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string | null;
    provider_metadata: any;
    createdAt: string;
    updatedAt: string;
    placeholder: string | null;
  };
}

export interface MediaRaw {
  id: number;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    small: MediaFile;
    thumbnail: MediaFile;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string | null;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
  placeholder: string | null;
}

/* Campaign */
type CampaignType = "ad" | "banner";
type PlacementType =
  | "home"
  | "in-article"
  | "news"
  | "arena"
  | "hangout"
  | "ototekno"
  | "empati"
  | "gallery"
  | "kanal"
  | "market";

export interface Campaign {
  id: number;
  attributes: {
    image?: StrapiSingleResponseSuccess<Media>;
    type: CampaignType | null;
    name: string | null;
    microsite?: StrapiSingleResponseSuccess<Microsite>;
    targetUrl: string | null;
    special_page?: StrapiSingleResponseSuccess<SpecialPage>;
    placement: PlacementType | null;
    height: number | null;
  };
}

/* Category */
export interface Category {
  id: number;
  attributes: {
    name: string | null;
    posts?: StrapiResponseSuccess<Post>;
    sub_categories?: StrapiResponseSuccess<SubCategory>;
    cover?: StrapiSingleResponseSuccess<Media>;
    isHighlighted: boolean | null;
    color: string | null;
    logo?: StrapiSingleResponseSuccess<Media>;
    metaDescription?: string | null;
    metaKeywords?: string | null;
    metaTitle?: string | null;
  };
}

export interface CategoryRaw {
  id: number;
  name: string | null;
  posts?: PostRaw[];
  sub_categories?: SubCategoryRaw[];
  cover?: MediaRaw;
  isHighlighted: boolean | null;
  color: string | null;
  logo?: MediaRaw;
  metaDescription?: string | null;
  metaKeywords?: string | null;
  metaTitle?: string | null;
}

/* Comment */
export interface Comment {
  id: number;
  attributes: {
    commentText: string | null;
    user?: StrapiSingleResponseSuccess<User>;
    post?: StrapiSingleResponseSuccess<Post>;
    publishedAt: string | null;
  };
}

export interface CommentRaw {
  id: number;
  commentText: string | null;
  user?: UserRaw;
  post?: PostRaw;
  publishedAt: string | null;
}

/* Comment */
export interface CommentModeration {
  id: number;
  attributes: {
    reason: string | null;
    slug: string | null;
    publishedAt: string | null;
  };
}

export interface CommentModerationRaw {
  id: number;
  reason: string | null;
  slug: string | null;
  publishedAt: string | null;
}

/* Election */
export interface Election {
  id: number;
  attributes: {
    year: number | null;
    type: string;
    survey_type: string;
    total_votes_counted: number;
    last_date_counted: string;
    election_summaries: StrapiResponseSuccess<ElectionSummary>;
  };
}

/* Election Summary */
export interface ElectionSummary {
  id: number;
  attributes: {
    candidate_name: string;
    total_votes: number;
    election: StrapiSingleResponseSuccess<Election>;
  };
}

/* Microsite */
export interface Microsite {
  id: number;
  attributes: {
    name: string | null;
    tags?: StrapiResponseSuccess<Tag>;
    cover?: StrapiSingleResponseSuccess<Media>;
    slug: string | null;
    special_pages?: StrapiResponseSuccess<SpecialPage>;
  };
}

/* Post */
interface MetaInfoRaw {
  id: number;
  socialNetwork: string | null;
  title: string | null;
  description: string | null;
  image?: StrapiSingleResponseSuccess<Media>;
}

export interface SEORaw {
  id: number;
  metaTitle: string | null;
  metaDescription: string | null;
  metaImage?: StrapiSingleResponseSuccess<Media>;
  metaSocial?: MetaInfoRaw[];
  keywords: string | null;
  metaRobots: string | null;
  structuredData: any;
  metaViewport: string | null;
  canonicalURL: string | null;
}

export interface Post {
  id: number;
  attributes: {
    title: string | null;
    slug: string | null;
    type: string | null;
    isHonored: boolean | null;
    assets?: StrapiResponseSuccess<Media>;
    document?: StrapiSingleResponseSuccess<Media>;
    tags?: StrapiResponseSuccess<Tag>;
    category?: StrapiSingleResponseSuccess<Category>;
    subtitle: string | null;
    author?: StrapiSingleResponseSuccess<User>;
    editors?: StrapiResponseSuccess<User>;
    comments?: StrapiResponseSuccess<Comment>;
    isFeatured: boolean | null;
    content: string | null;
    sub_category?: StrapiSingleResponseSuccess<SubCategory>;
    rejectedAt: string | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string | null;
    viewCount: number | null;
    seo?: SEORaw;
    isScheduledPublish: boolean | null;
    isScheduledUnpublish: boolean | null;
    isBreakingNews: boolean | null;
    // likeCount: number | null;
    likes?: {
      data: User[];
    };
    bookmarks?: {
      data: User[];
    };
    customUpdatedAt: string | null;
    magazine?: StrapiSingleResponseSuccess<Magazine>;
    edition?: StrapiSingleResponseSuccess<Edition>;
  };
}

export interface PostRaw {
  id: number;
  title: string | null;
  slug: string | null;
  type: string | null;
  isHonored: boolean | null;
  assets?: MediaRaw[];
  document?: MediaRaw;
  tags?: TagRaw[];
  category?: CategoryRaw;
  subtitle: string | null;
  author?: UserRaw;
  editors?: UserRaw[];
  comments?: CommentRaw[];
  isFeatured: boolean | null;
  content: string | null;
  sub_category?: SubCategoryRaw;
  rejectedAt: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  viewCount: number | null;
  seo?: SEORaw;
  isScheduled: boolean | null;
  likes?: User[];
  bookmarks?: {
    data: User[];
  };
  customUpdatedAt: string | null;
}

/* PromotedPost */
export interface PromotedPost {
  id: number;
  attributes: {
    post?: StrapiSingleResponseSuccess<Post>;
  };
}

/* SocialMedia */
type EngagementType = "likes" | "followers" | "subscribers";

export interface SocialMedia {
  id: number;
  attributes: {
    name: string | null;
    image?: StrapiSingleResponseSuccess<Media>;
    url: string | null;
    engagement: string | null;
    engagementType: EngagementType | null;
    microsite?: StrapiSingleResponseSuccess<Microsite>;
  };
}

/* SpecialCoverage */
export interface SpecialCoverage {
  id: number;
  attributes: {
    name: string | null;
    tag?: StrapiSingleResponseSuccess<Tag>;
    cover?: StrapiSingleResponseSuccess<Media>;
  };
}

/* SpecialPage */
export interface SpecialPage {
  id: number;
  attributes: {
    name: string | null;
    tags?: StrapiResponseSuccess<Tag>;
    cover?: StrapiSingleResponseSuccess<Media>;
    slug: string | null;
    campaigns?: StrapiResponseSuccess<Campaign>;
    microsite?: StrapiSingleResponseSuccess<Microsite>;
  };
}

/* SubCategory */
export interface SubCategory {
  id: number;
  attributes: {
    name: string | null;
    category?: StrapiSingleResponseSuccess<Category>;
    posts?: StrapiResponseSuccess<Post>;
    slug: string | null;
    metaDescription?: string | null;
    metaKeywords?: string | null;
    metaTitle?: string | null;
  };
}

export interface SubCategoryRaw {
  id: number;
  name: string | null;
  category?: Category;
  posts?: Post[];
  slug: string | null;
  metaDescription?: string | null;
  metaKeywords?: string | null;
  metaTitle?: string | null;
}

/* Tag */
export interface Tag {
  id: number;
  attributes: {
    name: string | null;
    posts?: StrapiResponseSuccess<Post>;
    metaDescription: string | null;
    isVerified: boolean | null;
    slug: string | null;
    metaKeywords?: string | null;
    sectionTitle?: string | null;
    metaTitle?: string | null;
    sectionDescription?: string | null;
  };
}

export interface TagRaw {
  id: number;
  name: string | null;
  posts?: PostRaw[];
  metaDescription: string | null;
  isVerified: boolean | null;
  slug: string | null;
  metaKeywords?: string | null;
  sectionTitle?: string | null;
  metaTitle?: string | null;
  sectionDescription?: string | null;
}

export interface CustomTags {
  data: TagRaw[];
  meta: {
    pagination?: {
      start: number;
      limit: number;
      total: number;
    };
  };
}

/* Auth */
export interface Auth {
  jwt: string;
  user: UserRaw;
}

/* User */
export interface User {
  id: number;
  attributes: {
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
    firstname: string | null;
    lastname: string | null;
    cover?: StrapiSingleResponseSuccess<Media>;
    avatar?: StrapiSingleResponseSuccess<Media>;
    bio: string | null;
    facebook: string | null;
    twitter: string | null;
    instagram: string | null;
    title?: string | null;
    liked_posts?: Post[];
    bookmarked_posts?: Post[];
  };
}

export interface UserRaw {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  firstname: string | null;
  lastname: string | null;
  cover?: MediaRaw;
  avatar?: MediaRaw;
  bio: string | null;
  facebook: string | null;
  twitter: string | null;
  instagram: string | null;
  title?: string | null;
  liked_posts?: Post[];
  bookmarked_posts?: Post[];
}

export interface CustomUsers {
  data: UserRaw[];
  meta: {
    pagination?: {
      start: number;
      limit: number;
      total: number;
    };
  };
}

export interface JadwalSholatData {
  ashar: string;
  dhuha: string;
  dzuhur: string;
  imsak: string;
  isya: string;
  maghrib: string;
  subuh: string;
  tanggal: string;
  terbit: string;
}
export interface Province {
  code: string;
  name: string;
  alt_name: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  google_place_id: string;
}

export interface ProvinceResponse {
  data: Province[];
  meta: {
    administrative_area_level: number;
    updated_at: string;
  };
}

export interface Place {
  name: string;
  address: string;
  direction: string;
}

export interface MapsResponse {
  data: {
    hospital: Place[];
    gasStation: Place[];
    atm: Place[];
    touristAttraction: Place[];
  };
}

export interface Geometry {
  location: {
    lat: number;
    lng: number;
  };
  viewport: {
    northeast: {
      lat: number;
      lng: number;
    };
    southwest: {
      lat: number;
      lng: number;
    };
  };
}

export interface Photo {
  height: number;
  html_attributions: string[];
  photo_reference: string;
  width: number;
}

export interface PlusCode {
  compound_code: string;
  global_code: string;
}

export interface OpeningHours {
  open_now: boolean;
}

export interface NearbyResult {
  business_status: string;
  geometry: Geometry;
  icon: string;
  icon_background_color: string;
  icon_mask_base_uri: string;
  name: string;
  opening_hours: OpeningHours;
  photos: Photo[];
  place_id: string;
  plus_code: PlusCode;
  price_level?: number;
  rating?: number;
  reference: string;
  scope: string;
  types: string[];
  user_ratings_total: number;
  vicinity: string;
}

export interface NearbyApiResponse {
  html_attributions: string[];
  results: NearbyResult[];
}

export interface DetailsResult {
  formatted_address: string;
  name: string;
  url: string;
}

export interface DetailsApiResponse {
  html_attributions: any[];
  result: DetailsResult;
  status: string;
}

export interface Pray {
  id: number;
  attributes: {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    title: string;
    arabic: string;
    meanings: string;
    latin: string;
  };
}

export interface Personage {
  id: number;
  attributes: {
    fullname: string;
    birthdate: string;
    age: number;
    biography: any;
    educations: any;
    experiences: any;
    photo: StrapiSingleResponseSuccess<Media>;
    tag?: StrapiSingleResponseSuccess<Tag>;
    number: number;
    slug: string;
    vice?: StrapiSingleResponseSuccess<Personage>;
  };
}

export interface ElectionRegion {
  id: number;
  attributes: {
    name: string;
    slug: string;
    totalPopulation: number;
    totalVoter: number;
    density: string;
    landArea: string;
    waterArea: string;
    laititude: string;
    longitude: string;
    totalTPS: number;
    totalArea: string;
    createdAt: Date;
    updatedAt: Date;
    currentLeaderPeriod: string;
    leaderLengthOfService: string;
    currentLeaderStartDate: string;
    currentLeader: {
      data: Personage;
    };
    candidates: Personage[];
    tag: StrapiSingleResponseSuccess<Tag>;
  };
}

export interface Interest {
  id: number;
  attributes: InterestRaw;
}

export interface InterestRaw {
  name: string | number[];
  emoji: string;
  users: User[] | number;
  publishedAt?: string | null;
}

export interface Correction {
  id: number;
  attributes: {
    correction: number | null;
  };
}

export interface HijriDateResponse {
  code: number;
  data: {
    gregorian: {
      date: string;
      day: string;
      designation: {
        abbreviated: string;
        expanded: string;
      };
      format: string;
      month: {
        en: string;
        number: number;
      };
      weekday: {
        en: string;
      };
      year: string;
    };
    hijri: {
      date: string;
      day: string;
      designation: {
        abbreviated: string;
        expanded: string;
      };
      format: string;
      holiday: string[];
      month: {
        ar: string;
        en: string;
        number: number;
      };
      weekday: {
        ar: string;
        en: string;
      };
      year: string;
    };
  };
  status: string;
}

export interface Review {
  id: number;
  attributes: {
    image?: StrapiResponseSuccess<Media>;
    name: string | null;
    targetUrl: string | null;
  };
}

export interface ToC {
  id: number;
  attributes: {
    name: string;
    slug: string;
    content: any;
    seo?: SEORaw;
  };
}

export interface Edition {
  id: number;
  attributes: {
    name: string | null;
    slug: string | null;
    magazine: StrapiSingleResponseSuccess<Magazine>;
    // posts: StrapiResponseSuccess<Post>;
    posts: StrapiResponseSuccess<Post>;
  };
}

export interface Magazine {
  id: number;
  attributes: {
    cover?: StrapiResponseSuccess<Media>;
    title: string | null;
    posts: StrapiResponseSuccess<Post>;
    slug: string | null;
    description: string | null;
    editions: StrapiResponseSuccess<Edition>;
    seo?: SEORaw;
  };
}

export interface Editorial {
  id: number;
  attributes: {
    name: string;
    division: string;
    app: string;
    user: StrapiSingleResponseSuccess<User>;
  };
}
