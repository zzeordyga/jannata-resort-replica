export interface FileMeta {
  aws_file_url: string;
  path: string;
  filename: { big: string; raw?: string; medium?: string; blur?: string };
}

export interface Slide {
  id: string | number;
  title: string;
  description: string;
  link?: { title: string; url: string; attach?: string };
  featured: FileMeta;
  featured_hover?: FileMeta;
}

export interface HomepageData {
  components: Array<{ name: string; component_name: string; model: Record<string, unknown> }>;
}

export function resolveUrl(meta: FileMeta | undefined): string {
  if (!meta) return '';
  const base = meta.aws_file_url.replace(/\/$/, '');
  const path = (meta.path || '').replace(/^\//, '');
  const file = meta.filename.big || meta.filename.raw || '';
  return `${base}/${path}/${file}`;
}

export function resolveHover(slide: Slide): string {
  return resolveUrl(slide.featured_hover);
}

import data from '~/assets/data/homepage.json';

function findModel(name: string): Record<string, unknown> | undefined {
  return data.components.find((c) => c.component_name === name)?.model;
}

export const hero = (findModel('ComponentOne')?.dataSlider as Slide[]) ?? [];
export const resort = (findModel('ComponentTwo') ?? {}) as Record<string, unknown>;
export const stay = (findModel('ComponentThree') ?? {}) as Record<string, unknown>;
export const dining = (findModel('ComponentFour') ?? {}) as Record<string, unknown>;
export const spa = (findModel('ComponentFive') ?? {}) as Record<string, unknown>;
export const testimonials = (findModel('ComponentSix')?.dataSlider as Slide[]) ?? [];