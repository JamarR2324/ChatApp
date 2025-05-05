import sys
import openai

openai.api_key = "your_openai_api_key"

def summarize_text(text):
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "user", "content": f"Summarize this: {text}"}]
    )
    return response['choices'][0]['message']['content']

if __name__ == "__main__":
    input_text = sys.argv[1]
    summary = summarize_text(input_text)
    print("\nSummary:\n", summary)
