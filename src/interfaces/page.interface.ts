export enum TopLevelCategory{
    Courses = 0,
    Services = 1,
    Books = 2,
    Products = 3
}

export interface TopPageAdvantage{
    _id: string;
    title: string;
    description: string;
}

export interface HhData{
    _id: string;
    count: number;
    juniorSalary: number;
    middleSalary: number;
    seniorSalary: number;
    updatedAt: Date;
}

export interface TopPageModel{
    tags: string[];
    _id: string;
    secondCategory: string;
    alias: string;
    title: string;
    category: string;
    seoText?: string;
    tagsTitle: string;
    metaTitle: string;
    metaDescription: string;
    firstCategory: TopLevelCategory;
    advantages?: TopPageAdvantage[];
    createdAt: Date;
    updatedAt: Date;
    hh?: HhData;
}