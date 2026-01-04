import { supabase } from './supabaseClient';

export interface HomepageArticle {
  slug: string;
  title: string;
  summary: string | null;
  author: string;
  author_thumbnail: string;
  image_url: string | null;
  subsection: string;
  date_published: string;
}

export interface HomepageSection {
  section: string;
  articles: HomepageArticle[];
}

export async function getSectionArticles(section: string, limit?: number): Promise<HomepageSection> {
  let query = supabase
    .from('articles')
    .select('*')
    .eq('section', section)
    .order('date_published', { ascending: false });
  
  if (typeof limit === "number") {
    query = query.limit(limit);
  }  
  
  const { data, error } = await query;
  if (error) throw error;
  
  return {
    section,
    articles: data as HomepageArticle[],
  };
}
