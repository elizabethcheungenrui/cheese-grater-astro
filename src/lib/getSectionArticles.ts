import { supabase } from './supabaseClient';

export async function getSectionArticles(section: string) {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('section', section)
    .order('date_published', { ascending: false });

  if (error) throw error;
  return data;
}
