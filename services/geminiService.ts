import { DocumentSummary, DocumentInsights } from "../types";

const API_BASE_URL = 'http://localhost:8000/api';

export const generateSummary = async (text: string): Promise<DocumentSummary> => {
  const response = await fetch(`${API_BASE_URL}/summarize/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch summary from backend');
  }

  return response.json();
};

export const extractInsights = async (text: string): Promise<DocumentInsights> => {
  const response = await fetch(`${API_BASE_URL}/insights/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch insights from backend');
  }

  return response.json();
};

export const getEmbeddings = async (text: string): Promise<number[]> => {
  // Mock embeddings for now, or could implement a backend endpoint if needed.
  // Since SearchPage logic is changing to server-side search, this might not be needed
  // directly, but keeping it for type compatibility if used elsewhere.
  return Array.from({ length: 768 }, () => Math.random());
};

export const search = async (query: string): Promise<{ answer: string }> => {
  const response = await fetch(`${API_BASE_URL}/search/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error('Failed to perform search');
  }

  return response.json();
}

export const refineSearchResults = async (query: string, results: string[]): Promise<string> => {
  // This function was used for client-side synthesis.
  // We can redirect it to the search endpoint or keep it as legacy
  // if we want to maintain signature but use the backend.
  // Ideally, SearchPage should call search() directly.
  const result = await search(query);
  return result.answer;
};
