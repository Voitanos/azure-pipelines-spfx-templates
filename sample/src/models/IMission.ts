export interface IMission {
  id: string;
  name: string;
  launch_date?: string;
  end_date?: string;
  image?: string;
  wiki_href: string;
  summary?: string;
  vehicles?: any[];
  crew?: any[];
}
