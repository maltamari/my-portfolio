// Shared types for the portfolio application

export type ActionFunction = (
  prev: { message: string },
  formData: FormData
) => Promise<{ message: string }>;

// Deprecated alias — use ActionFunction instead
export type actionFunction = ActionFunction;

export interface Project {
  image: string;
  title: string;
  overview: string;
  key: Record<string, string>;
  tools: string;
  link: string;
}

export interface Service {
  name: string;
  description: string;
}

export interface LinkImage {
  href: string;
  name: string;
}

export interface LinkPage {
  href: string;
  label: string;
}