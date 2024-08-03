type JsonPrimitive = string | number | boolean | null

function isJsonPrimitive(value: unknown): value is JsonPrimitive {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean' ||
    value === null
  )
}

type JsonValue = JsonPrimitive | JsonArray | JsonObject

function isJsonValue(value: unknown): value is JsonValue {
  return isJsonPrimitive(value) || isJsonArray(value) || isJsonObject(value)
}

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
type JsonObject = {
  [key: string]: JsonValue
}

function isJsonObject(value: unknown): value is JsonObject {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    return false
  }

  for (const key in value) {
    if (!isJsonValue((value as Record<string, unknown>)[key])) {
      return false
    }
  }

  return true
}

type JsonArray = JsonValue[]

function isJsonArray(value: unknown): value is JsonArray {
  return Array.isArray(value) && value.every(isJsonValue)
}

export {
  isJsonArray,
  isJsonObject,
  isJsonPrimitive,
  isJsonValue,
  type JsonArray,
  type JsonObject,
  type JsonPrimitive,
  type JsonValue
}
