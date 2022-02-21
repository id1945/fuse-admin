export interface FaqCategory
{
    id: string;
    slug: string;
    title: string;
    faqs?: Faq[];
}

export interface Faq
{
    id: string;
    categoryId: string;
    question: string;
    answer: string;
}

export interface GuideCategory
{
    id: string;
    slug: string;
    title: string;
    totalGuides?: number;
    visibleGuides?: number;
    guides?: Guide[];
}

export interface Guide
{
    id: string;
    categoryId: string;
    slug: string;
    title: string;
    subtitle?: string;
    content?: string;
}
