import openai

openai.api_key = "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"

# gpt-4-32k
openai.ChatCompletion.create(
  model="gpt-3.5-turbo",
  messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Who won the world series in 2020?"},
        {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
        {"role": "user", "content": "Where was it played?"}
    ]
)
