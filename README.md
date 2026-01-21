# AI Research Insight Hub - Production Guide

A high-performance platform for PDF text extraction, AI-powered summarization, and semantic search.

## 🚀 Quick Start (Frontend)

1. **Environment**: This project is designed as a modern React SPA using ES modules.
2. **API Key**: Ensure `process.env.API_KEY` is configured with your Google Gemini API key.
3. **Run**:
   - For local development, serve the root directory using a static server or Vite.
   - The app uses `localStorage` for persistence and PDF.js for client-side parsing.

## ⚙️ Backend Setup (Django + FAISS)

For production-scale document management and vector search, a Django backend is required.

### Prerequisites
- Python 3.10+
- `pip install django djangorestframework django-cors-headers google-generativeai faiss-cpu pypdf`

### Local Setup
1. **Initialize Django**:
   ```bash
   django-admin startproject research_backend
   cd research_backend
   python manage.py startapp api
   ```
2. **Configuration**: Add `rest_framework`, `corsheaders`, and `api` to `INSTALLED_APPS` in `settings.py`.
3. **Logic**: Use the provided `backend_logic.py` for your `api/views.py`.
4. **Environment**: Create a `.env` file with `GEMINI_API_KEY=your_key_here`.
5. **Run**: `python manage.py runserver`

## 🧠 AI Architecture

### 1. Summarization & Insights
Uses **Gemini 3 Flash** with structured JSON output (Response Schema) to ensure:
- Zero hallucinations.
- Consistent academic tone.
- Clear separation of Methodology, Findings, and Limitations.

### 2. Semantic Search (RAG)
- **Embedding**: Generates vectors using Gemini for query and document chunks.
- **Vector DB**: FAISS (Facebook AI Similarity Search) stores these vectors for low-latency retrieval.
- **Synthesis**: The top-K retrieved chunks are fed back to Gemini to generate a grounded, natural language answer.

## 📁 Project Structure
- `index.html`: Entry point & Map imports.
- `index.tsx`: React mounting logic.
- `App.tsx`: View routing and global state.
- `services/`: AI and PDF processing logic.
- `components/`: Modular UI components.
- `types.ts`: Global TypeScript interfaces.
- `backend_logic.py`: Reference Django backend implementation.

## 🛡️ Security & Performance
- **Client-side PDF Parsing**: Reduces server load and improves privacy.
- **Chunking**: Large documents are split (1000-word windows) to fit context limits.
- **Graceful Error Handling**: Robust UI feedback for API failures or corrupted files.

---
*Created by Senior AI Architect*
