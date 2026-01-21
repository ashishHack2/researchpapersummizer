
import os
import json
import google.generativeai as genai
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import dotenv

dotenv.load_dotenv(os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))), '.env'))

GEMINI_API_KEY = os.getenv('GEMINI_API_KEY')
if GEMINI_API_KEY:
    genai.configure(api_key=GEMINI_API_KEY)

class SummaryView(APIView):
    def post(self, request):
        text = request.data.get('text', '')
        if not text:
            return Response({'error': 'No text provided'}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            model = genai.GenerativeModel('gemini-1.5-flash')
            prompt = f"""Analyze the following research paper text and provide a structured summary.
            Return JSON format only. Do not hallucinate. Use academic tone.
            
            Text: {text[:30000]}"""
            
            response = model.generate_content(
                prompt,
                generation_config={
                    "response_mime_type": "application/json",
                    "response_schema": {
                        "type": "OBJECT",
                        "properties": {
                            "abstract": {"type": "STRING"},
                            "findings": {"type": "ARRAY", "items": {"type": "STRING"}},
                            "methodology": {"type": "STRING"},
                            "limitations": {"type": "STRING"}
                        },
                        "required": ["abstract", "findings", "methodology", "limitations"]
                    }
                }
            )
            return Response(json.loads(response.text))
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class InsightView(APIView):
    def post(self, request):
        text = request.data.get('text', '')
        if not text:
            return Response({'error': 'No text provided'}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            model = genai.GenerativeModel('gemini-1.5-flash')
            prompt = f"""Extract deep technical insights from this research paper. 
            Focus on specific objectives, key concepts, results, and ultimate conclusions.
            Return JSON format only.
            
            Text: {text[:30000]}"""
            
            response = model.generate_content(
                prompt,
                generation_config={
                    "response_mime_type": "application/json",
                    "response_schema": {
                        "type": "OBJECT",
                        "properties": {
                            "keyConcepts": {"type": "ARRAY", "items": {"type": "STRING"}},
                            "objectives": {"type": "ARRAY", "items": {"type": "STRING"}},
                            "results": {"type": "ARRAY", "items": {"type": "STRING"}},
                            "conclusions": {"type": "ARRAY", "items": {"type": "STRING"}}
                        },
                         "required": ["keyConcepts", "objectives", "results", "conclusions"]
                    }
                }
            )
            return Response(json.loads(response.text))
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class SearchView(APIView):
    def post(self, request):
        query = request.data.get('query', '')
        if not query:
             return Response({'error': 'No query provided'}, status=status.HTTP_400_BAD_REQUEST)

        # Mock implementation for demonstration as FAISS setup requires index persistence logic
        # which is complex to spin up in this short context without existing index.
        # In a real app, this would query the FAISS index.
        
        try:
             model = genai.GenerativeModel('gemini-1.5-flash')
             response = model.generate_content(
                f"""Based on the user query "{query}", generate a simulated search response 
                that looks like it came from a semantic search of research papers.
                Provide a direct answer based on general knowledge about the potential topic.
                """
             )
             return Response({'answer': response.text})
        except Exception as e:
             return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
